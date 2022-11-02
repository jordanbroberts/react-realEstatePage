import classes from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { Fragment } from "react";
import NavMenu from "../NavMenu/NavMenu";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img alt="" src={logo} />
        <NavMenu />
      </header>
    </Fragment>
  );
};

export default Header;
