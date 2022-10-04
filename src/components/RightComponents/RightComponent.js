import About from "./About";
import "../../styles/rightComponent.css";
import Education from "./Education";
import Experience from "./Experience";
import Certificate from "./Certificate";

function RightComponent(props) {
  return (
    <div className="right--container">
      <About about={props.about} />
      <Education educationSet={props.educationSet} />
      <Experience experienceSet={props.experienceSet} />
      <Certificate certificateSet={props.certificateSet} />
    </div>
  );
}

export default RightComponent;
