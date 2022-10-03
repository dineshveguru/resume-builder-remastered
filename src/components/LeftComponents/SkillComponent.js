import "../../styles/leftComponent.css";

function SkillComponent(props) {
  return (
    <div className="skill-component--container">
      <p>{props.skill.skill}</p>
      <i
        class="fa-solid fa-xmark"
        onClick={() => {
          props.deleteSkill(props.skill.id);
        }}
      ></i>
    </div>
  );
}

export default SkillComponent;
