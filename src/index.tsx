import * as React from "react";
import * as ReactDOM from 'react-dom'
import "./index.css";
import App from "./app/App";
import { ThemeProvider } from "@mui/styles";
import theme from "./app/constants/theme";



ReactDOM.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
  document.getElementById("root")
);
