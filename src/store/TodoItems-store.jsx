import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemReducer = (currentVal, action) => {
  let newTodoItems = currentVal;
  if (action.type === "ADD_NEW_ITEM") {
    newTodoItems = [
      ...currentVal,
      {
        TodoName: action.payload.itemTodoName,
        TodoDate: action.payload.itemTodoDate,
      },
    ];
    console.log("Item added");
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentVal.filter(
      (items) => items.TodoName != action.payload.itemName
    );
    // setTodoItems(newTodoItems);
  }
  return newTodoItems;
};

const TodoItemsContextTextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const addNewItem = (itemTodoName, itemTodoDate) => {
    const newAction = {
      type: "ADD_NEW_ITEM",
      payload: {
        itemTodoName,
        itemTodoDate,
      },
    };
    dispatchTodoItems(newAction);
    // setTodoItems((currentVal) => [
    //   ...currentVal,
    //   { TodoName: itemTodoName, TodoDate: itemTodoDate },
    // ]);
    // console.log("Item added");
  };

  const deleteItem = (itemName) => {
    const deleteAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName,
      },
    };
    dispatchTodoItems(deleteAction);
    // const newTodoItems = todoItems.filter(
    //   (items) => items.TodoName != itemName
    // );
    // setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextTextProvider;
