import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useMemo, useState } from "react";
import TodoHeader from "./todo-header/TodoHeader";
import TodoFooter from "./todo-footer/TodoFooter";
import ToggleTodos from "./todo-body/ToggleTodos";
import DeleteDialog from "./todo-body/todo/todo-actions/DeleteDialog";
import Todo from "./todo-body/todo/Todo";
import UpdateDialog from "./todo-body/todo/todo-actions/UpdateDialog";
import { useToast } from "../context/ToastContext";
import { useDispatchTodos, useStateTodos } from "../context/TodosContext";

const TodoList = () => {
  const todos = useStateTodos();
  const dispatch = useDispatchTodos();
  const [titleInput, setTitleInput] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [todoData, setTodoData] = useState(null);
  const { showHideToast } = useToast();

  const openDeleteDialoge = (todo) => {
    setTodoData(todo);
    setShowDeleteDialog(true);
  };
  const closeDeleteDialoge = () => {
    setShowDeleteDialog(false);
  };

  const openUpdateDialoge = (todo) => {
    setTodoData(todo);
    setShowUpdateDialog(true);
  };
  const closeUpdateDialoge = () => {
    setShowUpdateDialog(false);
  };

  const handleSelectedTypeChange = (e) => setSelectedType(e.target.value);
  const handleTitleInputChange = (e) => setTitleInput(e.target.value);

  const handleAddTodo = () => {
    dispatch({ type: "addTodo", title: titleInput });
    setTitleInput("");
    showHideToast("تمت أضافة المهمة بنجاح");
  };

  const showCompletedTodos = useMemo(() => {
    return todos.filter((t) => {
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
    <>
      <DeleteDialog
        id={todoData?.id}
        showDelete={showDeleteDialog}
        closeDeleteDialoge={closeDeleteDialoge}
      />
      <UpdateDialog
        todo={todoData}
        showUpdate={showUpdateDialog}
        closeUpdateDialoge={closeUpdateDialoge}
      />
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
          <ToggleTodos
            value={selectedType}
            onchange={handleSelectedTypeChange}
          />
          {todosBeRendered.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              openDelete={openDeleteDialoge}
              openUpdate={openUpdateDialoge}
            />
          ))}

          {/* Todo footer*/}
          <TodoFooter
            titleInput={titleInput}
            handleTitleInputChange={handleTitleInputChange}
            handleAddTodo={handleAddTodo}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default TodoList;
