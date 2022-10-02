import "../styles/leftComponent.css";

function TechComponent(props) {
  return (
    <div className="skill-component--container">
      <p>{props.tech.techName}</p>
      <i
        class="fa-solid fa-xmark"
        onClick={() => {
          props.deleteTech(props.tech.id);
        }}
      ></i>
    </div>
  );
}

export default TechComponent;
