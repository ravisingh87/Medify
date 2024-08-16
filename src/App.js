import React from "react";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import Home from "@components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "@components/Nav/Nav";
import FindDoctors from "@components/FindDoctors/FindDoctors";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/finddoctors' element={<FindDoctors />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
