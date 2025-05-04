import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../../../context/TodosContext";
import { useToast } from "../../../../context/ToastContext";

const UpdateDialog = ({ todo, showUpdate, closeUpdateDialoge }) => {
  const { todos, setTodos } = useContext(TodoContext);
  const { showHideToast } = useToast();

  const [editInputs, setEditInputs] = useState({
    title: todo?.title,
    details: todo?.details,
  });

  const handleUpdateConfirm = () => {
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return {
          ...t,
          title: editInputs.title,
          details: editInputs.details,
        };
      }
      return t;
    });

    setTodos(updatedTodos);
    closeUpdateDialoge();
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    showHideToast("تم تعديل المهمة بنجاح 😊");
  };

  useEffect(() => {
    if (todo) {
      setEditInputs({
        title: todo.title || "",
        details: todo.details || "",
      });
    }
  }, [todo]);

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
          fontSize: { xs: "16px", md: "20px" },
        }}
      >
        <span style={{ color: "#328E6E", fontWeight: "bold" }}>
          تعديل مهمة{" "}
        </span>
        {todo?.title}
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
              sx: {
                direction: "rtl",
                textAlign: "right",
                right: 0,
                left: "auto",
                fontWeight: "bold",
                fontSize: { xs: "15px", md: "16px" },
                color: "primary.main",
              },
            },
            input: {
              sx: {
                fontSize: { xs: "12px", md: "16px" },
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
              sx: {
                direction: "rtl",
                textAlign: "right",
                right: 0,
                left: "auto",
                fontWeight: "bold",
                color: "primary.main",
              },
            },
            input: {
              sx: {
                fontSize: { xs: "12px", md: "16px" },
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
        <Button onClick={handleUpdateConfirm}>تأكيد</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateDialog;
