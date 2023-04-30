import React from "react";
import styles from "./Signup.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Signup() {
  return (
    <div className={styles.login_container}>
      <div className={styles.login}>
        <div className={styles.left}>
          <img src="https://tinyurl.com/4v4f7y6y" alt="light bubbles" />
        </div>

        <div className={styles.right}>
          <span>
            {" "}
            <h3>Welcome</h3>
            <p>Sign Up</p>
            <div>
              <input type="text" placeholder="Email" />
              <br />
              <input type="text" placeholder="First name" />
              <br />
              <input type="text" placeholder="Last name" />
              <br />
              <input type="password" placeholder="Password" />
            </div>
            <div>
              <p className={styles.forgot}>Already have an account? Sign-In</p>
            </div>
            <div className={styles.btn_container}>
              <button>Create account</button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
