import React from "react";

// react-bootstrap
import { Button } from "react-bootstrap";

import styles from "./Download.module.scss";

const Description = ({ img }) => (
  <div className={styles.download}>
    <div className={styles.mainText}>
      Standard, {img.width} x {img.height}
    </div>
    <div className={styles.subText}>JPG, Size: 5.41 MB, 300dpi</div>
    <Button href={img.src} variant="outline-success" size="sm" download>
      Download
    </Button>
  </div>
);

export default Description;
