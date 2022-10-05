function ProjectComponent(props) {
  return (
    <div className="skill-component--container">
      <div>
        <p>{props.props.ProjectDetail.title}</p>
        <p>{props.props.ProjectDetail.description}</p>
        <p>{props.props.ProjectDetail.link}</p>
      </div>
      <div>
        <i
          class="fa-solid fa-xmark"
          onClick={() => {
            props.delete(props.props.id);
          }}
        ></i>
      </div>
    </div>
  );
}

export default ProjectComponent;
