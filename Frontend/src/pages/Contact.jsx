import Seo from "../components/Seo";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.box}>
      <Seo
        title="Contact Us | CCS Central School"
        description="Contact CCS Central School for admissions, queries, and support."
      />

      <h1>Contact Us</h1>
      <p>Email: ccscentralschool02@gmail.com</p>
      <p>Mobile No.: 9474634188</p>
    </div>
  );
}
