import "../../styles/leftComponent.css";
import Interest from "./Interest";
import Language from "./Language.js";
import SkillAdd from "./SkillAdd";
import TechAdd from "./TechAdd";

function LeftComponent(props) {
  const skills = props.skillSet.map((skill) => (
    <SkillAdd skillName={skill.skill} />
  ));
  const techs = props.techSet.map((tech) => (
    <TechAdd techName={tech.techName} />
  ));
  const languages = props.languageSet.map((item) => (
    <Language languageName={item.languageName} />
  ));
  const interests = props.interestSet.map((item) => (
    <Interest interestName={item.interestName} />
  ));
  return (
    <div className="left--container">
      <div
        className="image--container"
        style={{
          backgroundImage: "url(/test.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <h1 className="person--name">{props.details.name}</h1>
      <div className="details--section">
        <div className="details-section--container">
          <i class="fa-solid fa-location-dot details-icon"></i>
          <p>{props.details.address}</p>
        </div>
        <div className="details-section--container">
          <i class="fa-solid fa-phone details-icon"></i>
          <p>{props.details.contact}</p>
        </div>
        <div className="details-section--container">
          <i class="fa-solid fa-envelope details-icon"></i>
          <p>{props.details.mail}</p>
        </div>
        <div className="details-section--container">
          <i class="fa-brands fa-linkedin details-icon"></i>
          <p>{props.details.linkedinProfile}</p>
        </div>
        <div className="details-section--container">
          <i class="fa-brands fa-github details-icon"></i>
          <p>{props.details.githubLink}</p>
        </div>
      </div>
      <div className="skills-section">
        <h1>Skills</h1>
        <div className="skill-tag--container">{skills}</div>
      </div>

      <div className="skills-section">
        <h1>Tools/Technologies</h1>
        <div className="skill-tag--container">{techs}</div>
      </div>
      <div className="skills-section">
        <h1>Languages</h1>
        {languages}
      </div>
      <div className="skills-section">
        <h1>Interests</h1>
        <div className="skill-tag--container">{interests}</div>
      </div>
    </div>
  );
}

export default LeftComponent;
