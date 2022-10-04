import "../../styles/rightComponent.css";
import ExperienceTag from "./ExperienceTag";

function Experience(props) {
  return (
    <div>
      {props.experienceSet.length >= 1 && (
        <div className="education--section">
          <div className="heading--container">
            <h1>Experience</h1>
          </div>
          <div>
            {props.experienceSet.map((item) => (
              <div>
                <ExperienceTag item={item} />
                <hr />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Experience;
