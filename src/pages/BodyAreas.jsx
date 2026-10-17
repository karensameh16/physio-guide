import { useParams, useNavigate } from "react-router-dom";
import bodyParts from "../data/bodyParts";
import "./BodyParts.css";

function BodyAreas() {
  const { partName } = useParams();
  const navigate = useNavigate();

  const part = bodyParts.find((item) => item.name === partName);

  return (
    <section className="page">
      <h1>Choose {part.displayName || part.name} Area</h1>
      <div className="body-parts-list">
        {part.areas.map((area) => (
          <div
            className="body-part-card"
            key={area.name}
            onClick={() => navigate(`/body-parts/${partName}/${area.name}`)}
          >
            <img src={area.image} alt={area.name} />

            <h2>{area.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BodyAreas;
