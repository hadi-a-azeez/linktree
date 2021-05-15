import React, { useState } from "react";
import style from "./home.module.scss";
import Header from "../components/header";

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
      <div className={style.phone}>
        <div className={style.phone_profile}>
          {/*   <img
            src="https://cdn-images-1.medium.com/max/1200/1*NpUUls7kjn9JhO4ChjGV7w.png"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          /> */}
        </div>
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
