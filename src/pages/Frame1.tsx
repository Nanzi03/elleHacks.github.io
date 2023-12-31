import { FunctionComponent } from "react";
import styles from "./Frame1.module.css";

const Frame1: FunctionComponent = () => {
  return (
    <div className={styles.frame}>
      <img
        className={styles.googleMapsImage}
        alt=""
        src="/google-maps-image@2x.png"
      />
    </div>
  );
};

export default Frame1;
