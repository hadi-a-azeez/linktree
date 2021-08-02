import React from "react";
import styles from "./mockup.module.scss";

type data = {
  id: number;
  text: string;
  url: string;
}[];

interface appProps {
  data: data;
}

const MockUp = ({ data }: appProps) => {
  return (
    <div className={styles.phone}>
      <div className={styles.phone_profile}></div>
      {data.map((i) => (
        <div className={styles.card}>{i.text}</div>
      ))}
    </div>
  );
};

export default MockUp;
