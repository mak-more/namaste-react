import React, { lazy , Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import BlogDetails from "./components/BlogDetails";
// import About from "./components/About";
import Contact from "./components/Contact";
// import Grocery from "./components/Grocery";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Loader from "./components/Loader";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


/* Chunking, Code Splitting, Dynamic Bundling, Lazy Loading, On Demand Loading, Dynamic Import
- STARTS HERE */
const About = lazy(()=> import("./components/About")); //Lazy Loading
const Grocery = lazy(()=> import("./components/Grocery")); //Lazy Loading
/* - ENDS HERE */

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
        path:"/blogs/:blogsCategory/:blogsID",
        element:<BlogDetails />
      },
      {
        path:"/about",
        element:<Suspense fallback={<Loader />}><About /></Suspense>
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<Loader />}><Grocery /></Suspense>
      }
    ],
    errorElement: <Error />
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />) //Render React Functional Component
root.render(<RouterProvider router={appRouter} />);
