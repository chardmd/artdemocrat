import React from "react";

// react-bootstrap
import { Button } from "react-bootstrap";

import styles from "./Download.module.scss";

const Description = ({ originalImage }) => {
  const {
    ext,
    prettySize,
    childImageSharp: { original },
  } = originalImage;
  return (
    <div className={styles.download}>
      <div className={styles.mainText}>
        Standard, {original.width} x {original.height}
      </div>
      <div className={styles.subText}>
        {ext}, Size: {prettySize}, 300dpi
      </div>
      <Button href={original.src} variant="outline-success" size="sm" download>
        Download
      </Button>
    </div>
  );
};

export default Description;
