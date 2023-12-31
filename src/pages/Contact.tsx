import { FunctionComponent } from "react";
import styles from "./Contact.module.css";

const Contact: FunctionComponent = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactChild} />
      <img className={styles.contactItem} alt="" src="/rectangle-49@2x.png" />
      <b className={styles.home}>Home</b>
      <b className={styles.about}>About</b>
      <b className={styles.register}>Register</b>
      <b className={styles.sponsors}>Sponsors</b>
      <b className={styles.faq}>FAQ</b>
      <b className={styles.contact1}>Contact</b>
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
      <b className={styles.location}>Location</b>
      <img
        className={styles.googleMapsImage}
        alt=""
        src="/google-maps-image@2x.png"
      />
      <div className={styles.thePondRdContainer}>
        <p className={styles.thePondRd}>
          88 The Pond Rd, North York, ON M3J 2S5
        </p>
      </div>
      <b className={styles.victorPhillipDahdaleh}>
        Victor Phillip Dahdaleh Building
      </b>
      <img
        className={styles.socialMediaButtons}
        alt=""
        src="/social-media-buttons@2x.png"
      />
      <img className={styles.contactInner} alt="" src="/group-151@2x.png" />
    </div>
  );
};

export default Contact;
