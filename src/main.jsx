import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, RouterProvider } from "react-router";
import App from "./app";
import { createBrowserRouter } from "react-router";
import Root from "./component/Root";
import Home from "./component/Home";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    children:[
{
  path:"/",
  element:<Home></Home>
}

    ]
  }



])

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
<RouterProvider router= {router}></RouterProvider>
  </React.StrictMode>
  
);
