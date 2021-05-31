import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import GlobalStyle from "./Styles/GlobalStyle";
import theme from "./Styles/Theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <>
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  </>,
  document.getElementById("root")
);
