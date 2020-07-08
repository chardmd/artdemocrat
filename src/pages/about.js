import React from "react";

// react-strap
import { Container } from "react-bootstrap";

import SEO from "../components/SEO";
import Layout from "../layouts";

import styles from "./About.module.scss";

const About = ({ location }) => (
  <Layout location={location}>
    <SEO seoTitle="About" />
    <Container>
      <div className={styles.about}>
        <h1>About</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </Container>
  </Layout>
);

export default About;
