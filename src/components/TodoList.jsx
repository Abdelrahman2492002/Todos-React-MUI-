import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Todo from "./Todo";
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../context/TodosContext";

const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [titleInput, setTitleInput] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const AddTodo = () => {
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

  const showCompletedTodos = () => todos.filter((t) => t.isComplete);

  const showUnCompletedTodos = () => todos.filter((t) => !t.isComplete);

  let todosBeRendered = todos;

  switch (selectedType) {
    case "all":
      todosBeRendered = todos;
      break;
    case "completed":
      todosBeRendered = showCompletedTodos();
      break;
    case "unCompleted":
      todosBeRendered = showUnCompletedTodos();
      break;
  }

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos"));
    setTodos(storageTodos ? storageTodos : todos);
  }, [setTodos]);

  return (
    <Card
      sx={{
        minWidth: 275,
        textAlign: "center",
      }}
      style={{ maxHeight: "80vh", overflowY: "auto" }}
    >
      <CardContent>
        <Typography
          variant="h1"
          sx={{ fontFamily: "Alex", fontSize: "40px", fontWeight: 600 }}
        >
          <span style={{ color: "#C24242" }}>قائمة</span> المهام
        </Typography>
        <Divider />
        <ToggleButtonGroup
          exclusive
          aria-label="text alignment"
          sx={{ marginTop: 3, direction: "ltr" }}
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          color="primary"
        >
          <ToggleButton value="unCompleted">غير مكتمل</ToggleButton>
          <ToggleButton value="completed">مكتمل</ToggleButton>
          <ToggleButton value="all">الكل</ToggleButton>
        </ToggleButtonGroup>

        {/* todo */}
        {todosBeRendered.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
        {/* ======todo====== */}

        {/* Input & Add Button */}
        <Grid container spacing={2} sx={{ marginTop: "10px" }}>
          <Grid size={8}>
            <TextField
              id="outlined-basic"
              label="إضافة مهمة"
              variant="outlined"
              sx={{ width: "100%" }}
              color="primary"
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
            />
          </Grid>
          <Grid size={4}>
            <Button
              variant="contained"
              sx={{ width: "100%", height: "100%", backgroundColor: "#C24242" }}
              onClick={AddTodo}
              disabled={titleInput.length == 0}
            >
              إضافة
            </Button>
          </Grid>
        </Grid>
        {/* =======Input & Add Button========== */}
      </CardContent>
    </Card>
  );
};

export default TodoList;
