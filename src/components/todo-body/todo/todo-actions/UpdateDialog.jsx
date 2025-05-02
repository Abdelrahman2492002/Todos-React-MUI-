import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { TodoContext } from "../../../../context/TodosContext";

const UpdateDialog = ({ todo, showUpdate, setShowUpdateDialog }) => {
  const { todos, setTodos } = useContext(TodoContext);

  const [editInputs, setEditInputs] = useState({
    title: todo.title,
    details: todo.details,
  });

  const closeUpdateDialoge = () => {
    setShowUpdateDialog(false);
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

  return (
    <Dialog
      open={showUpdate}
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
  );
};

export default UpdateDialog;
