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
      <Education educationSet={props.educationSet} />
      <Experience experienceSet={props.experienceSet} />
      <Certificate certificateSet={props.certificateSet} />
      <Project projectSet={props.projectSet} />
      <Activity activitySet={props.activitySet} />
    </div>
  );
}

export default RightComponent;
