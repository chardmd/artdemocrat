import React from "react";

import SEO from "../../components/SEO";
import Page from "../../components/Page";
import Layout from "../../layouts";

import styles from "./about-template.module.scss";

const About = ({ location }) => (
  <Layout location={location}>
    <SEO seoTitle="About" />
    <Page title="About">
      <div className={styles.about}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </Page>
  </Layout>
);

export default About;
