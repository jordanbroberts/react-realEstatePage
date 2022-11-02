import { Fragment } from "react";
import MobileNav from "./MobileNav";
import styles from "./NavMenu.module.css";

const NavMenu = () => {
  return (
    <Fragment>
      <nav className={styles.navContainer}>
        <a href="#home"> HOME </a>
        <a href="#property"> PROPERTY SEARCH </a>
        <a href="#tools"> TOOLS</a>
        <a href="#about"> ABOUT </a>
        <a href="#contact"> CONTACT </a>
      </nav>
      <MobileNav />
    </Fragment>
  );
};

export default NavMenu;
