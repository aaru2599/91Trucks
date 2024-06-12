import ReactDOM from "react-dom/client";
import  "./App.css";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Template/Home/Home.jsx";
import CardDetail from "./components/Template/CardDetails/CardDetail.jsx";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:type/:name",
    element: <CardDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={routes} />
  </>
);
