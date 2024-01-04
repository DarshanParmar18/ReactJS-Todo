import { useState } from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";

function AppAdd({ clickAdd }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const todoNameOnChange = (e) => {
    setTodoName(e.target.value);
  };
  const todoDateOnChange = (e) => {
    setTodoDate(e.target.value);
  };

  const handledAddTodobtn = () => {
    if (todoName != "" && todoDate != "") {
      clickAdd(todoName, todoDate);
      setTodoName("");
      setTodoDate("");
    }
  };

  return (
    <div className="container ">
      <div className="row row-ln">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            value={todoName}
            onChange={todoNameOnChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={todoDateOnChange} />
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
