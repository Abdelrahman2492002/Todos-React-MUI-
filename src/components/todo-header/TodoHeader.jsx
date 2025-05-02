import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const TodoHeader = () => {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Alex",

          fontWeight: 600,
          fontSize: { xs: "30px", md: "40px" },
        }}
      >
        <span style={{ color: "#C24242" }}>قائمة</span> المهام
      </Typography>
      <Divider />
    </>
  );
};

export default TodoHeader;
