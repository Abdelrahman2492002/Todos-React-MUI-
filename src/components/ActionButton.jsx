import IconButton from "@mui/material/IconButton";

const ActionButton = ({ onclick, mainColor, children }) => {
  return (
    <IconButton
      className="button-icon"
      aria-label="true"
      sx={{
        border: `3px solid ${mainColor}`,
        color: mainColor,
        backgroundColor: "#E5C955",
        borderRadius: "9999px",
        padding: "5px",
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
