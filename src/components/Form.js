import React from "react";
import SkillAdd from "./SkillAdd";
import SkillComponent from "./SkillComponent";

function Form(props) {
  const [skillList, setSkillList] = React.useState([]);
  function handleAddSkill(event) {
    setSkillList(
      skillList.concat(
        <SkillAdd
          key={skillList.length}
          deleteSkill={props.deleteSkill}
          changeSkill={props.changeSkill}
        />
      )
    );
  }
  return (
    <div>
      <p>name</p>
      <input
        type="text"
        placeholder="enter name"
        value={props.details.name}
        name="name"
        onChange={props.changeDetails}
      />
      <p>Address</p>
      <input
        type="text"
        placeholder="enter address"
        value={props.details.address}
        name="address"
        onChange={props.changeDetails}
      />
      <p>Contact Number</p>
      <input
        type="text"
        placeholder="enter contact"
        value={props.details.contact}
        name="contact"
        onChange={props.changeDetails}
      />
      <p>E-mail</p>
      <input
        type="text"
        placeholder="enter mail"
        value={props.details.mail}
        name="mail"
        onChange={props.changeDetails}
      />
      <p>LinkedIn Profile Link</p>
      <input
        type="text"
        placeholder="enter linkenIn profile"
        value={props.details.linkedinProfile}
        name="linkedinProfile"
        onChange={props.changeDetails}
      />
      <p>GitHub Profile Link</p>
      <input
        type="text"
        placeholder="enter github link"
        value={props.details.githubLink}
        name="githubLink"
        onChange={props.changeDetails}
      />
      <p>skills</p>
      <input type="text" onChange={props.changeSkill} />
      <button onClick={props.changeSkillSet}>Add skill</button>
      <button onClick={handleAddSkill}>Add new skill</button>
      {skillList}
    </div>
  );
}

export default Form;
