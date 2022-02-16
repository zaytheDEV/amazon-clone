const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51JLZE5K35W2pitsQnlWaeDn0xzQDyM85jNRw0kLyrvBD4CiNJtVNsVgeXFymJWCZoAB6w33afZFgitbXz2UkfEJj00s4CxktuI')

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async(request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received!!', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app)