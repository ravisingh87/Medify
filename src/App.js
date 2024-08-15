import React from "react";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import Home from "@components/Home/Home";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};

export default App;
