function ProjectComponent(props) {
  return (
    <div>
      <p>{props.props.ProjectDetail.title}</p>
      <p>{props.props.ProjectDetail.description}</p>
      <p>{props.props.ProjectDetail.link}</p>
      <i
        class="fa-solid fa-xmark"
        onClick={() => {
          props.delete(props.props.id);
        }}
      ></i>
    </div>
  );
}

export default ProjectComponent;
