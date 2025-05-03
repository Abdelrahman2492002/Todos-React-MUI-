import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useContext, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../context/TodosContext";
import TodoHeader from "./todo-header/TodoHeader";
import RenderTodos from "./todo-body/RenderTodos";
import TodoFooter from "./todo-footer/TodoFooter";
import ToggleTodos from "./todo-body/ToggleTodos";

const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [titleInput, setTitleInput] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const handleSelectedTypeChange = (e) => setSelectedType(e.target.value);
  const handleTitleInputChange = (e) => setTitleInput(e.target.value);

  const handleAddTodo = () => {
    if (titleInput === "") return;
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isComplete: false,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTitleInput("");
  };

  const showCompletedTodos = useMemo(() => {
    return todos.filter((t) => {
      console.log("Completed Filter Rendered");
      return t.isComplete;
    });
  }, [todos]);
  const showUnCompletedTodos = useMemo(() => {
    return todos.filter((t) => !t.isComplete);
  }, [todos]);

  let todosBeRendered = todos;

  switch (selectedType) {
    case "all":
      todosBeRendered = todos;
      break;
    case "completed":
      todosBeRendered = showCompletedTodos;
      break;
    case "unCompleted":
      todosBeRendered = showUnCompletedTodos;
      break;
  }

  return (
    <Card
      sx={{
        minWidth: 275,
        textAlign: "center",
      }}
      style={{ maxHeight: "80vh", overflowY: "auto" }}
    >
      <CardContent>
        {/*Todo Header */}
        <TodoHeader />

        {/*Todo Body */}
        <ToggleTodos value={selectedType} onchange={handleSelectedTypeChange} />
        <RenderTodos todosBeRendered={todosBeRendered} />

        {/* Todo footer*/}
        <TodoFooter
          titleInput={titleInput}
          handleTitleInputChange={handleTitleInputChange}
          handleAddTodo={handleAddTodo}
        />
      </CardContent>
    </Card>
  );
};

export default TodoList;
