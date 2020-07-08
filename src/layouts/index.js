/* eslint-disable no-confusing-arrow */
import React from "react";
import { ModalRoutingContext } from "gatsby-plugin-modal-routing";

// Load the css for the Lora font.
import "typeface-lora";

import CustomModal from "../components/Modal";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import styles from "./Layout.module.scss";

const Layout = ({ children, location }) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) =>
      modal ? (
        <CustomModal location={location} closeTo={closeTo}>
          {children}
        </CustomModal>
      ) : (
        <>
          <Navigation />
          <main className={styles.main} role="main">
            {children}
          </main>
          <Footer />
        </>
      )
    }
  </ModalRoutingContext.Consumer>
);

export default Layout;
