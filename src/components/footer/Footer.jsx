import React from "react";
import styles from "./Footer.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  function navSignUp() {
    navigate("/login");
  }
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <img
          src="https://tinyurl.com/2r4p8xdr"
          alt="logo"
          className={styles.img}
        />

        <div className={styles.socials}>
          <a href="https://www.linkedin.com/in/bdkc/" target="_blank">
            <BsLinkedin size={30} className={styles.icon} />
          </a>
          <a href="https://github.com/ButchanCrawford" target="_blank">
            <BsGithub size={30} className={styles.icon} />
          </a>
          <a href="mailto:butchancrawf@gmail.com" target="_blank">
            <IoIosMail size={34} className={styles.icon} />
          </a>
        </div>
        <button onClick={navSignUp}>Sign up</button>
      </div>
    </div>
  );
}

export default Footer;
