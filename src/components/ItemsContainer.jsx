import { useContext } from "react";
import TodoItems from "./TodoItems";
import style from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/TodoItems-store";

const ItemsContainer = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    // items-container
    <div className={`items-container`}>
      {todoItems.map((eachItem, i) => (
        <TodoItems
          key={i}
          itemName={eachItem.TodoName}
          itemDate={eachItem.TodoDate}
        ></TodoItems>
      ))}
    </div>
  );
};
export default ItemsContainer;
