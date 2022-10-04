import "../../styles/rightComponent.css";
import EducationTag from "./EducationTag";

function Education(props) {
  return (
    <div className="education--section">
      <div className="heading--container">
        <h1>Education</h1>
      </div>
      {props.educationSet.map((item) => (
        <div>
          <EducationTag
            detail={item.educationDetail}
            id={item.id}
            educationSet={props.educationSet}
          />
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Education;
