import React, { useState, useEffect } from "react";
import LinkItem from "../components/LinkItem";
import NavBar from "../components/NavBar";
import styles from "./admin.module.scss";
import MockUp from "../components/MockUp";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useQuery, useMutation } from "@apollo/client";
import { GET_LINKS } from "../GraphQl/Queries";
import { ADD_LINK } from "../GraphQl/Mutation";
import { produce } from "immer";

export interface Item {
  id: number;
  text: string;
}

export interface itemsState {
  items: Item[];
}

type array = {
  id: number;
  title: string;
  url: string;
  position: number;
}[];

const Admin: React.FC = () => {
  const [items, setItems] = useState<array>([]);
  const [newId, setNewId] = useState(4);
  const [allData, setAllData] = useState({});
  const { error, loading, data: linksData, client } = useQuery(GET_LINKS);
  const [addLink, {}] = useMutation(ADD_LINK);

  useEffect(() => {
    if (!loading) {
      setItems(linksData.getLinks);
      setAllData(linksData);
    }
  }, [linksData]);

  const handleTitleChange = (value: string, id: number) => {
    const newData = produce(allData, (draftState: any) => {
      draftState.getLinks.map((i: any) => {
        if (i.id === id) {
          i.title = value;
        }
      });
    });
    client.writeQuery({
      query: GET_LINKS,
      data: {
        ...newData,
      },
    });
  };
  const handleUrlChange = (value: string, id: number) => {
    const newData = produce(allData, (draftState: any) => {
      draftState.getLinks.map((i: any) => {
        if (i.id === id) {
          i.url = value;
        }
      });
    });
    client.writeQuery({
      query: GET_LINKS,
      data: {
        ...newData,
      },
    });
  };

  const handleAddLink = async () => {
    const newData = produce(allData, (draftState: any) => {
      draftState.getLinks.unshift({
        id: newId + 1,
        title: "",
        url: "",
        position: 3,
      });
    });

    client.writeQuery({
      query: GET_LINKS,
      data: {
        ...newData,
      },
    });
    // const result = await addLink({
    //   variables: {
    //     linkObj: {
    //       account_id: 2,
    //       position: 8,
    //       thumbnailUrl: "",
    //       title: "",
    //       type: "",
    //       url: "",
    //     },
    //   },
    // });
    // console.log(result);
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
          {!loading && (
            <Droppable droppableId="droppable">
              {(provided) => (
                <div
                  className={styles.items_container}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {items.map((card: any, i: number) => (
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
          )}
        </DragDropContext>
        <div style={{ marginTop: "6rem" }} />
      </section>
      <section className={styles.grid_right}>
        {!loading && <MockUp data={items} />}
      </section>
    </div>
  );
};

export default Admin;
