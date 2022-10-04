function EducationComponent(props) {
  return (
    <div>
      <p>{props.props.educationDetail.college}</p>
      <p>{props.props.educationDetail.course}</p>
      <p>{props.props.educationDetail.from.toString()}</p>
      <p>{props.props.educationDetail.to.toString()}</p>
      <p>{props.props.educationDetail.cgpa}</p>
      <i
        class="fa-solid fa-xmark"
        onClick={() => {
          props.delete(props.props.id);
        }}
      ></i>
    </div>
  );
}

export default EducationComponent;
