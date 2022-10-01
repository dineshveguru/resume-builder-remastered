import "../../styles/leftComponent.css";

function LeftComponent(props) {
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
    </div>
  );
}

export default LeftComponent;
