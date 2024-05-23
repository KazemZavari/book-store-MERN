import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.jsx";
import { SnackbarProvider } from "notistack";
import MainContextProvider from "./contextProvider/MainContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <MainContextProvider>
      <SnackbarProvider>
        <RouterProvider router={router} />
      </SnackbarProvider>
      </MainContextProvider>
  </React.StrictMode>
);
