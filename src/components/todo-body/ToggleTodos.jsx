import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ToggleTodos = ({ value, onchange }) => {
  return (
    <div>
      <ToggleButtonGroup
        exclusive
        aria-label="filter todos"
        sx={{
          direction: "ltr",
          marginTop: {
            xs: "15px",
            md: "30px",
          },
        }}
        value={value}
        onChange={onchange}
        color="primary"
      >
        <ToggleButton
          sx={{ fontSize: { xs: "10px", md: "14px" } }}
          value="unCompleted"
        >
          غير مكتمل
        </ToggleButton>
        <ToggleButton
          sx={{ fontSize: { xs: "10px", md: "14px" } }}
          value="completed"
        >
          مكتمل
        </ToggleButton>
        <ToggleButton sx={{ fontSize: { xs: "10px", md: "14px" } }} value="all">
          الكل
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default ToggleTodos;
