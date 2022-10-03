import "./App.css";
import { useReactToPrint } from "react-to-print";
import Resume from "./components/Resume";
import React, { useRef } from "react";
import Form from "./components/Form";

function App() {
  const [details, setDetails] = React.useState({
    name: "",
    address: "",
    contact: "",
    mail: "",
    linkedinProfile: "",
    githubLink: "",
  });
  const [skill, setSkill] = React.useState("");
  const [skillSet, setSkillSet] = React.useState([]);
  const [tech, setTech] = React.useState("");
  const [techSet, setTechSet] = React.useState([]);
  const [language, setLanguage] = React.useState("");
  const [languageSet, setLanguageSet] = React.useState([]);
  function changeSkillSet(e) {
    if (skill) {
      let num = skillSet.length + 1;
      let newSkill = { id: num, skill: skill };
      setSkillSet([...skillSet, newSkill]);
      setSkill("");
    }
  }
  function deleteSkill(id) {
    let newSet = skillSet.filter((task) => task.id !== id);
    setSkillSet(newSet);
  }
  function changeSkill(e) {
    setSkill(e.target.value);
  }
  function changeTechSet(e) {
    if (tech) {
      let num = techSet.length + 1;
      let newTech = { id: num, techName: tech };
      setTechSet([...techSet, newTech]);
      setTech("");
    }
  }
  function deleteTech(id) {
    let newSet = techSet.filter((task) => task.id !== id);
    setTechSet(newSet);
  }
  function changeTech(e) {
    setTech(e.target.value);
  }
  function changeLanguage(e) {
    setLanguage(e.target.value);
  }
  function changeLanguageSet(e) {
    if (language) {
      let newLanguage = { id: languageSet.length + 1, languageName: language };
      setLanguageSet([...languageSet, newLanguage]);
      setLanguage("");
    }
  }
  function deleteLanguage(id) {
    let newSet = languageSet.filter((item) => item.id !== id);
    setLanguageSet(newSet);
  }
  const languageHandlers = {
    language: language,
    languageSet: languageSet,
    changeLanguageSet: changeLanguageSet,
    deleteLanguage: deleteLanguage,
    changeLanguage: changeLanguage,
  };
  function changeDetails(event) {
    const { name, value } = event.target;
    setDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="App">
      <div>
        <Form
          details={details}
          changeDetails={changeDetails}
          skill={skill}
          changeSkill={changeSkill}
          skillSet={skillSet}
          changeSkillSet={changeSkillSet}
          deleteSkill={deleteSkill}
          changeTech={changeTech}
          tech={tech}
          changeTechSet={changeTechSet}
          techSet={techSet}
          deleteTech={deleteTech}
          languageHandlers={languageHandlers}
        />
        <button onClick={handlePrint}>print me</button>
      </div>
      <div>
        <Resume
          innerRef={componentRef}
          details={details}
          skillSet={skillSet}
          techSet={techSet}
          languageSet={languageSet}
        />
      </div>
    </div>
  );
}

export default App;
