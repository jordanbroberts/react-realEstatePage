import styles from "./Footer.module.css";

import footerImage1 from "../../assets/footer1.png";
import footerImage2 from "../../assets/footer2.png";
import footerLogo from "../../assets/footer-icon.svg";
import facebook from "../../assets/Facebook.svg";
import twitter from "../../assets/Twitter.svg";
import youtube from "../../assets/YouTube.svg";

const Footer = () => {
  return (
    <section className={styles.footerSection}>
      <div className={styles.footerInnerDiv}>
        <div className={styles.footerImageDiv}>
          <img src={footerImage1} alt="" />
          <img src={footerImage2} alt="" />
        </div>
        <div className={styles.footerLinksDiv1}>
          <p>
            Browse: <a href="#home"> Home </a>|
            <a href="#residential"> Residential For Sale [5] </a> |
            <a href="#calc"> Calculators </a> |
            <a href="#company"> Company Profile </a>|
            <a href="#agent"> Agent Search </a>|
            <a href="#contact"> Contact Us </a>|
            <a href="#websitemap"> Website Map </a>|<a href="#links"> Links </a>
            |<a href="#privacy"> Privacy Policy </a>
          </p>
        </div>
        <div className={styles.footerLinksDiv2}>
          <p>
            <a href="#residentialsale">Residential For Sale [54]: </a>
            <a href="amanzimtoti"> Amanzimtoti [12] </a>|
            <a href="#athlone"> Athlone Park [3] </a>|
            <a href="doonside">Doonside [6]</a>|
            <a href="#warner"> Warner Beach [11] </a>|
            <a href="#winifreds"> St Winifreds [4] </a>|
            <a href="#tolet"> Residential To Let [54]: </a>
            <a href="#amanzitoti"> Amanzimtoti [12] </a>|
            <a href="#athlone"> Athlone Park [3] </a>|
            <a href="#doonside"> Doonside [6] </a>|
            <a href="#warner"> Warner Beach [11] </a>|
            <a href="#winifreds"> St Winifreds [4] </a>|
          </p>
        </div>
        <div className={styles.footerBottomDiv}>
          <div className={styles.footerCompanyNameDiv}>
            <img src={footerLogo} alt="" />
            <div className={styles.footerCompanyInnerDiv}>
              <p>Website Powered by Prop Data Copyright © 2022 Name</p>
            </div>
          </div>
          <div className={styles.footerSocialsDiv}>
            <a href="#facebook">
              <img src={facebook} alt="" />
            </a>
            <a href="#twitter">
              <img src={twitter} alt="" />
            </a>
            <a href="#youtube">
              <img src={youtube} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
