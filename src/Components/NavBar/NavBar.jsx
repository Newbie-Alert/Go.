import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className={styles.nav_container}>
      <Link className={styles.nav_link} to="/">
        Home
      </Link>
      <Link className={styles.nav_link} to="/feeds">
        Feed
      </Link>
      <Link className={styles.nav_link} to="/mypage">
        My
      </Link>
    </nav>
  );
}
