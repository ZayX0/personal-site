import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./components/index.css";
import "./components/sidebar.scss";
import "./components/counter.scss";
import "./components/about.scss";
import ErrorPage from "./error-page";
import Counter from "./components/counter";
import About from "./components/about";
import ProjectList from "./components/projectList";
import "./components/projectList.scss";

// Turn projects link into a list of links
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/projects",
        element: <ProjectList />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
