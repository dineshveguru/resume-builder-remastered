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
    </div>
  );
}

export default LeftComponent;
