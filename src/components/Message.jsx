import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItems-store";

const Message = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return todoItems.length === 0 && <h2>Empty Todo list</h2>;
};
export default Message;
