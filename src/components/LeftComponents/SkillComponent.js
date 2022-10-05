import "../../styles/leftComponent.css";

function SkillComponent(props) {
  return (
    <div className="skill-component--container">
      <div>
        <p>{props.skill.skill}</p>
      </div>
      <div>
        <i
          class="fa-solid fa-xmark"
          onClick={() => {
            props.deleteSkill(props.skill.id);
          }}
        ></i>
      </div>
    </div>
  );
}

export default SkillComponent;
