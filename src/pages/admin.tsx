import React, { useState } from "react";
import LinkItem from "../components/LinkItem";
import NavBar from "../components/NavBar";
import styles from "./admin.module.scss";
import { useDrop } from "react-dnd";

export interface Item {
  id: number;
  text: string;
}

export interface itemsState {
  items: Item[];
}

type array = {
  id: number;
  text: string;
}[];

const Admin: React.FC = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      text: "1",
    },
    {
      id: 2,
      text: "2",
    },
    {
      id: 3,
      text: "3",
    },
    {
      id: 4,
      text: "4",
    },
  ]);

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "ITEM",
    drop: () => ({ name: "anything" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const moveCardHandler = (dragIndex: number, hoverIndex: number) => {
    const dragItem = items[dragIndex];

    if (dragItem) {
      setItems((prevState: array) => {
        const coppiedStateArray: array = [...prevState];

        const prevItem: array = coppiedStateArray.splice(
          hoverIndex,
          1,
          dragItem
        );

        coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

        return coppiedStateArray;
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid_left}>
        <NavBar />
        <button className={styles.btn_main}>Add New Link</button>
        <div className={styles.items_container} ref={drop}>
          {items.map((card, i) => (
            <LinkItem
              key={card.id}
              index={i}
              text={card.text}
              moveCardHandler={moveCardHandler}
              setItems={setItems}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
