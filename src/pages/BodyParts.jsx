import "./BodyParts.css";
import bodyParts from "../data/bodyParts";
import { useNavigate } from "react-router-dom";

function BodyParts() {
  const navigate = useNavigate();

  const handleBodyPartClick = (part) => {
    if (part.name === "Neck") {
      navigate(`/body-parts/${part.name}/exercises`);
    } else {
      navigate(`/body-parts/${part.name}`);
    }
  };

  return (
    <section className="page">
      <h1>Choose Body Part</h1>

      <div className="body-parts-list">
        {bodyParts.map((part) => (
          <div
            className="body-part-card"
            key={part.name}
            onClick={() => handleBodyPartClick(part)}
          >
            <img src={part.image} alt={part.name} />

            <h2>{part.displayName || part.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BodyParts;
