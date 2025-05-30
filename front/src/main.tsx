import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Historic from "./Historic.tsx";
import LLM from "./LLM.tsx";
import Home from "./Home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historic" element={<Historic />} />
        <Route path="/llm" element={<LLM />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
