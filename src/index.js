import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/core/styles";
import * as Mui from "@material-ui/core";
import { Provider } from "react-redux";
import { configureStore } from "./reduxs/store";
import theme from "./configs/theme";
import "./assets/scss/main.scss";
import './i18n';

const App = React.lazy(() => import(/* webpackChunkName: "App" */ "./App"));

ReactDOM.render(
  <Provider store={configureStore()}>
    <Suspense
      fallback={
        <Mui.Backdrop className="loader" open={true}>
          <Mui.CircularProgress color="secondary" size="24" />
        </Mui.Backdrop>
      }
    >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Suspense>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
