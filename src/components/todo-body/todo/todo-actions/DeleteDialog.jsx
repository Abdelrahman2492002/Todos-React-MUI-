import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatchTodos } from "../../../../context/TodosContext";
import { useToast } from "../../../../context/ToastContext";

const DeleteDialog = ({ id, showDelete, closeDeleteDialoge }) => {
  const dispatch = useDispatchTodos();
  const { showHideToast } = useToast();

  const handleDeleteConfirm = () => {
    dispatch({ type: "deleteTodo", id });
    closeDeleteDialoge();
    showHideToast("تم حذف المهمة بنجاح");
  };

  return (
    <Dialog
      style={{ direction: "rtl" }}
      open={showDelete}
      onClose={closeDeleteDialoge}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{ fontSize: { xs: "16px", md: "20px" } }}
      >
        هل أنت متأكد من أنك تريد حذف هذه المهمة
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          sx={{ fontSize: { xs: "13px", md: "16px" } }}
        >
          لايمكنك التراجع عن هذا الحذف إذا ضغطت موافق
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          sx={{ fontSize: { xs: "12px", md: "16px" } }}
          onClick={closeDeleteDialoge}
        >
          إغلاق
        </Button>
        <Button
          sx={{ fontSize: { xs: "12px", md: "16px" } }}
          onClick={handleDeleteConfirm}
        >
          موافق
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
