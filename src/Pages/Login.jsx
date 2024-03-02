import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";

import "../css/Login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const onButtonClick = () => {
    // Set initial error values to empty
    setEmailError("");
    setPasswordError("");

    // Check if the user has entered both fields correctly
    if ("" === email) {
      setEmailError("Please enter your email");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
      return;
    }

    if (password.length < 7) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }

    console.log(email, password);

    // Authentication calls will be made here...
  };

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/Dashboard");
  }

  return (
    <div className={"mainContainer"}>
      <form onSubmit={handleSubmit} action="" method="POST">
        <div className={"titleContainer"}>
          <div style={{ color: "#043A3A" }}>Login</div>
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            value={email}
            placeholder="Enter your email here"
            onChange={(ev) => setEmail(ev.target.value)}
            className={"inputBox"}
          />
          <label
            htmlFor="formGroupExampleInput"
            className="form-label text-danger"
          >
            {emailError}
          </label>
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            type="password"
            value={password}
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)}
            className={"inputBox"}
          />
          <label className="form-label text-danger">{passwordError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
          {/* <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} /> */}

          {/* <button
            className="btn btn-primary"
            onClick={onButtonClick}
            value={"Log in"}
          >
            {"Login"}
          </button> */}

          <Button onClick={onButtonClick} link={"/section"} value={"Login"} />
          <div className="mt-5">
            <Link to="/">
              <a
                href="#"
                className="rounded-pill text-success"
                style={{
                  backgroundColor: "white !important",
                }}
              >
                Go back
              </a>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
