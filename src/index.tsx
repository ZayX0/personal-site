import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./components/index.css";
import "./components/sidebar.scss";
import "./components/counter.scss";
import "./components/about.scss";
import "./components/quotes.scss";
import "./components/bitcoinAnalyzer.scss";
import ErrorPage from "./error-page";
import Counter from "./components/counter";
import About from "./components/about";
import ProjectList from "./components/projectList";
import "./components/projectList.scss";
import Quotes from "./components/quotes";
import Bitcoin from "./components/bitcoinAnalyzer";

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
      {
        path: "/quotes",
        element: <Quotes />,
      },
      {
        path: "/bitcoin",
        element: <Bitcoin />,
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
