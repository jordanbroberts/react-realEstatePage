import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import styles from "./MobileNav.module.css";
import menuIcon from "../../assets/mobile-menu-icon.png";

const MobileNav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.mobileNavContainer}>
      <button
        className={styles.mainButton}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img src={menuIcon} alt="" />
      </button>
      <Menu
        className={styles.mobileMenu}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>HOME</MenuItem>
        <MenuItem onClick={handleClose}>PROPERTY SEARCH</MenuItem>
        <MenuItem onClick={handleClose}>TOOLS</MenuItem>
        <MenuItem onClick={handleClose}>ABOUT</MenuItem>
        <MenuItem onClick={handleClose}>CONTACT</MenuItem>
      </Menu>
    </div>
  );
};

export default MobileNav;
