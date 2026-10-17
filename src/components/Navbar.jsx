import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import injuryIcon from "../assets/injury.png";
function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function handleStart() {
    setOpen(false);
    navigate("/", { state: { highlight: true } });
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={injuryIcon} alt="PhysioGuide" />
        <h2>PhysioGuide</h2>
      </div>

      <button className="navbar-toggle" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <div className={open ? "navbar-menu open" : "navbar-menu"}>
        <ul className="navbar-links">
          <li>
            <NavLink to="/" end onClick={() => setOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/body-parts" onClick={() => setOpen(false)}>
              Body Parts
            </NavLink>
          </li>
        </ul>
        <button className="navbar-button" onClick={handleStart}>
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
