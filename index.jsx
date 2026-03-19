import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./me.jsx";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(<Home />);
