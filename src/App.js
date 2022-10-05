import "./App.css";
import { useReactToPrint } from "react-to-print";
import Resume from "./components/Resume";
import React, { useRef, useEffect } from "react";
import Form from "./components/Form";

function App() {
  const [images, setImages] = React.useState([]);
  const [imgUrl, setImgUrl] = React.useState([]);
  const [details, setDetails] = React.useState({
    name: "",
    address: "",
    contact: "",
    mail: "",
    linkedinProfile: "",
    githubLink: "",
  });
  const [educationDetails, setEducationDetails] = React.useState({
    course: "",
    college: "",
    from: new Date(),
    to: new Date(),
    cgpa: "",
  });
  const [certification, setCertification] = React.useState({
    title: "",
    issuingOrganization: "",
  });
  const [experience, setExperience] = React.useState({
    title: "",
    description: "",
    from: new Date(),
    to: new Date(),
  });
  const [project, setProject] = React.useState({
    title: "",
    description: "",
    link: "",
  });
  const [activity, setActivity] = React.useState("");
  const [activitySet, setActivitySet] = React.useState([]);
  const [projectSet, setProjectSet] = React.useState([]);
  const [certificateSet, setCertificateSet] = React.useState([]);
  const [educationSet, setEduactionSet] = React.useState([]);
  const [skill, setSkill] = React.useState("");
  const [skillSet, setSkillSet] = React.useState([]);
  const [tech, setTech] = React.useState("");
  const [techSet, setTechSet] = React.useState([]);
  const [language, setLanguage] = React.useState("");
  const [languageSet, setLanguageSet] = React.useState([]);
  const [interest, setInterest] = React.useState("");
  const [interestSet, setInterestSet] = React.useState([]);
  const [about, setAbout] = React.useState("");
  const [experienceSet, setExperienceSet] = React.useState([]);
  function changeImageLink(e) {
    setImages([...e.target.files]);
  }

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrl = [];
    // images.forEach((image) => newImageUrl.push(URL.createObjectURL(image)));
    for (const image of images) {
      newImageUrl.push(URL.createObjectURL(image));
    }
    setImgUrl(newImageUrl);
  }, [images]);
  function changeActivitySet() {
    if (activity) {
      let num = activitySet.length + 1;
      let newActivity = { id: num, activityName: activity };
      setActivitySet([...activitySet, newActivity]);
      setActivity("");
    }
  }
  function deleteActivity(id) {
    let newSet = activitySet.filter((task) => task.id !== id);
    setActivitySet(newSet);
  }
  function changeActivity(e) {
    setActivity(e.target.value);
  }
  const activityHandlers = {
    activity: activity,
    activitySet: activitySet,
    changeActivitySet: changeActivitySet,
    deleteActivity: deleteActivity,
    changeActivity: changeActivity,
  };
  function changeEducationSet() {
    if (educationDetails.college && educationDetails.course) {
      let newDetail = {
        id: educationSet.length + 1,
        educationDetail: educationDetails,
      };
      setEduactionSet([...educationSet, newDetail]);
      setEducationDetails({
        course: "",
        college: "",
        from: new Date(),
        to: new Date(),
        cgpa: "",
      });
    }
    console.log(educationSet);
  }

  const educationHandlers = {
    educationDetails: educationDetails,
    educationSet: educationSet,
    changeEducationSet: changeEducationSet,
    deleteEducationDetail: deleteEducationDetail,
    changeEdcationDetail: changeEdcationDetail,
  };

  function deleteEducationDetail(id) {
    let newSet = educationSet.filter((detail) => detail.id !== id);
    setEduactionSet(newSet);
  }

  function changeEdcationDetail(e) {
    const { name, value } = e.target;
    setEducationDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  function changeExperienceSet() {
    if (experience.title) {
      let newExperience = {
        id: experienceSet.length + 1,
        experienceDetail: experience,
      };
      setExperienceSet([...experienceSet, newExperience]);
      setExperience({
        title: "",
        description: "",
        from: new Date(),
        to: new Date(),
      });
    }
    console.log(experienceSet);
  }

  function deleteExperienceDetail(id) {
    let newSet = experienceSet.filter((detail) => detail.id !== id);
    setExperienceSet(newSet);
  }

  function changeExperienceDetail(e) {
    const { name, value } = e.target;
    setExperience((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  function changeProjectSet() {
    if (project.title) {
      let newProject = {
        id: projectSet.length + 1,
        ProjectDetail: project,
      };
      setProjectSet([...projectSet, newProject]);
      setProject({
        title: "",
        description: "",
        link: "",
      });
    }
    console.log(projectSet);
  }

  function deleteProjectDetail(id) {
    let newSet = projectSet.filter((detail) => detail.id !== id);
    setProjectSet(newSet);
  }

  function changeProjectDetail(e) {
    const { name, value } = e.target;
    setProject((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  const projectHandlers = {
    project: project,
    projectSet: projectSet,
    changeProjectSet: changeProjectSet,
    deleteProjectDetail: deleteProjectDetail,
    changeProjectDetail: changeProjectDetail,
  };
  function changeCertificateSet() {
    if (certification.title) {
      let newCertification = {
        id: certificateSet.length + 1,
        CertificateDetail: certification,
      };
      setCertificateSet([...certificateSet, newCertification]);
      setCertification({
        title: "",
        issuingOrganization: "",
      });
    }
    console.log(certificateSet);
  }

  function deleteCertificateDetail(id) {
    let newSet = certificateSet.filter((detail) => detail.id !== id);
    setCertificateSet(newSet);
  }

  function changeCertificationDetail(e) {
    const { name, value } = e.target;
    setCertification((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const certificationHandlers = {
    certification: certification,
    certificateSet: certificateSet,
    changeCertificateSet: changeCertificateSet,
    deleteCertificateDetail: deleteCertificateDetail,
    changeCertificationDetail: changeCertificationDetail,
  };

  const experienceHandlers = {
    experience: experience,
    experienceSet: experienceSet,
    changeExperienceSet: changeExperienceSet,
    deleteExperienceDetail: deleteExperienceDetail,
    changeExperienceDetail: changeExperienceDetail,
  };

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
  const languageHandlers = {
    language: language,
    languageSet: languageSet,
    changeLanguageSet: changeLanguageSet,
    deleteLanguage: deleteLanguage,
    changeLanguage: changeLanguage,
  };
  function deleteLanguage(id) {
    let newSet = languageSet.filter((item) => item.id !== id);
    setLanguageSet(newSet);
  }
  function changeInterest(e) {
    setInterest(e.target.value);
  }
  function changeInterestSet() {
    if (interest) {
      let newInterest = { id: interestSet.length + 1, interestName: interest };
      setInterestSet([...interestSet, newInterest]);
      setInterest("");
    }
  }
  function deleteInterest(id) {
    let newSet = interestSet.filter((item) => item.id !== id);
    setInterestSet(newSet);
  }
  const interestHandlers = {
    interest: interest,
    interestSet: interestSet,
    changeInterestSet: changeInterestSet,
    deleteInterest: deleteInterest,
    changeInterest: changeInterest,
  };
  function changeAbout(e) {
    setAbout(e.target.value);
  }
  const aboutHandlers = {
    about: about,
    changeAbout: changeAbout,
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
      <div className="form--container">
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
          interestHandlers={interestHandlers}
          aboutHandlers={aboutHandlers}
          educationHandlers={educationHandlers}
          experienceHandlers={experienceHandlers}
          certificationHandlers={certificationHandlers}
          projectHandlers={projectHandlers}
          activityHandlers={activityHandlers}
          changeImageLink={changeImageLink}
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
          interestSet={interestSet}
          about={about}
          educationSet={educationSet}
          experienceSet={experienceSet}
          certificateSet={certificateSet}
          projectSet={projectSet}
          activitySet={activitySet}
          imgUrl={imgUrl}
        />
      </div>
    </div>
  );
}

export default App;
