import { FunctionComponent } from "react";
import styles from "./Frame.module.css";

const Frame: FunctionComponent = () => {
  return (
    <div className={styles.frame}>
      <b className={styles.register}>Register</b>
      <div className={styles.email}>
        <b className={styles.questionsContactUs}>Questions? Contact us at</b>
        <span className={styles.span}>{` `}</span>
        <a
          className={styles.infoellehackscom}
          href="mailto:info@ellehacks.com"
          target="_blank"
        >
          <span className={styles.span}>
            <span className={styles.infoellehackscom2}>info@ellehacks.com</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Frame;
