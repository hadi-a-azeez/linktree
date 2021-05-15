import React from "react";
import style from "./home.module.scss";
import Header from "../components/header";

const Home: React.FC = () => {
  return (
    <div className={style.container}>
      <Header />
      <h1 className={style.heading_big}>The Only Link You’ll Ever Need</h1>
      <h1 className={style.heading_normal}>
        Connect audiences to all of your content with just one link
      </h1>
      <button className={style.btn}>GET STARTED FOR FREE</button>
      <div className={style.link_wraper}>
        <h1 className={style.text}>Already on Linktree?</h1>
        <h1 className={style.link}>Log in</h1>
      </div>
      <div className={style.phone}>
        <div className={style.phone_background}></div>
      </div>
    </div>
  );
};

export default Home;
