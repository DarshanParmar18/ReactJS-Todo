import style from "./TodoItems.module.css";

function TodoItems({ itemName, itemDate, onDelete }) {
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
                onDelete(itemName);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoItems;
