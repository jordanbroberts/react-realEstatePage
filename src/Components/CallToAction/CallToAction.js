import styles from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <section className={styles.topSection}>
      <h3 className={styles.h3}>Lorem ipsum dolor sit amet</h3>
      <p className={styles.callToActionText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu
        scelerisque dui. Proin porta consectetur euismod. Duis pharetra dapibus
        blandit. Aenean lobortis orci a egestas eleifend. Pellentesque faucibus
        mi et interdum molestie. Quisque in diam felis. Ut vitae elementum leo.
      </p>
      <button className={styles.mainButton}>Read More</button>
    </section>
  );
};

export default CallToAction;
