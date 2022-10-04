function ExperienceTag(props) {
  return (
    <div className="education-tag--container">
      <div className="education--tag">
        <div>
          <p>{props.item.experienceDetail.title}</p>
          <p className="description--section">
            {props.item.experienceDetail.description}
          </p>
        </div>
        <div>
          <p>
            {props.item.experienceDetail.to.toString().substring(4, 15)} -{" "}
            {props.item.experienceDetail.from.toString().substring(4, 15)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceTag;
