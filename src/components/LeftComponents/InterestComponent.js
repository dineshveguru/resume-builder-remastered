function InterestComponent(props) {
  return (
    <div className="skill-component--container">
      <p>{props.interestItem.interestName}</p>
      <i
        class="fa-solid fa-xmark"
        onClick={() => {
          props.deleteInterest(props.interestItem.id);
        }}
      ></i>
    </div>
  );
}

export default InterestComponent;
