import About from "./About";
import "../../styles/rightComponent.css";
import Education from "./Education";
import Experience from "./Experience";
import Certificate from "./Certificate";
import Project from "./Project";

function RightComponent(props) {
  return (
    <div className="right--container">
      <About about={props.about} />
      <Education educationSet={props.educationSet} />
      <Experience experienceSet={props.experienceSet} />
      <Certificate certificateSet={props.certificateSet} />
      <Project projectSet={props.projectSet} />
    </div>
  );
}

export default RightComponent;
