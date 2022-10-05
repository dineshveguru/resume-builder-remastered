function ActivityComponent(props) {
  return (
    <div className="skill-component--container">
      <p>{props.props.activityName}</p>
      <i
        class="fa-solid fa-xmark"
        onClick={() => {
          props.delete(props.props.id);
        }}
      ></i>
    </div>
  );
}

export default ActivityComponent;
