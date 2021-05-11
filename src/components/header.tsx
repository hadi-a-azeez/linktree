import React from "react";
import style from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={style.container}>
      <h1 style={{ marginLeft: "2rem" }} className={style.link}>
        linktree
      </h1>
      <h1 className={style.link}>Blog</h1>
      <h1 className={style.link}>Pricing</h1>
      <h1 className={style.link}>Help</h1>
    </div>
  );
};

export default Header;
