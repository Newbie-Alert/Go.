import React, { useState } from "react";
import styles from "./SignUp.module.css";
import axios from "axios";

export default function SignUp() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const onSignUp = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/auth/signup`, {
        nickname,
        password,
        username,
        email,
      })
      .then((res) => {
        if (res.status === 201) {
          // 가입 완료 UI 띄우기 || 로그인 폼 띄우기
          console.log("회원가입 완료!");
        }
      })
      .catch((res) => console.log(res.response.data));
  };

  return (
    <div className={styles.signcomp_container}>
      <form>
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
                console.log(nickname);
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
          <div
            className={`${styles.sign_in_username_input} ${styles.sign_input}`}
          >
            <label htmlFor="username">user name</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={`${styles.sign_in_email_input} ${styles.sign_input}`}>
            <label htmlFor="email">email</label>
            <input
              type="email"
              required
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.sign_comp_button_container}>
          <button onClick={onSignUp}>Sign Up</button>
        </div>
      </form>
    </div>
  );
}
