import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TodoContext } from "../../../../context/TodosContext";
import { useContext } from "react";

const DeleteDialog = ({ showDelete, setShowDeleteDialog, id }) => {
  const { todos, setTodos } = useContext(TodoContext);

  const closeDeleteDialoge = () => {
    setShowDeleteDialog(false);
  };

  const handleDeleteConfirm = (id) => {
    const updatedTodos = todos.filter((t) => t.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <Dialog
      style={{ direction: "rtl" }}
      open={showDelete}
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
        <Button onClick={() => handleDeleteConfirm(id)}>موافق</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
