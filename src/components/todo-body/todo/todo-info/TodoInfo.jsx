import Typography from "@mui/material/Typography";

const TodoInfo = ({ todo }) => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          textAlign: "right",
          fontSize: { xs: "14px", md: "18px" },
          textDecoration: todo.isComplete ? "line-through" : null,
        }}
      >
        {todo.title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          textAlign: "right",
          fontSize: { xs: "11px", md: "14px" },
          width: "100%",
          overflow: "hidden",
        }}
      >
        {todo.details}
      </Typography>
    </>
  );
};

export default TodoInfo;
