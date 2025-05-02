import IconButton from "@mui/material/IconButton";

const CompleteTaskButton = ({ todo, onClickHandler, mainColor, children }) => {
  return (
    <IconButton
      className="button-icon"
      aria-label="true"
      sx={{
        border: `3px solid ${mainColor}`,
        color: todo.isComplete ? "#E5C955" : mainColor,
        backgroundColor: todo.isComplete ? mainColor : "#E5C955",
        borderRadius: "9999px",
        padding: "5px",
        "&:hover": {
          backgroundColor: todo.isComplete ? mainColor : "#E5C955",
        },
      }}
      onClick={() => onClickHandler(todo.id)}
    >
      {children}
    </IconButton>
  );
};

export default CompleteTaskButton;
