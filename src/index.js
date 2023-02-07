import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { deepPurple, red } from "@material-ui/core/colors";

import App from "./App";
import "./index.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[900],
    },
    secondary: {
      main: red[900],
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
