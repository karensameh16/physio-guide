import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Home.css";
import heroImg from "../assets/hero.jpg";

function Home() {
  const location = useLocation();
  const buttonRef = useRef(null);
  const highlight = location.state?.highlight;

  useEffect(() => {
    if (highlight) {
      buttonRef.current.focus();
    }
  }, [location.key, highlight]);
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero-overlay">
        <h1>Restore movement functions and independancy</h1>
        <p>Learn about your pain area with simple, educational exercises.</p>

        <div className="hero-buttons">
          <Link
            to="/body-parts"
            ref={buttonRef}
            className={highlight ? "btn-primary highlight" : "btn-primary"}
          >
            Choose Body Part
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
