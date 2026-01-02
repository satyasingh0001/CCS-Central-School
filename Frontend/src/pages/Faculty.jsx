import Seo from "../components/Seo";
import styles from "./Faculty.module.css";

export default function Faculty() {
  return (
    <div className={styles.box}>
      <Seo
        title="Faculty | CCS Central School"
        description="Meet our experienced and dedicated faculty members at CCS Central School."
      />

      <h1>Our Faculty</h1>
    </div>
  );
}
