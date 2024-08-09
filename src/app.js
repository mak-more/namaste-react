import React from "react";
import ReactDOM from "react-dom/client";
// import Styles from "./style.css";
import Header from "./components/Header";
import Body from "./components/Body";
import BlogDetails from "./components/BlogDetails";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";

const AppLayout = () => {
  return  (
    <div className="app-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children: [
      {
        path:"/",
        element:<Body />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/blogs/:blogsCategory",
        element:<BlogDetails />
      }
    ],
    errorElement: <Error />
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />) //Render React Functional Component
root.render(<RouterProvider router={appRouter} />);
