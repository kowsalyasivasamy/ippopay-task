import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { StrongPasswordFormPage } from "./task1/StrongPasswordFormPage";
import { MinimalStepCountResultPage } from "./task1/MinimalStepCountResultPage";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StrongPasswordFormPage />,
    },
    {
      path: "/steps-count",
      element: <MinimalStepCountResultPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
