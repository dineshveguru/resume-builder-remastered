import React from "react";
import InterestComponent from "./LeftComponents/InterestComponent";
import LanguageComponent from "./LeftComponents/LanguageComponent";
import SkillComponent from "./LeftComponents/SkillComponent";
import TechComponent from "./LeftComponents/TechComponent";
import DatePicker from "react-date-picker";
import EducationComponent from "./RightComponents/EducationComponent";
import ExperienceComponent from "./RightComponents/ExperienceComponent";
import CertificateComponent from "./RightComponents/CertificateComponent";
import ProjectComponent from "./RightComponents/ProjectComponent";
import ActivityComponent from "./RightComponents/ActivityComponent";

function Form(props) {
  const [to, setTo] = React.useState(new Date());
  const [from, setFrom] = React.useState(new Date());
  props.educationHandlers.educationDetails.from = from;
  props.educationHandlers.educationDetails.to = to;
  props.experienceHandlers.experience.from = from;
  props.experienceHandlers.experience.to = to;
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
      <h1>Education section</h1>
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
      <h1>Experience Details</h1>
      <p>title</p>
      <input
        type="text"
        name="title"
        value={props.experienceHandlers.experience.title}
        onChange={props.experienceHandlers.changeExperienceDetail}
      />
      <p>Description</p>
      <input
        type="text"
        name="description"
        value={props.experienceHandlers.experience.description}
        onChange={props.experienceHandlers.changeExperienceDetail}
      />
      <p>From Date</p>
      <DatePicker onChange={(date) => setFrom(date)} value={from} name="from" />
      <p>To Date</p>
      <DatePicker onChange={(date) => setTo(date)} value={to} name="to" />
      <button onClick={props.experienceHandlers.changeExperienceSet}>
        Add details
      </button>
      {props.experienceHandlers.experienceSet.map((item) => (
        <ExperienceComponent
          props={item}
          delete={props.experienceHandlers.deleteExperienceDetail}
        />
      ))}
      <h1>Certification Details</h1>
      <p>Add title</p>
      <input
        type="text"
        name="title"
        value={props.certificationHandlers.certification.title}
        onChange={props.certificationHandlers.changeCertificationDetail}
      />
      <p>Issuing Organization</p>
      <input
        type="text"
        name="issuingOrganization"
        value={props.certificationHandlers.certification.issuingOrganization}
        onChange={props.certificationHandlers.changeCertificationDetail}
      />
      <button onClick={props.certificationHandlers.changeCertificateSet}>
        Add certificate
      </button>
      {props.certificationHandlers.certificateSet.map((item) => (
        <CertificateComponent
          props={item}
          delete={props.certificationHandlers.deleteCertificateDetail}
        />
      ))}
      <h1>Project Details</h1>
      <p>title</p>
      <input
        type="text"
        name="title"
        value={props.projectHandlers.project.title}
        onChange={props.projectHandlers.changeProjectDetail}
      />
      <p>Description</p>
      <input
        type="text"
        name="description"
        value={props.projectHandlers.project.description}
        onChange={props.projectHandlers.changeProjectDetail}
      />
      <p>Link</p>
      <input
        type="text"
        name="link"
        value={props.projectHandlers.project.link}
        onChange={props.projectHandlers.changeProjectDetail}
      />
      <button onClick={props.projectHandlers.changeProjectSet}>
        Add Project
      </button>
      {props.projectHandlers.projectSet.map((item) => (
        <ProjectComponent
          props={item}
          delete={props.projectHandlers.deleteProjectDetail}
        />
      ))}
      <h1>Additional Activities</h1>
      <p>Activity</p>
      <input
        type="text"
        value={props.activityHandlers.activity}
        onChange={props.activityHandlers.changeActivity}
      />
      <button onClick={props.activityHandlers.changeActivitySet}>
        Add activity
      </button>
      {props.activityHandlers.activitySet.map((item) => (
        <ActivityComponent
          props={item}
          delete={props.activityHandlers.deleteActivity}
        />
      ))}
    </div>
  );
}

export default Form;
