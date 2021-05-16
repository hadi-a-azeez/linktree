import React, { useState } from "react";
import style from "./home.module.scss";
import Header from "../components/header";
import Twitter from "../assets/twitter.png";
import Android from "../assets/android.png";
import Dori from "../assets/dori.png";
import Event from "../assets/eventbrite.png";
import Instagram from "../assets/instagram.png";

const Home: React.FC = () => {
  const [username, setUsername] = useState("linktr.ee/");

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
      <img
        src={Twitter}
        alt="k"
        className={`${style.posLeft} ${style.icon}`}
      ></img>
      {/* <img
        src={Android}
        alt="k"
        className={`${style.posLeft} ${style.icon}`}
      ></img>
      <img
        src={Dori}
        alt="k"
        className={`${style.posLeft} ${style.icon}`}
      ></img>
      <img
        src={Event}
        alt="k"
        className={`${style.posLeft} ${style.icon}`}
      ></img> */}
      <img
        src={Instagram}
        alt="k"
        className={`${style.posLeft} ${style.icon}`}
      ></img>
      <div className={style.phone}>
        <div className={style.phone_profile}></div>
        <div className={style.card} />
        <div className={style.card} />
        <div className={style.card} />
        <div className={style.card} />
        <div className={style.card} />
      </div>
      <div className={style.line}></div>
      <input
        type="text"
        className={style.input_name}
        placeholder="linktr.ee/"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
};

export default Home;
