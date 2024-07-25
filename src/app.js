import React from "react";
import ReactDOM from "react-dom/client";
// import Styles from "./style.css";
import Header from "./components/header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
  return  (
    <div className="app-layout">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />) //Render React Functional Component
