import React from "react";
import styles from "./linkItem.module.scss";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { useRef } from "react";
import { XYCoord } from "dnd-core";

type AppProps = {
  text: string;
  index: number;
  moveCardHandler: any;
  setItems: any;
};

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const LinkItem = ({ text, index, moveCardHandler, setItems }: AppProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: "ITEM",
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveCardHandler(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: "ITEM",
      item: { name: "anything" },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  );

  const opacity = isDragging ? 0 : 1;

  dragRef(drop(ref));
  return (
    <div className={styles.card} ref={ref} style={{ opacity }}>
      <h1>{text}</h1>
    </div>
  );
};

export default LinkItem;
