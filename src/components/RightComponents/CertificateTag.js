import "../../styles/rightComponent.css";

function CertificateTag(props) {
  return (
    <div className="education-tag--container">
      <div className={`education--tag`}>
        <div>
          <p className="college-section">
            {props.detail.CertificateDetail.title}
          </p>
          <p>{props.detail.CertificateDetail.issuingOrganization}</p>
        </div>
      </div>
    </div>
  );
}

export default CertificateTag;
