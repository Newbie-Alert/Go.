import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import UserMenu from "../UserMenu/UserMenu";

export default function Header({ tokenStorage }) {
  const [sign, setSign] = useState(false);
  const [signUiToggle, setSignUiToggle] = useState(false);
  const [toSignUp, setSignUpToggle] = useState(false);
  const [loginUi, setLoginUi] = useState(true);
  const [userMenu, setUserMenu] = useState(false);

  // USE EFFECT
  useEffect(() => {
    tokenStorage.getToken("token") && setSignUiToggle(true);
  }, [tokenStorage]);

  // Header UI Function
  const signCompToggle = () => {
    setSign((sign) => !sign);
    setLoginUi(true);
    setSignUpToggle(false);
  };
  const signUiHandler = (result) => {
    setSignUiToggle(result);
  };
  const showMenus = () => {
    setUserMenu((state) => !state);
  };

  return (
    <>
      {sign === true && (
        <div className={styles.sign_comp}>
          {toSignUp && <SignUp setLoginUi={setLoginUi} />}
          {loginUi && (
            <SignIn
              signUiHandler={signUiHandler}
              setSignUpToggle={setSignUpToggle}
              tokenStorage={tokenStorage}
              setLoginUi={setLoginUi}
            />
          )}
        </div>
      )}
      <div className={styles.header_container}>
        {userMenu && <UserMenu tokenStorage={tokenStorage} />}
        <div className={styles.header_flex_grow}></div>
        <h2 className={styles.header_logo}>Go.</h2>
        <button className={styles.sign_button}>
          {signUiToggle === false ? (
            <h2 onClick={signCompToggle}>sign</h2>
          ) : (
            <h2 onClick={showMenus}>my Trip</h2>
          )}
        </button>
      </div>
    </>
  );
}
