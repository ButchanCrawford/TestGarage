import React from "react";
import styles from "./Navbar.module.css";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);

  const navigate = useNavigate();

  function navItemSelected(event) {
    event.preventDefault();
    switch (event.target.id) {
      case "faq":
        navigate("/faq");
        break;
      case "login":
        navigate("/login");

        break;
      case "signup":
        navigate("/signup");

        break;
      case "logo":
        navigate("/");

        break;
      default:
    }
  }

  return (
    <header className={styles.navbar}>
      <div
        className={styles.logo_container}
        onClick={navItemSelected}
        id="logo"
      >
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
            <a href="/" onClick={navItemSelected} id="faq">
              Learn more
            </a>
          </li>
          <li>
            <a href="/" onClick={navItemSelected} id="login">
              Log in
            </a>
          </li>
          <li>
            <a href="/" onClick={navItemSelected} id="signup">
              Sign up
            </a>
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
