import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

// style
import "../style/Navbar.css";

const Navbar = () => {
  let navigate = useNavigate();
  let flag = true;
  let body = document.querySelector("body");

  const show = () => {
    let mnav = document.querySelector(".mobileNav");
    body.style.backgroundColor = "#333";
    mnav.style.transform = "translateX(0px)";
    flag = false;
  };

  const hidden = () => {
    let mnav = document.querySelector(".mobileNav");
    body.style.backgroundColor = "transparent";
    mnav.style.transform = "translateX(-600px)";
    flag = true;
  };

  return (
    <React.StrictMode>
      <section className="navbar">
        <div className="logo">
          <h1 onClick={() => {navigate("/")}}>LapTop</h1>
        </div>
        {/* computer */}
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="cards">Cards</NavLink>
          <NavLink to="services">Services</NavLink>
          <NavLink to="contact">Contact us</NavLink>
        </nav>
        {/* Mobile */}
        <div className="mobileNav">
          <div className="nav1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="cards">Cards</NavLink>
            <NavLink to="services">Services</NavLink>
            <NavLink to="contact">Contact us</NavLink>
          </div>
        </div>
        <div
          className="hamburger"
          onClick={() => {
            flag ? show() : hidden();
          }}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
      </section>
    </React.StrictMode>
  );
};

export default Navbar;
