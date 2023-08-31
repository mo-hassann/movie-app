import React from "react";
import "./Login.scss";

import { Form, Link, redirect, useNavigation } from "react-router-dom";
import { handleLogin } from "../../utils";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  const userInfo = await handleLogin({ email, password });
  console.log(userInfo);
  redirect("/p");
  return null;
}

export default function Login() {
  const formState = useNavigation().state;
  console.log(formState);
  return (
    <section className="form-section">
      <div className="login-container">
        <h3>login</h3>

        <Form className="login-form" method="post">
          <div className="login-form__input">
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="login-form__input">
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div>
            <span>new user?</span> <Link to="/register">register</Link>
          </div>
          {formState === "idle" ? (
            <button type="submit" className="btn">
              login
            </button>
          ) : (
            <button type="submit" disabled className="btn disabled">
              login
            </button>
          )}
        </Form>
      </div>
    </section>
  );
}
