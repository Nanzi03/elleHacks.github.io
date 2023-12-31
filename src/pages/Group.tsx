import { FunctionComponent } from "react";
import styles from "./Group.module.css";

const Group: FunctionComponent = () => {
  return (
    <div className={styles.simplificationParent}>
      <img
        className={styles.simplificationIcon}
        alt=""
        src="/simplification@2x.png"
      />
    </div>
  );
};

export default Group;
