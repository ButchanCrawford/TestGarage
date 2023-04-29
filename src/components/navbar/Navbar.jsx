import React from "react";
import styles from "./Navbar.module.css";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.logo_container}>
        <img
          src="https://tinyurl.com/2r4p8xdr"
          alt="logo"
          className={styles.img}
        />
        <p>Test Garage</p>
      </div>

      <nav>
        <ul
          className={
            nav ? [styles.menu, styles.active].join(" ") : [styles.menu]
          }
        >
          <li>
            <a href="/">Learn more</a>
          </li>
          <li>
            <a href="/">Log in</a>
          </li>
          <li>
            <a href="/">Sign up</a>
          </li>
          <li>
            <AiOutlineSearch size={25} className={styles.icons} />
          </li>
          <li>
            <AiOutlineUser size={25} className={styles.icons} />
          </li>
        </ul>
      </nav>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </header>
  );
}

export default Navbar;
