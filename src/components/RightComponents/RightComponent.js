import About from "./About";
import "../../styles/rightComponent.css";

function RightComponent(props) {
  return (
    <div className="right--container">
      <About about={props.about} />
    </div>
  );
}

export default RightComponent;
