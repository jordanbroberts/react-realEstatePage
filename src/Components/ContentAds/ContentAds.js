import styles from "./ContentAds.module.css";
import contentImage1 from "../../assets/CTA1.png";
import contentImage2 from "../../assets/CTA2.png";
import contentImage3 from "../../assets/CTA3.png";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContentAds = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.threeColumnDiv}>
        <div data-aos="fade-up" className={styles.singleColumnDiv}>
          <img src={contentImage1} alt="" />
          <div className={styles.columnTextContainer}>
            <a href="#mortage">
              <h5 className="h5">
                <b>Mortgage Calculator</b>
              </h5>
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className={styles.singleColumnDiv}
        >
          <img src={contentImage2} alt="" />
          <div className={styles.columnTextContainer}>
            <a href="#contactus">
              <h5 className="h5">
                <b>Contact Us</b>
              </h5>
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className={styles.singleColumnDiv}
        >
          <img src={contentImage3} alt="" />
          <div className={styles.columnTextContainer}>
            <a href="#facebook">
              <h5 className="h5">
                <b>Follow us on Facebook </b>
              </h5>
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentAds;
