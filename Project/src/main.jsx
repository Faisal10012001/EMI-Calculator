import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Fix: Added curly braces to match your 'export function'
import { EmiCalculator } from './Components/EmiCalculator/EmiCalculator';

// Global CSS (ensure this file exists or comment this line out)
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EmiCalculator />
  </StrictMode>
);