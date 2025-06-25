import "./App.css";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useState } from "react";
import AppRouter from "./router/AppRouter";

function App() {
  const [isLight, setIsLight] = useState(true);

  const customTheme = createTheme({
    palette: {
      mode: isLight ? "light" : "dark",
      background: {
        default: isLight ? "#f5f5f5" : "#333333",
      },
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
      fontSize: 14,
      body1: { fontSize: "1rem", color: isLight ? "#000" : "#fff" },
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
      <AppRouter setTheme={setIsLight} />
    </ThemeProvider>
  );
}

export default App;
