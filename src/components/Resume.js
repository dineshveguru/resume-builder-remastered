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
          interestSet={props.interestSet}
        />
        <RightComponent
          about={props.about}
          educationSet={props.educationSet}
          experienceSet={props.experienceSet}
          certificateSet={props.certificateSet}
          projectSet={props.projectSet}
        />
      </div>
    </div>
  );
}

export default Resume;
