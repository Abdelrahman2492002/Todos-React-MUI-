import { useContext } from "react";
import { TodoContext } from "../../../context/TodosContext";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

//Components imports
import CompleteTaskButton from "./todo-actions/CompleteTaskButton";
import ActionButton from "./todo-actions/ActionButton";
import TodoInfo from "./todo-info/TodoInfo";

//icons import
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useToast } from "../../../context/ToastContext";

const Todo = ({ todo, openDelete, openUpdate }) => {
  const { todos, setTodos } = useContext(TodoContext);
  const { showHideToast } = useToast();

  const makeTodoCompleted = () => {
    const updatedTodos = todos.map((item) => {
      if (item.id === todo.id) {
        const newComplete = !item.isComplete;
        showHideToast(
          newComplete ? " تم إكمال المهمة بنجاح  😍" : "حاول إكمال مهمتك 😔",
          newComplete ? "success" : "info"
        );
        return {
          ...item,
          isComplete: newComplete,
        };
      }
      return item;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div>
      <Box
        className="todo-box"
        sx={{
          p: { xs: 1, md: 2 },
          backgroundColor: "#E5C955",
          marginTop: "10px",
          borderRadius: "4px",
          maxWidth: "100%",
        }}
      >
        <Grid container spacing={{ xs: 1, md: 2 }}>
          <Grid size={8}>
            <TodoInfo todo={todo} />
          </Grid>
          <Grid
            size={4}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: { xs: "5px", md: "8px" },
              alignItems: "center",
            }}
          >
            <CompleteTaskButton
              todo={todo}
              onClickHandler={makeTodoCompleted}
              mainColor="#328E6E"
            >
              <CheckIcon sx={{ fontSize: { xs: "18px", md: "20px" } }} />
            </CompleteTaskButton>

            <ActionButton
              todo={todo}
              onClickHandler={makeTodoCompleted}
              mainColor="#090030"
              onclick={() => openUpdate(todo)}
            >
              <EditIcon sx={{ fontSize: { xs: "18px", md: "20px" } }} />
            </ActionButton>

            {/* Delete Button */}

            <ActionButton
              todo={todo}
              mainColor="#F30A49"
              onclick={() => openDelete(todo)}
            >
              <DeleteIcon sx={{ fontSize: { xs: "18px", md: "20px" } }} />
            </ActionButton>
            {/*========= Delete Button ========== */}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Todo;
