import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
        history.push('/');
    })
    .catch(error => alert(error.message))
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if(auth) {
            history.push('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <div className="login_img">
          <img
            className="login_logo"
            src={process.env.PUBLIC_URL + "/2560px-Amazon_logo.svg.png"}
            alt=""
          />
        </div>
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login_signInBTN" type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By continuing you agree to Amazon's FAKE CLONE{" "}
          <b>Conditions of Use</b> and <b>Privacy Notice</b>
        </p>
      </div>
      <div className="login_createAccountHolder">
        <span>New to Amazon?</span>
        <button className="login_create" onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
