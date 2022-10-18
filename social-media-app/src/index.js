import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/App.css";
// import App from "./components/ProfileCard";
// import App from "./components/AboutMe";
import App from "./pages/UserProfile";
import Home from "./pages/Home";
import SosmedApp from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SosmedApp />
  </React.StrictMode>
);
