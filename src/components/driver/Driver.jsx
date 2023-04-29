import React from "react";
import styles from "./Driver.module.css";

//

function Driver() {
  return (
    <div className={styles.driver_container}>
      <div className={styles.driver}>
        <div className={styles.left}>
          <img
            className={styles.clip}
            src="https://tinyurl.com/yc3tk5vk"
            alt="cliped"
          />
        </div>
        <div>
          <h2>
            Find something to add to<span> your garage.</span>
          </h2>
          <p>
            Test out cars from the comfort of your own garage before committing.
          </p>
          <button>See Vehicles</button>
        </div>
      </div>
    </div>
  );
}

export default Driver;
