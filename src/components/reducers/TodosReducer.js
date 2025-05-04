import { v4 as uuidv4 } from "uuid";

const reducer = (currentState, action) => {
  switch (action.type) {
    case "addTodo": {
      if (action.title === "") return;
      const newTodo = {
        id: uuidv4(),
        title: action.title,
        details: "",
        isComplete: false,
      };
      const updatedTodos = [...currentState, newTodo];
      return updatedTodos;
    }

    case "makeTodoComplete": {
      const updatedTodos = currentState.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            isComplete: !item.isComplete,
          };
        }
        return item;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }

    case "deleteTodo": {
      const updatedTodos = currentState.filter((t) => t.id !== action.id);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }

    case "updateTodo": {
      const updatedTodos = currentState.map((t) => {
        if (t.id === action.id) {
          return {
            ...t,
            title: action.editInputs.title,
            details: action.editInputs.details,
          };
        }
        return t;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }

    case "getFromLocalStorage": {
      const storageTodos = JSON.parse(localStorage.getItem("todos"));
      if (storageTodos) {
        return storageTodos;
      } else {
        return currentState;
      }
    }
    default:
      throw Error("This type isnt exist", action.type);
  }
};

export default reducer;
