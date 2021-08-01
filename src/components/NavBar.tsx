import React from "react";
import styles from "./NavBar.module.scss";

const NavBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.selected}>
        <h1 className={styles.link}>Links</h1>
      </div>
      <div className={styles.link_wraper}>
        <h1 className={styles.link}>Appearance</h1>
      </div>
      <div className={styles.link_wraper}>
        <h1 className={styles.link}>Settings</h1>
      </div>
    </div>
  );
};

export default NavBar;
