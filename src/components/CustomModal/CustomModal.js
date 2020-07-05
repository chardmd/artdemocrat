import React from "react";
import Close from "react-icons/lib/md/close";
import { navigate } from "gatsby";

import styles from "./CustomModal.module.scss";

const CustomModal = ({ closeTo, children }) => (
  <div
    onClick={() => navigate(closeTo, { state: { noScroll: true } })}
    className={styles.modal}
  >
    <div className={styles.wrapperBody}>{children}</div>
    <Close
      onClick={() => navigate(closeTo, { state: { noScroll: true } })}
      className={styles.closeButton}
    />
  </div>
);

export default CustomModal;
