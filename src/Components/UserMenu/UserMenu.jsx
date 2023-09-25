import React from "react";
import styles from "./UserMenu.module.css";
import { Link } from "react-router-dom";

export default function UserMenu({ tokenStorage }) {
  return (
    <div className={styles.user_menu_container}>
      <ul className={styles.user_menus}>
        <Link className={styles.menu_link} to={"/myposts"}>
          <li className={styles.user_menu}>my Posts</li>
        </Link>

        <Link className={styles.menu_link} to={"/feeds"}>
          <li className={styles.user_menu}>Feed</li>
        </Link>

        <li className={styles.user_menu} onClick={tokenStorage.clearToken}>
          logout
        </li>
      </ul>
    </div>
  );
}
