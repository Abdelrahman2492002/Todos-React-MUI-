import IconButton from "@mui/material/IconButton";

const CompleteTaskButton = ({ todo, onClickHandler, mainColor, children }) => {
  return (
    <IconButton
      className="button-icon"
      aria-label="true"
      sx={{
        borderWidth: { xs: "2px", md: "3px" },
        borderStyle: "solid",
        borderColor: mainColor,
        color: todo.isComplete ? "#E5C955" : mainColor,
        backgroundColor: todo.isComplete ? mainColor : "#E5C955",
        borderRadius: "9999px",
        padding: { xs: "3px", md: "5px" },
        "&:hover": {
          backgroundColor: todo.isComplete ? mainColor : "#E5C955",
        },
      }}
      onClick={onClickHandler}
    >
      {children}
    </IconButton>
  );
};

export default CompleteTaskButton;
