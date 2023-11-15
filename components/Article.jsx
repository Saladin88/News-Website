import React from "react";
import styles from "@/styles/Article.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

export default function Article() {
  return (
    <div className={styles.card_container}>
      <FontAwesomeIcon icon={faBookmark} />
      <div className={styles.img_container}>
        <img src="placeholder.png" alt="picture" />
      </div>
      <div className={styles.bottom_container}>
        <h3>Titre Article</h3>
        <p>Description</p>
        <p>Content</p>
      </div>
    </div>
  );
}
