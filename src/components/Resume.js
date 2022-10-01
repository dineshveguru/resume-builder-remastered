import "../styles/resume.css";
import LeftComponent from "./LeftComponents/LeftComponent";
import RightComponent from "./RightComponents/RightComponent";

function Resume(props) {
  return (
    <div>
      <div className="resume-container" ref={props.innerRef}>
        <LeftComponent details={props.details} />
        <RightComponent />
      </div>
    </div>
  );
}

export default Resume;
