import "./Page.css";

function About() {
  return (
    <section className="about-page">
      <div className="about-content">
        <span className="about-label">ABOUT PHYSIOGUIDE</span>

        <h1>
          Learn. Move.
          <br />
          Feel Better.
        </h1>

        <p className="about-intro">
          PhysioGuide is an educational website designed to help you understand
          common pain areas and learn about simple physiotherapy exercises.
        </p>

        <div className="about-card">
          <h2>Our Goal</h2>

          <p>
            Our goal is to make physiotherapy information simple, clear, and
            easy to understand.
          </p>

          <p>
            You can explore different body parts, learn about common pain areas,
            and discover educational exercises related to them.
          </p>
        </div>

        <div className="about-note">
          <strong>Important:</strong>

          <p>
            PhysioGuide is for educational purposes only. It does not provide
            medical diagnosis or replace professional medical advice.
          </p>
        </div>

        <p className="about-review">
          The educational content and exercises will be reviewed by{" "}
          <strong>Dr. Sameh Gayed</strong> before publication.
        </p>
      </div>
    </section>
  );
}
export default About;
