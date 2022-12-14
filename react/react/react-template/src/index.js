import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import Header from "./components/header/Header";
import Footer from "./components/header/footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <App />
    <Footer />
  </>
);
