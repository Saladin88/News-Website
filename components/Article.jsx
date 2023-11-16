import React from "react";
import styles from "@/styles/Article.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export default function Article(props) {
  const { author, title, description, originUrl, origin } = props;
  return (
    <div className={styles.card_container}>
      <div className={styles.favicon}>
        <FontAwesomeIcon icon={faBookmark} className={styles.bookmark} />
        <p>Theme</p>
        <FontAwesomeIcon icon={faEyeSlash} className={styles.eye} />
      </div>
      <div className={styles.img_container}>
        <img src="placeholder.png" alt="picture" />
      </div>
      <div className={styles.bottom_container}>
        <div className={styles.article_top}>
          <p>By: {author} </p>
          <p>Published at: </p>
        </div>
        <div className={styles.article_main}>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Content</p>
        </div>
        <div className={styles.article_bottom}>
          <a href={originUrl}>{origin}</a>
        </div>
      </div>
    </div>
  );
}
