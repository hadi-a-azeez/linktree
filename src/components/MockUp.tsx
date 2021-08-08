import React from "react";
import styles from "./mockup.module.scss";

type data = {
  id: number;
  title: string;
  url: string;
  position: number;
}[];

interface appProps {
  data: data;
}

const MockUp = ({ data }: appProps) => {
  return (
    <div className={styles.phone}>
      <div className={styles.phone_profile}></div>
      {data.map(
        (i, index) =>
          i.title.length > 0 &&
          i.url.length > 0 && (
            <div key={index} className={styles.card}>
              {i.title}
            </div>
          )
      )}
    </div>
  );
};

export default MockUp;
