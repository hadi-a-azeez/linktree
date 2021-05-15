import React from "react";
import style from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.links_wraper}>
        <h1 className={style.name}>linktree</h1>
        <h1 className={style.link}>Blog</h1>
        <h1 className={style.link}>Pricing</h1>
        <h1 className={style.link}>Help</h1>
      </div>
      <div className={style.buttons_wraper}>
        <h1 className={style.link}>Log in</h1>
        <button className={style.btn}>SIGN UP FREE</button>
      </div>
    </div>
  );
};

export default Header;
