import React, { useState } from "react";
import "./Register.scss";

import { Form, Link, redirect, useNavigation, useSearchParams } from "react-router-dom";
import { handleRegister } from "../../utils";

export async function action({ request }) {
  const formData = await request.formData();

  const userName = formData.get("user_name");
  const email = formData.get("email");
  const password = formData.get("password");
  const rePassword = formData.get("re_password");

  if (password !== rePassword) throw redirect("?message=the password is not the same");

  const userInfo = await handleRegister({ userName, email, password });
  console.log(userInfo);
  redirect("/p");
  return null;
}

export default function Register() {
  const formState = useNavigation().state;
  const [searchParams, setSearchParams] = useSearchParams();
  const formMessage = searchParams.get("message");
  const [isMessage, setIsMessage] = useState(formMessage ? true : false);

  return (
    <section className="form-section">
      <div className="login-container">
        <h3>login</h3>

        {isMessage && (
          <div className="form-message">
            <button className="error-btn" onClick={() => setIsMessage(false)}>
              x
            </button>
            <p>{formMessage}</p>
          </div>
        )}

        <Form className="login-form" method="post">
          <div className="login-form__input">
            <input type="text" name="user_name" placeholder="User Name" />
          </div>

          <div className="login-form__input">
            <input type="email" name="email" placeholder="Email" />
          </div>

          <div className="login-form__input">
            <input type="password" name="password" placeholder="Password" />
          </div>

          <div className="login-form__input">
            <input type="password" name="re_password" placeholder="Repeat the password" />
          </div>

          <div>
            <span>have alrady an acount?</span> <Link to="/login">login</Link>
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
