import React from "react";

// react-bootstrap
import { Jumbotron, Container } from "react-bootstrap";

import styles from "./Banner.module.scss";

const Banner = () => (
  <Jumbotron className={styles.banner}>
    <Container>
      <h1>Gatsby Bootstrap</h1>
      <p className="lead text-muted">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
    </Container>
  </Jumbotron>
);

export default Banner;
