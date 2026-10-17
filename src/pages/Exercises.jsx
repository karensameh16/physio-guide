import { useParams } from "react-router-dom";
import bodyParts from "../data/bodyParts";
import "./BodyParts.css";

function Exercises() {
  const { partName, areaName } = useParams();

  const part = bodyParts.find((item) => item.name === partName);

  const exercises =
    areaName === "exercises"
      ? part.exercises
      : part.areas.find((area) => area.name === areaName).exercises;

  return (
    <section className="page">
      <h1>
        {areaName === "exercises"
          ? `${part.displayName || part.name} Exercises`
          : `${areaName} Exercises`}
      </h1>

      <div className="body-parts-list">
        {exercises.map((exercise, index) => (
          <div className="body-part-card" key={index}>
            {typeof exercise === "object" && (
              <img
                className="exercise-image"
                src={exercise.image}
                alt={exercise.name}
              />
            )}

            <h2>{typeof exercise === "string" ? exercise : exercise.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Exercises;
