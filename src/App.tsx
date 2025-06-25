import "./App.css";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import AppRouter from "./router/AppRouter";

function App() {
  const customTheme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#ffffff",
      },
    },
    typography: {
      fontFamily: "poppins",
      fontSize: 14,
      body1: { fontSize: "1rem", color: "#000" },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 8,
            padding: "6px 6px",
            minWidth: 0,
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
