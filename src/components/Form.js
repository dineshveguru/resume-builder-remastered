import React from "react";
import InterestComponent from "./LeftComponents/InterestComponent";
import LanguageComponent from "./LeftComponents/LanguageComponent";
import SkillComponent from "./LeftComponents/SkillComponent";
import TechComponent from "./LeftComponents/TechComponent";
import DatePicker from "react-date-picker";
import EducationComponent from "./RightComponents/EducationComponent";

function Form(props) {
  const [to, setTo] = React.useState(new Date());
  const [from, setFrom] = React.useState(new Date());
  props.educationHandlers.educationDetails.from = from;
  props.educationHandlers.educationDetails.to = to;
  const skills = props.skillSet.map((skill) => (
    <SkillComponent skill={skill} deleteSkill={props.deleteSkill} />
  ));
  const techs = props.techSet.map((techItem) => (
    <TechComponent tech={techItem} deleteTech={props.deleteTech} />
  ));
  const languages = props.languageHandlers.languageSet.map((item) => (
    <LanguageComponent
      languageItem={item}
      deleteLanguage={props.languageHandlers.deleteLanguage}
    />
  ));
  const interests = props.interestHandlers.interestSet.map((item) => (
    <InterestComponent
      interestItem={item}
      deleteInterest={props.interestHandlers.deleteInterest}
    />
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
      <input
        type="text"
        onChange={props.languageHandlers.changeLanguage}
        value={props.languageHandlers.language}
      />
      <button onClick={props.languageHandlers.changeLanguageSet}>
        Add language
      </button>
      {languages}
      <p>Interests</p>
      <input
        type="text"
        onChange={props.interestHandlers.changeInterest}
        value={props.interestHandlers.interest}
      />
      <button onClick={props.interestHandlers.changeInterestSet}>
        Add interest
      </button>
      {interests}
      <p>About section</p>
      <textarea onChange={props.aboutHandlers.changeAbout} />
      <h3>Education section</h3>
      <p>Course</p>
      <input
        name="course"
        type="text"
        value={props.educationHandlers.educationDetails.course}
        onChange={props.educationHandlers.changeEdcationDetail}
      />
      <p>College</p>
      <input
        type="text"
        name="college"
        value={props.educationHandlers.educationDetails.college}
        onChange={props.educationHandlers.changeEdcationDetail}
      />
      <p>CGPA</p>
      <input
        name="cgpa"
        type="text"
        value={props.educationHandlers.educationDetails.cgpa}
        onChange={props.educationHandlers.changeEdcationDetail}
      />
      <p>From Date</p>
      <DatePicker onChange={(date) => setFrom(date)} value={from} name="from" />
      <p>To Date</p>
      <DatePicker onChange={(date) => setTo(date)} value={to} name="to" />
      <button onClick={props.educationHandlers.changeEducationSet}>
        Add details
      </button>
      {props.educationHandlers.educationSet.map((item) => (
        <EducationComponent
          props={item}
          delete={props.educationHandlers.deleteEducationDetail}
        />
      ))}
    </div>
  );
}

export default Form;
