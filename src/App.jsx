import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import BodyParts from "./pages/BodyParts.jsx";
import BodyAreas from "./pages/BodyAreas.jsx";
import Exercises from "./pages/Exercises.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/body-parts" element={<BodyParts />} />

        <Route path="/body-parts/Neck" element={<Exercises />} />

        <Route path="/body-parts/:partName" element={<BodyAreas />} />

        <Route path="/body-parts/:partName/:areaName" element={<Exercises />} />
      </Routes>
    </>
  );
}

export default App;
