import "../styles/leftComponent.css";

function LanguageComponent(props) {
  return (
    <div>
      <div className="skill-component--container">
        <p>{props.languageItem.languageName}</p>
        <i
          class="fa-solid fa-xmark"
          onClick={() => {
            props.deleteLanguage(props.languageItem.id);
          }}
        ></i>
      </div>
    </div>
  );
}

export default LanguageComponent;
