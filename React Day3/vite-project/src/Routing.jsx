import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Timer from "./Timer";
import WindowResize from "./WindowResize";

import "./App.css";

const Routing = () => {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <ul className="nav-links">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/timer"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Timer
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/resize"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Window Resize
            </NavLink>
          </li>

        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/resize" element={<WindowResize />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;