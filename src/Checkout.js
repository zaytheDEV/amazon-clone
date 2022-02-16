import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import SubTotal from "./Subtotal";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';
import { Link } from "react-router-dom";

function Checkout() {
  const [{ basket }] = useStateValue();
  
  return (
    <div className="checkout">
      <div className="checkout_left">
        <div className="checkout_ad">
          <img
            src={process.env.PUBLIC_URL + "/core-dp._CB485980902_.png"}
            alt=""
          />
          <span>
            Get A <b className="checkout_CTA">$50 Amazon Gift card instantly</b>{" "}
            upon approval for the <b>Amazon Rewards Visa Card</b>
          </span>
          <button className="checkout_cardBTN">apply now</button>
        </div>
        <div className="checkout_Cart">
          <div className="checkout_cartTitle">
            <span style={{ fontSize: "2rem" }}>Shopping Cart</span>
            <span style={{ fontSize: ".8rem" }}>Price</span>
          </div>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
               
          ))}
          {!basket.length == 0 && (
              <div className="checkout_subTotal">
              <CurrencyFormat 
                    renderText={(value) => (
                        <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                />
              </div> 
          )}
          {basket.length == 0 && (
              <div className='checkout_emptyCartContainer'>
                  <div className='chekout_emptyCartImg'>
                    <img src={process.env.PUBLIC_URL + '/kettle-desaturated._CB445243794_.svg'} alt=""/>
                  </div>
                  <div className="checkout_emptyCartTitle">
                      <h1>Your Amazon cart is empty</h1>
                      <Link to='/' style={{textDecoration:'none'}}><span>Shop today's deals</span></Link>
                  </div>
              </div>
          )}
        </div>
      </div>
      <div className="checkout_right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
