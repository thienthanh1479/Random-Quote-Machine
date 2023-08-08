import React from "react";
import { createRoot } from "react-dom/client";
import Quote from "./modules/quote.js";
import "bootstrap";
import "./sass/index.scss";
  
createRoot(document.getElementById("quote-box")).render(<Quote />);