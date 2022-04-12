import React from "react";
import ReactDOMClient from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";

const container = document.getElementById("app");
const root = ReactDOMClient.createRoot(container);

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

root.render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
);
