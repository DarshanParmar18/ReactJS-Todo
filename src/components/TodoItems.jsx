import { useContext } from "react";
import style from "./TodoItems.module.css";
import { MdDeleteSweep } from "react-icons/md";
import { TodoItemsContext } from "../store/TodoItems-store";

function TodoItems({ itemName, itemDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <>
      <div className={`container`}>
        <div className={`row ${style.rowLn}`}>
          <div className="col-6">{itemName}</div>
          <div className="col-4">{itemDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger btn-ln"
              onClick={() => {
                deleteItem(itemName);
              }}
            >
              <MdDeleteSweep />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoItems;
