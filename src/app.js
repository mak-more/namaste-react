import React, { lazy , Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Homepage from "./components/Homepage";
import Blogs from "./components/Blogs";
import BlogDetails from "./components/BlogDetails";
import Cart from "./components/Cart";
import Videos from "./components/Videos";
import VideoDetails from "./components/VideoDetails";
// import About from "./components/About";
import Contact from "./components/Contact";
// import Grocery from "./components/Grocery";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Loader from "./components/Loader";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "../utils/userContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";


/* Chunking, Code Splitting, Dynamic Bundling, Lazy Loading, On Demand Loading, Dynamic Import
- STARTS HERE */
const About = lazy(()=> import("./components/About")); //Lazy Loading
const Grocery = lazy(()=> import("./components/Grocery")); //Lazy Loading
/* - ENDS HERE */

const AppLayout = () => {

  //Authentication login user
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Makarand More",
    };
    setUserName(data.name);
  },[]);

  return  (
    <Provider store={appStore}>
      {/* below username is apply to whole website */}
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div>
        {/* below username is only apply to Header section */}
        <UserContext.Provider value={{loggedInUser: "User-Header"}}>
          <Header />
        </UserContext.Provider>
          <div className="relative top-20"><Outlet /></div>
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children: [
      {
        path:"/",
        element:<Homepage />
      },
      {
        path:"/blogs",
        element:<Blogs />
      },
      {
        path:"/:blogsCategory/:blogsID",
        element:<BlogDetails />
      },
      {
        path:"/videos",
        element:<Videos />
      },
      {
        path:"/:videoCategory/:videoId",
        element:<VideoDetails />
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
      },
      {
        path:"/cart",
        element:<Cart />
      }
    ],
    errorElement: <Error />
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />) //Render React Functional Component
root.render(<RouterProvider router={appRouter} />);
