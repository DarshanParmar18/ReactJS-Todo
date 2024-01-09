import { useContext, useRef } from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { TodoItemsContext } from "../store/TodoItems-store";

function AppAdd() {
  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handledAddTodobtn = () => {
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    addNewItem(todoName, todoDate);
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    // setTodoName("");
    // setTodoDate("");
  };

  return (
    <div className="container ">
      <div className="row row-ln">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={todoDateElement} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success btn-ln"
            onClick={() => handledAddTodobtn()}
          >
            <MdFormatListBulletedAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppAdd;
