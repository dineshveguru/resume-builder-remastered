import "../../styles/rightComponent.css";
import ProjectTag from "./ProjectTag";

function Project(props) {
  return (
    <div className="education--section">
      <div className="heading--container">
        <h1>Projects</h1>
      </div>
      {props.projectSet.map((item) => (
        <div>
          <ProjectTag detail={item} />
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Project;
