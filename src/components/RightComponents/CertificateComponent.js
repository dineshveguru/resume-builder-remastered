function CertificateComponent(props) {
  return (
    <div className="skill-component--container">
      <div>
        <p>{props.props.CertificateDetail.title}</p>
        <p>{props.props.CertificateDetail.issuingOrganization}</p>
      </div>
      <div>
        <i
          class="fa-solid fa-xmark"
          onClick={() => {
            props.delete(props.props.id);
          }}
        ></i>
      </div>
    </div>
  );
}

export default CertificateComponent;
