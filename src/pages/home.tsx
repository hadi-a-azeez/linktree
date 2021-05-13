import React from "react";
import style from "./home.module.scss";
import Header from "../components/header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <h1 style={{ marginLeft: "100px" }}>Shafi</h1>
    </>
  );
};

export default Home;
