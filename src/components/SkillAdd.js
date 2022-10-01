function SkillAdd(props) {
  return (
    <div>
      <input type="text" onChange={props.changeSkill} />
      <button onClick={props.deleteSkill(props.key)}>delete</button>
    </div>
  );
}

export default SkillAdd;
