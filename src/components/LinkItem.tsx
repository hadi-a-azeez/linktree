import React from "react";
import styles from "./linkItem.module.scss";
import { useDrag } from "react-dnd";

type AppProps = {
  text: string;
};

const LinkItem = ({ text }: AppProps) => {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: "ITEM",
      item: { text },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 1 : 1,
      }),
    }),
    []
  );
  return (
    <div className={styles.card} ref={dragRef} style={{ opacity }}>
      <h1>{text}</h1>
    </div>
  );
};

export default LinkItem;
