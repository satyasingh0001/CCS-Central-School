import Seo from "../components/Seo";
import styles from "./Academics.module.css";

export default function Academics() {
  return (
    <div className={styles.box}>
      <Seo
        title="Academics | CCS Central School"
        description="Explore academic curriculum, smart classrooms, and learning resources at CCS Central School."
      />

      <h1>Academics</h1>
      <ul>
        <li>Primary Education</li>
        <li>Secondary Education</li>
        <li>Smart Classes</li>
      </ul>
    </div>
  );
}
