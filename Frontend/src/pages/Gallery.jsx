import { useState } from "react";
import styles from "./Gallery.module.css";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className={styles.container}>
      <h1>Photo Gallery</h1>

      <div className={styles.grid}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="school"
            onClick={() => setSelected(img)}
          />
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div className={styles.modal} onClick={() => setSelected(null)}>
          <img src={selected} alt="large" />
        </div>
      )}
    </div>
  );
}
