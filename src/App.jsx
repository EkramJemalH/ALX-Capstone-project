import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CategorySelect from "./components/CategorySelect";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/CategorySelect" element={<CategorySelect />} />

      </Routes>
    </Router>
  );
}
