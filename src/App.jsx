import { useState } from "react";
import AppName from "./components/AppName";
import AppAdd from "./components/AppAdd";
import "./App.css";
import ItemsContainer from "./components/ItemsContainer";
import Message from "./components/message";

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

  const handleAddTodo = (itemTodoName, itemTodoDate) => {
    const newTodoItems = [
      ...todoItems,
      { TodoName: itemTodoName, TodoDate: itemTodoDate },
    ];
    setTodoItems(newTodoItems);
    console.log("Item added");
  };

  const handleDeleteTodo = (itemName) => {
    const newTodoItems = todoItems.filter(
      (items) => items.TodoName != itemName
    );
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AppAdd clickAdd={handleAddTodo} />
      {todoItems == 0 && <Message />}
      <ItemsContainer allItems={todoItems} onDelete={handleDeleteTodo} />
    </center>
  );
}

export default App;
