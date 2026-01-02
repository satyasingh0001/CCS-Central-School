import Seo from "../components/Seo";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.box}>
      <Seo
        title="About Us | CCS Central School"
        description="Learn about CCS Central School, our history, mission, and commitment to quality education."
      />

      <h1>About CCS Central School</h1>
      <p>
        CCS Central School is dedicated to holistic education and student
        development.
      </p>
    </div>
  );
}
