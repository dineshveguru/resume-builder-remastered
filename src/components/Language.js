import Level from "./Level";
import "../styles/resume.css";

function Language(props) {
  return (
    <div className="language--container">
      <p>{props.languageName}</p>
      <div className="level--container">
        <Level />
        <Level />
        <Level />
        <Level />
        <Level />
      </div>
    </div>
  );
}

export default Language;
