import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "./context/ThemeContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
