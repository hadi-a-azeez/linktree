import React, { useState, useEffect } from "react";
import LinkItem from "../components/LinkItem";
import NavBar from "../components/NavBar";
import styles from "./admin.module.scss";
import MockUp from "../components/MockUp";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useQuery, useMutation } from "@apollo/client";
import { GET_LINKS } from "../GraphQl/Queries";
import { ADD_LINK } from "../GraphQl/Mutation";
import { produce, produceWithPatches } from "immer";

type link = {
  id: number;
  title: string;
  url: string;
  position: number;
};

type data = {
  getLinks: link[];
};

const Admin: React.FC = () => {
  const [items, setItems] = useState<link[]>([]);
  const [newId, setNewId] = useState(4);
  const [allData, setAllData] = useState<data>({
    getLinks: [{ id: 0, title: "", url: "", position: 0 }],
  });
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
    const newData = produce(allData, (draftState: data) => {
      draftState.getLinks.map((i: link) => {
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
    const newData = produce(allData, (draftState: data) => {
      draftState.getLinks.map((i: link) => {
        i.position = i.position + 1;
      });
      draftState.getLinks.unshift({
        id: newId + 1,
        title: "",
        url: "",
        position: 0,
      });
    });

    client.writeQuery({
      query: GET_LINKS,
      data: {
        ...newData,
      },
    });
    console.log(newData);
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

  const reorder = (sourceIndex: number, destinationIndex: number) => {
    const newData = produce(allData, (draftState: data) => {
      //assigning new position to the dragging link
      draftState.getLinks[sourceIndex].position = destinationIndex;
      //changing the positions of other links
      draftState.getLinks.map((data: link, i: number) => {
        //dragging to upwards the list, changing position to top of the list
        if (sourceIndex > destinationIndex) {
          if (i < sourceIndex && i >= destinationIndex) {
            data.position = data.position + 1;
          }
        }
        //dragging to downwards the list, changing position to bottom of the list
        else {
          if (i <= destinationIndex && i > sourceIndex) {
            data.position = data.position - 1;
          }
        }
      });
      //rearranging the array
      const [removed] = draftState.getLinks.splice(sourceIndex, 1);
      draftState.getLinks.splice(destinationIndex, 0, removed);
    });
    setItems(newData.getLinks);
    client.writeQuery({
      query: GET_LINKS,
      data: {
        ...newData,
      },
    });
    console.log(newData);
  };

  const onDragEnd = (result: any) => {
    //dropped outside the list
    if (!result.destination) {
      return;
    }
    console.log(result);

    reorder(result.source.index, result.destination.index);
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
