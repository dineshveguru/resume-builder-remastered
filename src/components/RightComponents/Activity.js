import "../../styles/rightComponent.css";
import ActivityTag from "./ActivityTag";

function Activity(props) {
  return (
    <div className="education--section">
      <div className="heading--container">
        <h1>Additional Activities</h1>
      </div>
      <div style={{ "margin-top": "1rem" }}>
        <ul>
          {props.activitySet.map((item) => (
            <div className="activity-container">
              <ActivityTag detail={item} />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Activity;
