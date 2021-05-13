import React from "react";
import style from "./header.module.css";

const Header: React.FC = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.links_wraper}>
          <h1 className={style.link}>linktree</h1>
          <h1 className={style.link}>Blog</h1>
          <h1 className={style.link}>Pricing</h1>
          <h1 className={style.link}>Help</h1>
        </div>
      </div>
      <h1 style={{ marginLeft: "100px" }}>Hello world</h1>
    </>
  );
};

export default Header;
