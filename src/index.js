import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Reset from "./styles/reset";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Reset />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
