import styles from "./FeaturedPropertiesSlide.module.css";

import slideImage1 from "../../assets/property1.png";
import listingIcon1 from "../../assets/Listing-Icons.svg";
import listingIcon2 from "../../assets/Listing-Icons-1.svg";
import listingIcon3 from "../../assets/Listing-Icons-2.svg";
import agentImage from "../../assets/agent.png";
import soleMandate from "../../assets/sole-mandate.png";

const FeaturedPropertiesSlide = () => {
  return (
    <div className={styles.featuredPropertiesCard}>
      <div className={styles.featuredPropertiesImageDiv}>
        <img src={slideImage1} alt="" />
        <img className={styles.soleMandateImg} src={soleMandate} alt="" />
      </div>
      <div className={styles.featuredPropertiesTextDiv}>
        <div className={styles.featuredPropertiesTopDiv}>
          <h5 className="h5">R1,100,00</h5>
          <p> 4 Bedroom house for sale in Stellenbosch </p>
          <div className={styles.featuredIconsDiv}>
            <div className={styles.featuredIconsContainerDiv}>
              <img src={listingIcon1} alt="" className={styles.featuredIcon} />
              <p>
                <b>4</b>
              </p>
            </div>
            <div className={styles.featuredIconsContainerDiv}>
              <img src={listingIcon2} alt="" className={styles.featuredIcon} />
              <p>
                <b>4</b>
              </p>
            </div>
            <div className={styles.featuredIconsContainerDiv}>
              <img src={listingIcon3} alt="" className={styles.featuredIcon} />
              <p>
                <b>4</b>
              </p>
            </div>
          </div>
          <p className={styles.descriptionText}>
            This stylish single-level Cowies Hill home showcases high-quality
            finishes, an easy indoor/outdoor...
          </p>
        </div>
        <div className={styles.featuredPropertiesBottomDiv}>
          <div className={styles.agentDetailsContainer}>
            <img src={agentImage} alt="" />
            <div className={styles.agentDetailsTextContainer}>
              <p>
                <b>Michelle Ruffelo</b>
              </p>
              <a href="#contact"> View contact number </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPropertiesSlide;
