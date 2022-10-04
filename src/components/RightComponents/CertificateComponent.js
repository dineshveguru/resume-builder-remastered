function CertificateComponent(props) {
  return (
    <div>
      <p>{props.props.CertificateDetail.title}</p>
      <p>{props.props.CertificateDetail.issuingOrganization}</p>
      <i
        class="fa-solid fa-xmark"
        onClick={() => {
          props.delete(props.props.id);
        }}
      ></i>
    </div>
  );
}

export default CertificateComponent;
