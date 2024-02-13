import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import signupIcon from "../../assets/signup.png";

function Signup() {
  const { register, handleSubmit } = useForm();

  const formSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="signup-container-bg">
      <div className="signup-container">
        <img src={signupIcon} className="signup-icon" alt="login-img" />
        <h1>Signup</h1>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div>
            <input
              type="text"
              {...register("firstName", {
                required: true,
                minLength: 6,
              })}
              placeholder="First Name"
            />
          </div>
          <div>
            <input
              type="text"
              {...register("lastName", {
                required: true,
                minLength: 4,
              })}
              placeholder="Last Name"
              required
            />
          </div>

          <div>
            <input
              type="email"
              {...register("email", {
                required: true,
              })}
              placeholder="Email Address"
            />
          </div>

          <div>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 5,
                maxLength: 21,
              })}
              placeholder="Password"
            />
          </div>

          <div>
            <input
              type="password"
              {...register("confirmPassword", {
                required: true,
                minLength: 5,
                maxLength: 21,
              })}
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <button type="submit" className="signup-btn btn">
              signup
            </button>
          </div>
          <p>
            Already have an Account?
            <Link to="/login" style={{ color: "blue", paddingLeft: "0.3rem" }}>
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
