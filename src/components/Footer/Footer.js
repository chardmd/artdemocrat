import React from "react";

import useSiteMetadata from "../../hooks/use-site-metadata";

import styles from "./Footer.module.scss";

const Footer = () => {
  const siteMetadata = useSiteMetadata();
  return (
    <footer className={styles.footer}>
      <p>{siteMetadata.copyright}</p>
    </footer>
  );
};

export default Footer;
