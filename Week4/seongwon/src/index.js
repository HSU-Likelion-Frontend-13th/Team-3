import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// root 엘리먼트를 찾아 React 18 버전 방식으로 렌더링할 준비
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
