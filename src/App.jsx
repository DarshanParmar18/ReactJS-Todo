import { useState } from "react";
import AppName from "./components/AppName";
import AppAdd from "./components/AppAdd";
import "./App.css";
import ItemsContainer from "./components/ItemsContainer";
import Message from "./components/message";
import { TodoItemsContext } from "./store/TodoItems-store";

function App() {
  // const iniTodoItems = [
  //   {
  //     TodoName: "Buy Milk",
  //     TodoDate: "4/10/2023",
  //   },
  //   {
  //     TodoName: "Go to Gym",
  //     TodoDate: "4/10/2023",
  //   },
  //   {
  //     TodoName: "Go to college",
  //     TodoDate: "4/10/2023",
  //   },
  //   {
  //     TodoName: "Code for 4hrs",
  //     TodoDate: "4/10/2023",
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemTodoName, itemTodoDate) => {
    setTodoItems((currentVal) => [
      ...currentVal,
      { TodoName: itemTodoName, TodoDate: itemTodoDate },
    ]);
    console.log("Item added");
  };

  const deleteItem = (itemName) => {
    const newTodoItems = todoItems.filter(
      (items) => items.TodoName != itemName
    );
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AppAdd />
        <Message />
        <ItemsContainer />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
