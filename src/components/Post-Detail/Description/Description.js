import React from "react";
import { Link } from "gatsby";
import styles from "./Description.module.scss";

const Description = ({ authorName, category, description, artistSlug }) => (
  <div className={styles.description}>
    <div className={styles.wrapper}>
      <Link to={artistSlug}>
        <strong className={styles.authorName}>{authorName}</strong>
      </Link>
      <strong className={styles.category}>{category}</strong>
    </div>
    <div>{description}</div>
  </div>
);

export default Description;
