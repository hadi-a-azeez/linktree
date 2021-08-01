import React from "react";
import LinkItem from "../components/LinkItem";
import NavBar from "../components/NavBar";
import styles from "./admin.module.scss";

const Admin: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid_left}>
        <NavBar />
        <button className={styles.btn_main}>Add New Link</button>
        <div className={styles.items_container}>
          <LinkItem />
        </div>
      </div>
    </div>
  );
};

export default Admin;
