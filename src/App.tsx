import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import router from "./route";
import "@mantine/core/styles.css";
import "./App.css";
import { theme } from "./theme";
// import reportWebVitals from "./reportWebVitals";

const App = () => {
  return (
    <React.StrictMode>
      <MantineProvider theme={theme} defaultColorScheme="light">
        <RouterProvider router={router} />
      </MantineProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

// 报告Web Vitals性能指标，Learn more: https://bit.ly/CRA-vitals
// reportWebVitals((data) => console.log(data));
