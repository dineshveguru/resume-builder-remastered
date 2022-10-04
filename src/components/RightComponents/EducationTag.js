import "../../styles/rightComponent.css";

function EducationTag(props) {
  return (
    <div className="education-tag--container">
      <div className={`education--tag`}>
        <div>
          <p className="college-section">{props.detail.college}</p>
          <p>{props.detail.course}</p>
        </div>
        <div>
          <p>
            {props.detail.from.toString().substring(4, 15)} -{" "}
            {props.detail.to.toString().substring(4, 15)}
          </p>
          <p className="cgpa-section">CGPA: {props.detail.cgpa}</p>
        </div>
      </div>
    </div>
  );
}

export default EducationTag;
