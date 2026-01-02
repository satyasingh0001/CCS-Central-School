import Seo from "../components/Seo";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Seo
        title="Home | CCS Central School"
        description="Welcome to CCS Central School. A place of excellence, discipline, and quality education."
      />

      <h1>Welcome to CCS Central School</h1>
      <p>A place of excellence, discipline, and quality education.</p>
    </div>
  );
}
