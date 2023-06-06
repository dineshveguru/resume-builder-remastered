import "../styles/resume.css";
import LeftComponent from "./LeftComponents/LeftComponent";
import RightComponent from "./RightComponents/RightComponent";

function Resume(props) {
  return (
    <div ref={props.innerRef}>
      <div className="resume-container">
        <LeftComponent
          details={props.details}
          skillSet={props.skillSet}
          techSet={props.techSet}
          languageSet={props.languageSet}
          interestSet={props.interestSet}
          imgUrl={props.imgUrl}
        />
        <RightComponent
          about={props.about}
          educationSet={props.educationSet}
          experienceSet={props.experienceSet}
          certificateSet={props.certificateSet}
          projectSet={props.projectSet}
          activitySet={props.activitySet}
        />
      </div>
    </div>
  );
}

export default Resume;
