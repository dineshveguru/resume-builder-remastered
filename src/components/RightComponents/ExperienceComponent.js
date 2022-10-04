function ExperienceComponent(props) {
  return (
    <div>
      <p>{props.props.experienceDetail.title}</p>
      <p>{props.props.experienceDetail.description}</p>
      <p>{props.props.experienceDetail.from.toString()}</p>
      <p>{props.props.experienceDetail.to.toString()}</p>
      <i
        class="fa-solid fa-xmark"
        onClick={() => {
          props.delete(props.props.id);
        }}
      ></i>
    </div>
  );
}

export default ExperienceComponent;
