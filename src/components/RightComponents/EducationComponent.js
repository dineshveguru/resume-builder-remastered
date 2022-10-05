function EducationComponent(props) {
  return (
    <div className="skill-component--container">
      <div>
        <p>{props.props.educationDetail.college}</p>
        <p>{props.props.educationDetail.course}</p>
        <p>{props.props.educationDetail.from.toString()}</p>
        <p>{props.props.educationDetail.to.toString()}</p>
        <p>{props.props.educationDetail.cgpa}</p>
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

export default EducationComponent;
