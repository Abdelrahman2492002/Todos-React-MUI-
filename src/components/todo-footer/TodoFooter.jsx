import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const TodoFooter = ({ titleInput, handleTitleInputChange, handleAddTodo }) => {
  return (
    <Grid container spacing={2} sx={{ marginTop: "10px" }}>
      <Grid size={8}>
        <TextField
          id="outlined-basic"
          label="إضافة مهمة"
          variant="outlined"
          sx={{
            width: "100%",
          }}
          color="primary"
          value={titleInput}
          onChange={handleTitleInputChange}
          slotProps={{
            inputLabel: {
              sx: {
                fontSize: { xs: "12px", md: "16px" },
              },
            },
          }}
        />
      </Grid>
      <Grid size={4}>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "#C24242",
          }}
          onClick={handleAddTodo}
          disabled={titleInput.length == 0}
        >
          إضافة
        </Button>
      </Grid>
    </Grid>
  );
};

export default TodoFooter;
