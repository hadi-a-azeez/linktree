import React, { useState, useEffect } from "react";
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
  url: string;
}[];

const Admin: React.FC = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      text: "Google",
      url: "google.com",
    },
    {
      id: 2,
      text: "Instagram",
      url: "instagram.com/hello-world",
    },
    {
      id: 3,
      text: "Youtube",
      url: "youtube.com/hello-world",
    },
    {
      id: 4,
      text: "Linkedin",
      url: "linkedin.com/hello-world",
    },
  ]);

  // useEffect(() => {
  //   console.log("rendered");
  // }, [items]);

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

        //remove item by "hoverIndex" and put "dragItem" instead
        const prevItem: array = coppiedStateArray.splice(
          hoverIndex,
          1,
          dragItem
        );

        //remove item by "dragIndex" and put "prevItem" instead
        coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

        return coppiedStateArray;
      });
    }
  };

  const handleTitleChange = (value: string, id: number) => {
    setItems((prevState: array) => {
      const prevStateCopy = [...prevState];
      prevStateCopy.map((i) => {
        if (i.id === id) {
          i.text = value;
        }
      });
      return prevStateCopy;
    });
  };
  const handleUrlChange = (value: string, id: number) => {
    setItems((prevState: array) => {
      const prevStateCopy = [...prevState];
      prevStateCopy.map((i) => {
        if (i.id === id) {
          i.url = value;
        }
      });
      return prevStateCopy;
    });
  };

  const handleAddLink = () => {
    setItems((prevState) => {
      const prevStateCopy = [...prevState];
      prevStateCopy.unshift({
        id: prevState[prevState.length - 1].id + 1,
        text: "",
        url: "",
      });
      return prevStateCopy;
    });
    console.log(items);
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid_left}>
        <NavBar />
        <button className={styles.btn_main} onClick={() => handleAddLink()}>
          Add New Link
        </button>
        <div className={styles.items_container} ref={drop}>
          {items.map((card, i) => (
            <LinkItem
              key={i}
              index={i}
              id={card.id}
              data={card}
              moveCardHandler={moveCardHandler}
              handleTitleChange={handleTitleChange}
              handleUrlChange={handleUrlChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
