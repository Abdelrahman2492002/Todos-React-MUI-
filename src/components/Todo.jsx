import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

//icons import
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
//=========
import { useContext, useState } from "react";
import { TodoContext } from "../context/TodosContext";
import ActionButton from "./ActionButton";
import CompleteTaskButton from "./CompleteTaskButton";

//Dialog
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

const Todo = ({ todo }) => {
  const { todos, setTodos } = useContext(TodoContext);
  const [editInputs, setEditInputs] = useState({
    title: todo.title,
    details: todo.details,
  });
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);

  const makeTodoCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isComplete: !todo.isComplete,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleDeleteConfirm = (id) => {
    const updatedTodos = todos.filter((t) => t.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  const openDeleteDialoge = () => {
    setShowDeleteDialog(true);
  };
  const closeDeleteDialoge = () => {
    setShowDeleteDialog(false);
  };

  const handleUpdateConfirm = (id) => {
    const updatedTodos = todos.map((t) => {
      if (t.id === id) {
        return {
          ...t,
          title: editInputs.title,
          details: editInputs.details,
        };
      }
      return t;
    });

    setTodos(updatedTodos);
    setShowUpdateDialog(false);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  const openUpdateDialoge = () => {
    setShowUpdateDialog(true);
  };
  const closeUpdateDialoge = () => {
    setShowUpdateDialog(false);
  };

  return (
    <div>
      <Dialog
        open={showUpdateDialog}
        onClose={closeUpdateDialoge}
        style={{ direction: "rtl" }}
      >
        <DialogTitle
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          <span style={{ color: "#328E6E", fontWeight: "bold" }}>
            تعديل مهمة{" "}
          </span>
          {todo.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="عنوان المهمة"
            fullWidth
            variant="standard"
            slotProps={{
              inputLabel: {
                style: {
                  direction: "rtl",
                  textAlign: "right",
                  right: 0,
                  left: "auto",
                },
              },
            }}
            value={editInputs.title}
            onChange={(e) =>
              setEditInputs({ ...editInputs, title: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="التفاصيل"
            fullWidth
            variant="standard"
            slotProps={{
              inputLabel: {
                style: {
                  direction: "rtl",
                  textAlign: "right",
                  right: 0,
                  left: "auto",
                },
              },
            }}
            value={editInputs.details}
            onChange={(e) =>
              setEditInputs({ ...editInputs, details: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeUpdateDialoge}>إغلاق</Button>
          <Button onClick={() => handleUpdateConfirm(todo.id)}>تأكيد</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        style={{ direction: "rtl" }}
        open={showDeleteDialog}
        onClose={closeDeleteDialoge}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          هل أنت متأكد من أنك تريد حذف هذه المهمة
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            لايمكنك التراجع عن هذا الحذف إذا ضغطت موافق
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteDialoge}>إغلاق</Button>
          <Button onClick={() => handleDeleteConfirm(todo.id)}>موافق</Button>
        </DialogActions>
      </Dialog>

      <Box
        className="todo-box"
        sx={{
          p: 2,
          backgroundColor: "#E5C955",
          marginTop: "10px",
          borderRadius: "4px",
        }}
      >
        <Grid container spacing={2}>
          <Grid size={8}>
            <Typography
              variant="h5"
              sx={{
                textAlign: "right",
                fontSize: "20px",
                textDecoration: todo.isComplete ? "line-through" : null,
              }}
            >
              {todo.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textAlign: "right",
                fontSize: "16px",
                width: "100%",
                overflow: "hidden",
              }}
            >
              {todo.details}
            </Typography>
          </Grid>
          <Grid
            size={4}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            <CompleteTaskButton
              todo={todo}
              onClickHandler={makeTodoCompleted}
              mainColor="#328E6E"
            >
              <CheckIcon />
            </CompleteTaskButton>

            <ActionButton
              todo={todo}
              onClickHandler={makeTodoCompleted}
              mainColor="#090030"
              onclick={openUpdateDialoge}
            >
              <EditIcon />
            </ActionButton>

            {/* Delete Button */}

            <ActionButton
              todo={todo}
              mainColor="#F30A49"
              onclick={openDeleteDialoge}
            >
              <DeleteIcon />
            </ActionButton>
            {/*========= Delete Button ========== */}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Todo;
