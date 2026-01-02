import Seo from "../components/Seo";
import styles from "./Admission.module.css";

export default function Admission() {
  return (
    <div className={styles.formBox}>
      <Seo
        title="Admission | CCS Central School"
        description="Admission details, eligibility, and application process for CCS Central School."
      />

      <h1>Admission</h1>
      <p>Apply now for the upcoming academic session.</p>
    </div>
  );
}
