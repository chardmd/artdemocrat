/* eslint-disable no-confusing-arrow */
import React from "react";
import { PageRenderer } from "gatsby";

// Load the css for the Lora font.
import "typeface-lora";

// import CustomModal from "../components/CustomModal";
import CustomModal from "../components/Modal";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import styles from "./Layout.module.scss";

let windowWidth;

const Layout = ({ children, location, isModal }) => {
  let isModalFlag = false;
  if (!windowWidth && typeof window !== "undefined") {
    windowWidth = window.innerWidth;
  }
  if (isModal && windowWidth > 750) {
    isModalFlag = true;
  }

  if (isModalFlag && CustomModal) {
    return (
      <React.Fragment>
        <PageRenderer location={{ pathname: "/" }} />
        <CustomModal isOpen={true} location={location}>
          {children}
        </CustomModal>
      </React.Fragment>
    );
  }

  return (
    <>
      <Navigation />
      <main className={styles.main} role="main">
        {children}
      </main>
      <Footer />
    </>
  );
};
export default Layout;
