import IconButton from "@mui/material/IconButton";

const ActionButton = ({ onclick, mainColor, children }) => {
  return (
    <IconButton
      className="button-icon"
      aria-label="true"
      sx={{
        borderStyle: "solid",
        borderColor: mainColor,
        borderWidth: { xs: "2px", md: "3px" },
        color: mainColor,
        backgroundColor: "#E5C955",
        borderRadius: "9999px",
        padding: { xs: "3px", md: "5px" },
        "&:hover": {
          backgroundColor: "#E5C955",
        },
      }}
      onClick={onclick}
    >
      {children}
    </IconButton>
  );
};

export default ActionButton;
