import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import { ThemeProvider } from "@mui/styles";
import { Provider } from "react-redux";
import { store } from "./app/store/store";
import theme from "./app/constants/theme";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
