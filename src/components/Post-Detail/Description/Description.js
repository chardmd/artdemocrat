import React from "react";
import { Link } from "gatsby";

// react-bootstrap
import { Button } from "react-bootstrap";

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
    <div className={styles.download}>
      <div className={styles.mainText}>Standard, 2286 x 2756px</div>
      <div className={styles.subText}>JPG, Size: 5.41 MB, 300dpi</div>
      <Button variant="outline-success" size="sm">
        Download
      </Button>
    </div>
  </div>
);

export default Description;
