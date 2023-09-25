import React, { useState } from "react";
import styles from "./SignIn.module.css";
import axios from "axios";

export default function SignIn({ tokenStorage, setSignUpToggle, setLoginUi }) {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/auth/login`, {
        nickname,
        password,
      })
      .then((res) => {
        tokenStorage.setToken(res.data.token);
      })
      .catch((err) => console.log(err));
  };

  const changeSignForm = () => {
    setSignUpToggle((state) => !state);
    setLoginUi((state) => !state);
  };
  return (
    <div className={styles.signcomp_container}>
      <form onSubmit={onLogin}>
        <div className={styles.sign_form}>
          <div className={`${styles.sign_in_name_input} ${styles.sign_input}`}>
            <label htmlFor="nickname">nickname</label>
            <input
              type="text"
              id="nickname"
              name="nickname"
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
              }}
            />
          </div>
          <div
            className={`${styles.sign_in_password_input} ${styles.sign_input}`}
          >
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.sign_button_box}>
          <button onClick={changeSignForm}>Sign Up</button>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}
