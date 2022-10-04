import "../../styles/rightComponent.css";

function ActivityTag(props) {
  return (
    <div>
      <li className="activity--component">
        <p>{props.detail.activityName}</p>
      </li>
    </div>
  );
}

export default ActivityTag;
