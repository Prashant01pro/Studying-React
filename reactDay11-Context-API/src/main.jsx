import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeContext from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeContext>
    {/* <h1 style={{color:"white"}}>Har Har MahaDev</h1> */}
    <App />
  </ThemeContext>,
);
