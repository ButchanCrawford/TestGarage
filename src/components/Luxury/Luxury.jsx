import React from "react";
import styles from "./Luxury.module.css";

function Luxury() {
  return (
    <div className={styles.luxury}>
      <div className={styles.heading}>
        <h2>Top Brands</h2>
        <div className={styles.text_bg}>
          <p>
            <span>Select from top brands</span>
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.card}>
          <img src="https://tinyurl.com/nhj7s7un" alt="Corvette" />
          <div className={styles.content}>
            <h3>Corvette</h3>
          </div>
        </div>

        <div className={styles.card}>
          <img src="https://tinyurl.com/26d4bepa" alt="Maserati" />
          <div className={styles.content}>
            <h3>Maserati</h3>
          </div>
        </div>

        <div className={styles.card}>
          <img src="https://tinyurl.com/mbszfwvy" alt="Lamborghini" />
          <div className={styles.content}>
            <h3>Lamborghini</h3>
          </div>
        </div>

        <div className={styles.card}>
          <img src="https://tinyurl.com/2k83mdsh" alt="Rolls Royce" />
          <div className={styles.content}>
            <h3>Rolls Royce</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Luxury;
