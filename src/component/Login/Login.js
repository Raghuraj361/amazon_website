import React, { useState } from "react";
import "./Login.css";
import image from "./loginLogo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [signupUser, setSignupUser] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  if (username) {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("username", username);
  }

  const signIn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter email and password");
    } else if (
      email === localStorage.getItem("email") &&
      password === localStorage.getItem("password")
    ) {
      navigate("/");
    } else {
      alert("Incorrect email or password. Please try again.");
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="loginLogo" src={image} alt="#" />
      </Link>

      <div className="loginContainer">
        <h1>Sign In</h1>
        <form>
          {signupUser && (
            <>
              <label htmlFor="username">
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter UserName"
                name="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </>
          )}

          <h5>E-mail</h5>
          <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="loginSigninButton">
            {signupUser ? "Register" : "Log In"}
          </button>
          {!signupUser && (
            <a className="forget-pass" href="#">
              Forgot password?
            </a>
          )}
          {error && <p className="error">{error}</p>}
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <p className="subtitle">
          {signupUser ? "Already have an account?" : "New to Amazon?"}
          <br />
          <br />
          <a href="#" onClick={() => setSignupUser(!signupUser)}>
            {signupUser ? (
              <button className="loginButton">Log In</button>
            ) : (
              <button className="loginRegisterButton">
                Create your Account
              </button>
            )}
          </a>
        </p>
        {/* <button onClick={register} className="loinRegisterButton">
          Create your Account
        </button> */}
      </div>
    </div>
  );
}
export default Login;
