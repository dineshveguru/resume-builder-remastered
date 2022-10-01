function Form(props) {
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
    </div>
  );
}

export default Form;
