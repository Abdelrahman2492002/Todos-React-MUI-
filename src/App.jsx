import TodoList from "./components/TodoList";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TodosContext from "./context/TodosContext";

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
      <TodosContext>
        <div
          className="min-h-screen flex justify-center items-center bg-gradient-to-b from-slate-300 to-neutral-100"
          style={{ direction: "rtl", fontFamily: "Alex" }}
        >
          <Container maxWidth="sm" cka>
            <TodoList />
          </Container>
        </div>
      </TodosContext>
    </ThemeProvider>
  );
};

export default App;
