import "../../styles/rightComponent.css";
import CertificateTag from "./CertificateTag";

function Certificate(props) {
  return (
    <div className="education--section">
      <div className="heading--container">
        <h1>Certifications</h1>
      </div>
      {props.certificateSet.map((item) => (
        <div>
          <CertificateTag detail={item} />
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Certificate;
