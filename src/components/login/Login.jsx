import React from "react";
import styles from "./Login.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  return (
    <div className={styles.login_container}>
      <div className={styles.login}>
        <div className={styles.left}>
          <img src="https://tinyurl.com/4v4f7y6y" alt="light bubbles" />
        </div>

        <div className={styles.right}>
          <span>
            {" "}
            <h3>Welcome Back :)</h3>
            <p>Sign in</p>
            <div>
              <input type="text" placeholder="Username" />
              <br />
              <input type="password" placeholder="Password" />
            </div>
            <div>
              <p className={styles.forgot}>Forgot password ?</p>
            </div>
            <div className={styles.btn_container}>
              <button>Sign in</button>
              <button>Create account</button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
