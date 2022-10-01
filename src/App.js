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
  function changeSkill(event) {
    setSkill(event.target.value);
    console.log(skill);
  }
  function changeSkillSet(event) {
    if (skill) {
      let num = skillSet.length + 1;
      let newSkill = { id: num, skillName: skill };
      setSkillSet([...skillSet, newSkill]);
      setSkill("");
      console.log(skillSet);
    }
  }
  function deleteSkill(id) {
    let newTasks = skillSet.filter((task) => task.id !== id);
    setSkillSet(newTasks);
  }
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
          changeSkill={changeSkill}
          changeSkillSet={changeSkillSet}
          deleteSkill={deleteSkill}
        />
        <button onClick={handlePrint}>print me</button>
      </div>
      <div>
        <Resume innerRef={componentRef} details={details} skillSet={skillSet} />
      </div>
    </div>
  );
}

export default App;
