import React, { useState } from "react";
import LinkItem from "../components/LinkItem";
import NavBar from "../components/NavBar";
import styles from "./admin.module.scss";
import MockUp from "../components/MockUp";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

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
  const [newId, setNewId] = useState(4);

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
        id: newId + 1,
        text: "",
        url: "",
      });
      return prevStateCopy;
    });
    setNewId(newId + 1);
  };

  const reorder = (list: array, startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: any) => {
    //dropped outside the list
    if (!result.destination) {
      return;
    }
    console.log(result);

    const newList: array = reorder(
      items,
      result.source.index,
      result.destination.index
    );
    setItems(newList);
  };

  return (
    <div className={styles.container}>
      <section className={styles.grid_left}>
        <NavBar />
        <button className={styles.btn_main} onClick={() => handleAddLink()}>
          Add New Link
        </button>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div
                className={styles.items_container}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {items.map((card, i) => (
                  <LinkItem
                    key={i}
                    index={i}
                    id={card.id}
                    data={card}
                    handleTitleChange={handleTitleChange}
                    handleUrlChange={handleUrlChange}
                  />
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <div style={{ marginTop: "6rem" }} />
      </section>
      <section className={styles.grid_right}>
        <MockUp data={items} />
      </section>
    </div>
  );
};

export default Admin;
