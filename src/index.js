import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// ✅ Import your styles
import "./index.css";                // your global styles (if you have them)
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap (if you’re using it)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
