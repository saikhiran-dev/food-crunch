import React, { useState } from "react";
import { useForm } from "react-hook-form";

// import signup from "./signup.js";

import "./styles.scss";
import loginIcon from "../../assets/login-icon.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const eye = <FontAwesomeIcon icon={faEye} />;

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    criteriaMode: "all",
  });
  const formSubmit = (data) => {
    reset();
    console.log(data);
    // localStorage.setItem(data);
  };
  const togglePassword = () => {
    setShowPassword(showPassword ? false : true);
  };
  return (
    <div className="login-container-bg">
      <div className="login-container">
        <img src={loginIcon} className="login-icon" alt="login-img" />
        <h1>Login</h1>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="login-wrap">
            <input
              {...register("email", {
                required: true,

                pattern: /^\S+@\S+\.\S[com]+$/,
              })}
              className={
                errors.email ? "error-input-invalid" : "error-input-valid"
              }
              type="text"
              placeholder="Email Address"
            />
          </div>
          {errors?.email?.types?.required && (
            <p className="error-alert">required*</p>
          )}
          {errors?.email?.types?.pattern && (
            <p className="error-alert">invalid email*</p>
          )}

          <div className="login-wrap">
            <input
              {...register("password", {
                required: true,
                pattern: /^\S[\w]\S{6,22}\S$/,
              })}
              className={
                errors.password ? "error-input-invalid" : "error-input-valid"
              }
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <i onClick={togglePassword} style={{ cursor: "pointer" }}>
              {eye}
            </i>
          </div>
          {errors?.password?.types?.required && (
            <p className="error-alert">required*</p>
          )}
          {errors?.password?.types?.pattern && (
            <p className="error-alert">Invalid Password</p>
          )}

          <p className="forgot-password" style={{ cursor: "pointer" }}>
            Forgot Password?
          </p>

          <div>
            <button type="submit" className="login-btn btn">
              Login
            </button>
          </div>
          <div>
            <p>
              Don't have an Account?
              <Link
                to="/signup"
                style={{ color: "blue", paddingLeft: "0.3rem" }}
              >
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
