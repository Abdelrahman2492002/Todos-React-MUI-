import TodoList from "./components/TodoList";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TodosContext from "./context/TodosContext";
import Box from "@mui/material/Box";
import SnackBar from "./components/SnackBar";
import ToastContext from "./context/ToastContext";

const theme = createTheme({
  typography: {
    fontFamily: ["Alex"],
  },
  palette: {
    primary: {
      main: "#C24242",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContext>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            fontFamily: "Alex",
            direction: "rtl",
            background:
              "radial-gradient(circle,rgba(34, 193, 195, 0.69) 0%, rgba(253, 187, 45, 0.64) 100%)",
          }}
        >
          <SnackBar open={open} />
          <TodosContext>
            <Container maxWidth="sm">
              <TodoList />
            </Container>
          </TodosContext>
        </Box>
      </ToastContext>
    </ThemeProvider>
  );
};

export default App;
