import React from "react";
import App from "./App";
import './index.css';
import ReactDOM from "react-dom";
import {AppProvider} from './context'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
       <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
