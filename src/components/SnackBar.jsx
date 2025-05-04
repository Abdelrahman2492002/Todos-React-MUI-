import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useToast } from "../context/ToastContext";

export default function SnackBar() {
  const { open, message, severity } = useToast();

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      sx={{
        ".MuiPaper-root": {
          flexDirection: "row-reverse",
        },
      }}
    >
      <Alert variant="filled" severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
