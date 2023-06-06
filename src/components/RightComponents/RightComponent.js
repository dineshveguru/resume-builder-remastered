import About from "./About";
import "../../styles/rightComponent.css";
import Education from "./Education";
import Experience from "./Experience";
import Certificate from "./Certificate";
import Project from "./Project";
import Activity from "./Activity";

function RightComponent(props) {
  return (
    <div className="right--container">
      <About about={props.about} />
      <Experience experienceSet={props.experienceSet} />
      <Project projectSet={props.projectSet} />
      <Education educationSet={props.educationSet} />
      <Certificate certificateSet={props.certificateSet} />
      <Activity activitySet={props.activitySet} />
    </div>
  );
}

export default RightComponent;
