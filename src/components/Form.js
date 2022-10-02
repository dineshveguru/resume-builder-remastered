import React from "react";
import SkillComponent from "./SkillComponent";
import TechComponent from "./TechComponent";

function Form(props) {
  const skills = props.skillSet.map((skill) => (
    <SkillComponent skill={skill} deleteSkill={props.deleteSkill} />
  ));
  const techs = props.techSet.map((techItem) => (
    <TechComponent tech={techItem} deleteTech={props.deleteTech} />
  ));
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
      <input type="text" onChange={props.changeSkill} value={props.skill} />
      <button onClick={props.changeSkillSet}>Add skill</button>
      {skills}
      <p>Technologies</p>
      <input type="text" onChange={props.changeTech} value={props.tech} />
      <button onClick={props.changeTechSet}>Add skill</button>
      {techs}
      <p>Languages</p>
      <input type="text" />
      <button>Add language</button>
    </div>
  );
}

export default Form;
