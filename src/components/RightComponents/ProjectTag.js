import "../../styles/rightComponent.css";

function ProjectTag(props) {
  return (
    <div className="education-tag--container">
      <div className={`education--tag`}>
        <div className="project--section">
          <p className="college-section">{props.detail.ProjectDetail.title}</p>
          <p>{props.detail.ProjectDetail.description}</p>
        </div>
        <div>
          <p className="project--link">{props.detail.ProjectDetail.link}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectTag;
