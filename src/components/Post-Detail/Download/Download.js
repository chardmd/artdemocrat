import React from "react";

// react-bootstrap
import { Button } from "react-bootstrap";

import styles from "./Download.module.scss";

const Description = ({ imgSrc }) => (
  <div className={styles.download}>
    <div className={styles.mainText}>Standard, 2286 x 2756px</div>
    <div className={styles.subText}>JPG, Size: 5.41 MB, 300dpi</div>
    <Button href={imgSrc} variant="outline-success" size="sm" download>
      Download
    </Button>
  </div>
);

export default Description;
