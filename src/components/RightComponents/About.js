import "../../styles/rightComponent.css";

function About(props) {
  return (
    <div className="about--section">
      <div className="heading--container">
        <h1>About me</h1>
      </div>
      <p>{props.about}</p>
    </div>
  );
}

export default About;
