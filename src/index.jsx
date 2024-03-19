import React from "react";
import ReactDOMClient from "react-dom/client";
import Screen from "./pages/screens/Screen";
import WhyChoose from "./pages/whyChoose/WhyChoose";
const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<WhyChoose />);
