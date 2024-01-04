import TodoItems from "./TodoItems";
import style from "./TodoItems.module.css";

const ItemsContainer = ({ allItems, onDelete }) => {
  return (
    // items-container
    <div className={`items-container`}>
      {allItems.map((eachItem, i) => (
        <TodoItems
          key={i}
          itemName={eachItem.TodoName}
          itemDate={eachItem.TodoDate}
          onDelete={onDelete}
        ></TodoItems>
      ))}
    </div>
  );
};
export default ItemsContainer;
