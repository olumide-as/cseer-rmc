import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { BackTop } from "antd";
import { Home, NoPage, Dashboard, Login, Signup } from "./Pages";

const App = () => {
  return (
    <div className="App bg-black font-nasalisation">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>

        <BackTop />
    </div>
  );
};

export default App;
