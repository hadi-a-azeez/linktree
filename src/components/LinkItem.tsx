//import React from "react";
import styles from "./linkItem.module.scss";
import { Draggable } from "react-beautiful-dnd";

interface data {
  id: number;
  text: string;
  url: string;
}
type AppProps = {
  data: data;
  index: number;
  id: number;
  handleTitleChange: (value: string, id: number) => void;
  handleUrlChange: (value: string, id: number) => void;
};

const LinkItem = ({
  data,
  index,
  id,
  handleTitleChange,
  handleUrlChange,
}: AppProps) => {
  return (
    <Draggable key={id} draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
          className={styles.card}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={provided.draggableProps.style}
        >
          <div className={styles.handler_container}>
            <svg
              viewBox="0 0 16 16"
              color="gray"
              enableBackground="new 0 0 24 24"
              className={styles.handler_icon}
            >
              <path d="M6 2C6 0.9 6.9 0 8 0C9.1 0 10 0.9 10 2C10 3.1 9.1 4 8 4C6.9 4 6 3.1 6 2M6 8C6 6.9 6.9 6 8 6C9.1 6 10 6.9 10 8C10 9.1 9.1 10 8 10C6.9 10 6 9.1 6 8M6 14C6 12.9 6.9 12 8 12C9.1 12 10 12.9 10 14C10 15.1 9.1 16 8 16C6.9 16 6 15.1 6 14"></path>
            </svg>
          </div>
          <div className={styles.content_container}>
            <div className={styles.content_wraper}>
              <div className={styles.title_wraper}>
                <input
                  type="text"
                  placeholder="Title"
                  value={data.text}
                  onChange={(e) => handleTitleChange(e.target.value, id)}
                  className={styles.title_field}
                />
                <button className={styles.edit_btn}>
                  <svg
                    color="palette.slate4"
                    fontStyle="italic"
                    viewBox="0 0 12 12"
                    enableBackground="new 0 0 24 24"
                    className={styles.edit_icon}
                  >
                    <path d="M2.5,6.67188,8.46477.70711a1,1,0,0,1,1.41421,0L11.29289,2.121a1,1,0,0,1,0,1.41421L5.32813,9.5ZM4.32813,10.5,0,12,1.5,7.67188Z"></path>
                  </svg>
                </button>
              </div>
              <div className={styles.url_wraper}>
                <input
                  type="text"
                  placeholder="Url"
                  value={data.url}
                  onChange={(e) => handleUrlChange(e.target.value, id)}
                  className={styles.url_field}
                />
              </div>
              <div className={styles.icons_wraper}>
                <svg
                  viewBox="0 0 16 16"
                  display="block"
                  enableBackground="new 0 0 24 24"
                  className={styles.icon}
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.613 1.434l1.33 4.007a.625.625 0 00.6.422h4.318a.623.623 0 01.378 1.13l-3.5 2.487a.6.6 0 00-.227.68l1.334 4.017a.639.639 0 01-.991.7L8.37 12.4a.642.642 0 00-.739 0l-3.485 2.477a.638.638 0 01-.99-.7l1.335-4.02a.6.6 0 00-.227-.68l-3.5-2.485a.622.622 0 01.378-1.129h4.32a.624.624 0 00.6-.422l1.33-4.007a.649.649 0 011.221 0z"
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 16 16"
                  display="block"
                  enableBackground="new 0 0 24 24"
                  className={styles.icon}
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 2.5v-2h4v2M1 2.5h14M9.533 13.5l.25-9M6.217 4.5l.25 9M2.661 4.5l.889 11h8.9l.888-11"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default LinkItem;
