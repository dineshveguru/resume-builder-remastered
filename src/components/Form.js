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
import "../styles/form.css";

function Form(props) {
  const [to, setTo] = React.useState(new Date());
  const [from, setFrom] = React.useState(new Date());
  props.educationHandlers.educationDetails.from = from;
  props.educationHandlers.educationDetails.to = to;
  props.experienceHandlers.experience.from = from;
  props.experienceHandlers.experience.to = to;
  const skills = props.skillSet.map((skill) => (
    <SkillComponent
      skill={skill}
      deleteSkill={props.deleteSkill}
      className="component"
    />
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
      <div className="container">
        <h1 className="container--heading">
          <i class="fa-solid fa-image heading-icon"></i>Upload Image
        </h1>
        <input type="file" accept="image/*" onChange={props.changeImageLink} />
      </div>
      <div className="container">
        <h1 className="container--heading">
          <i class="fa-solid fa-address-card heading-icon"></i>Basic Details
        </h1>
        <div className="input-element">
          <p className="container--message">Name</p>
          <input
            type="text"
            placeholder="enter name"
            value={props.details.name}
            name="name"
            onChange={props.changeDetails}
            className="input"
          />
        </div>
        <div className="input-element">
          <p className="container--message">Address</p>
          <input
            type="text"
            placeholder="enter address"
            value={props.details.address}
            name="address"
            onChange={props.changeDetails}
            className="input"
          />
        </div>
        <div className="input-element">
          <p className="container--message">Contact Number</p>
          <input
            type="text"
            placeholder="enter contact"
            value={props.details.contact}
            name="contact"
            onChange={props.changeDetails}
            className="input"
          />
        </div>
        <div className="input-element">
          <p className="container--message">E-mail</p>
          <input
            type="text"
            placeholder="enter mail"
            value={props.details.mail}
            name="mail"
            onChange={props.changeDetails}
            className="input"
          />
        </div>
        <div className="input-element">
          <p className="container--message">LinkedIn Profile Link</p>
          <input
            type="text"
            placeholder="enter linkenIn profile"
            value={props.details.linkedinProfile}
            name="linkedinProfile"
            onChange={props.changeDetails}
            className="input"
          />
        </div>
        <div className="input-element">
          <p className="container--message">GitHub Profile Link</p>
          <input
            type="text"
            placeholder="enter github link"
            value={props.details.githubLink}
            name="githubLink"
            onChange={props.changeDetails}
            className="input"
          />
        </div>
        <div className="input-element">
          <p className="container--message">skills</p>
          <div className="button-container">
            <input
              type="text"
              onChange={props.changeSkill}
              value={props.skill}
              className="input"
            />
            <button onClick={props.changeSkillSet} className="button">
              Add skill
            </button>
          </div>
          <div className="component-container">{skills}</div>
        </div>
        <div className="input-element">
          <p className="container--message">Technologies</p>
          <div className="button-container">
            <input
              type="text"
              onChange={props.changeTech}
              value={props.tech}
              className="input"
            />
            <button onClick={props.changeTechSet} className="button">
              Add skill
            </button>
          </div>
          <div className="component-container">{techs}</div>
        </div>
        <div className="input-element">
          <p className="container--message">Languages</p>
          <div className="button-container">
            <input
              type="text"
              onChange={props.languageHandlers.changeLanguage}
              value={props.languageHandlers.language}
              className="input"
            />
            <button
              onClick={props.languageHandlers.changeLanguageSet}
              className="button"
            >
              Add language
            </button>
          </div>
          <div className="component-container">{languages}</div>
        </div>
        <div className="input-element">
          <p className="container--message">Interests</p>
          <div className="button-container">
            <input
              type="text"
              onChange={props.interestHandlers.changeInterest}
              value={props.interestHandlers.interest}
              className="input"
            />
            <button
              onClick={props.interestHandlers.changeInterestSet}
              className="button"
            >
              Add interest
            </button>
          </div>
          <div className="component-container">{interests}</div>
        </div>
      </div>
      <div className="container">
        <h1 className="container--heading">
          <i class="fa-solid fa-user heading-icon"></i>About section
        </h1>
        <textarea
          onChange={props.aboutHandlers.changeAbout}
          className="input"
        />
      </div>
      <div className="container">
        <h1 className="container--heading">
          <i class="fa-solid fa-book-open heading-icon"></i>Education section
        </h1>
        <p className="container--message">Course</p>
        <input
          name="course"
          type="text"
          value={props.educationHandlers.educationDetails.course}
          onChange={props.educationHandlers.changeEdcationDetail}
          className="input"
        />
        <p className="container--message">College</p>
        <input
          type="text"
          name="college"
          value={props.educationHandlers.educationDetails.college}
          onChange={props.educationHandlers.changeEdcationDetail}
          className="input"
        />
        <p className="container--message">CGPA</p>
        <input
          name="cgpa"
          type="text"
          value={props.educationHandlers.educationDetails.cgpa}
          onChange={props.educationHandlers.changeEdcationDetail}
          className="input"
        />
        <p className="container--message">From Date</p>
        <DatePicker
          onChange={(date) => setFrom(date)}
          value={from}
          name="from"
        />
        <p className="container--message">To Date</p>
        <div className="button-container">
          <DatePicker onChange={(date) => setTo(date)} value={to} name="to" />
          <button
            onClick={props.educationHandlers.changeEducationSet}
            className="button"
          >
            Add details
          </button>
        </div>
        <div className="component-container">
          {props.educationHandlers.educationSet.map((item) => (
            <EducationComponent
              props={item}
              delete={props.educationHandlers.deleteEducationDetail}
            />
          ))}
        </div>
      </div>
      <div className="container">
        <h1 className="container--heading">
          <i class="fa-solid fa-building heading-icon"></i>Experience Details
        </h1>
        <div className="input-element">
          <p className="container--message">title</p>
          <input
            type="text"
            name="title"
            value={props.experienceHandlers.experience.title}
            onChange={props.experienceHandlers.changeExperienceDetail}
            className="input"
          />
        </div>
        <div className="input-element">
          <p className="container--message">Description</p>
          <input
            type="text"
            name="description"
            value={props.experienceHandlers.experience.description}
            onChange={props.experienceHandlers.changeExperienceDetail}
            className="input"
          />
        </div>
        <p>From Date</p>
        <DatePicker
          onChange={(date) => setFrom(date)}
          value={from}
          name="from"
        />
        <p>To Date</p>
        <div className="button-container">
          <DatePicker onChange={(date) => setTo(date)} value={to} name="to" />
          <button
            onClick={props.experienceHandlers.changeExperienceSet}
            className="button"
          >
            Add details
          </button>
        </div>
        <div className="component-container">
          {props.experienceHandlers.experienceSet.map((item) => (
            <ExperienceComponent
              props={item}
              delete={props.experienceHandlers.deleteExperienceDetail}
            />
          ))}
        </div>
      </div>
      <div className="container">
        <h1 className="container--heading">
          <i class="fa-solid fa-certificate heading-icon"></i>Certification
          Details
        </h1>
        <p className="container--message">Add title</p>
        <input
          type="text"
          name="title"
          value={props.certificationHandlers.certification.title}
          onChange={props.certificationHandlers.changeCertificationDetail}
          className="input"
        />
        <p className="container--message">Issuing Organization</p>
        <div className="button-container">
          <input
            type="text"
            name="issuingOrganization"
            value={
              props.certificationHandlers.certification.issuingOrganization
            }
            onChange={props.certificationHandlers.changeCertificationDetail}
            className="input"
          />
          <button
            onClick={props.certificationHandlers.changeCertificateSet}
            className="button"
          >
            Add certificate
          </button>
        </div>
        <div className="component-container">
          {props.certificationHandlers.certificateSet.map((item) => (
            <CertificateComponent
              props={item}
              delete={props.certificationHandlers.deleteCertificateDetail}
            />
          ))}
        </div>
      </div>
      <div className="container">
        <h1 className="container--heading">
          <i class="fa-solid fa-cubes heading-icon"></i>Project Details
        </h1>
        <div className="input-element">
          <p className="container--message">title</p>
          <input
            type="text"
            name="title"
            value={props.projectHandlers.project.title}
            onChange={props.projectHandlers.changeProjectDetail}
            className="input"
          />
        </div>
        <div className="input-element">
          <p className="container--message">Description</p>
          <input
            type="text"
            name="description"
            value={props.projectHandlers.project.description}
            onChange={props.projectHandlers.changeProjectDetail}
            className="input"
          />
        </div>
        <p className="container--message">Link</p>
        <div className="button-container">
          <input
            type="text"
            name="link"
            value={props.projectHandlers.project.link}
            onChange={props.projectHandlers.changeProjectDetail}
            className="input"
          />
          <button
            onClick={props.projectHandlers.changeProjectSet}
            className="button"
          >
            Add Project
          </button>
        </div>
        <div className="component-container">
          {props.projectHandlers.projectSet.map((item) => (
            <ProjectComponent
              props={item}
              delete={props.projectHandlers.deleteProjectDetail}
            />
          ))}
        </div>
      </div>
      <div className="container">
        <h1 className="container--heading">
          <i class="fa-solid fa-chart-line heading-icon"></i>Additional
          Activities
        </h1>
        <p className="container--message">Activity</p>
        <div className="button-container">
          <input
            type="text"
            value={props.activityHandlers.activity}
            onChange={props.activityHandlers.changeActivity}
            className="input"
          />
          <button
            onClick={props.activityHandlers.changeActivitySet}
            className="button"
          >
            Add activity
          </button>
        </div>
        <div className="component-container">
          {props.activityHandlers.activitySet.map((item) => (
            <ActivityComponent
              props={item}
              delete={props.activityHandlers.deleteActivity}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Form;
