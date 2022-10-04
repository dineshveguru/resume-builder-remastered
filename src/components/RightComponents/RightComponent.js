import About from "./About";
import "../../styles/rightComponent.css";
import Education from "./Education";

function RightComponent(props) {
  return (
    <div className="right--container">
      <About about={props.about} />
      <Education educationSet={props.educationSet} />
    </div>
  );
}

export default RightComponent;
