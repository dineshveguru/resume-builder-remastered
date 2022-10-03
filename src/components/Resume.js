import "../styles/resume.css";
import LeftComponent from "./LeftComponents/LeftComponent";
import RightComponent from "./RightComponents/RightComponent";

function Resume(props) {
  return (
    <div>
      <div className="resume-container" ref={props.innerRef}>
        <LeftComponent
          details={props.details}
          skillSet={props.skillSet}
          techSet={props.techSet}
          languageSet={props.languageSet}
        />
        <RightComponent />
      </div>
    </div>
  );
}

export default Resume;
