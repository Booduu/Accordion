import React from "react";
import List from "./List";
import styles from "./Section.module.scss";

const Section3 = () => {
  return (
    <section className={styles["container-section"]}>
      <div className={styles["container-section-main"]}>
        <div className={styles["title-container"]}>
          <div className={styles["title-container-top"]}>
            <h2>Mes Services</h2>
            <div>
              <p>...selon vos besoins</p>
            </div>
          </div>
        </div>
        <div className={styles["services-container"]}>
          <div className={styles["services-container-center"]}>
            <div className={styles["box-container"]}>
              <List />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
