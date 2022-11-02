import { Fragment } from "react";
import styles from "./SearchElement.module.css";
import searchIcon from "../../assets/Magnify.svg";

const SearchElement = () => {
  return (
    <Fragment>
      <div className={styles.searchOuterContainer}>
        <div className={styles.searchContainer}>
          <div className={styles.searchInputsDiv}>
            <div className={styles.searchInputsSelects}>
              <select>
                <option value="buy"> Buy </option>
                <option value="sell"> Sell </option>
              </select>
              <select>
                <option value="residential"> Residential </option>
                <option value="other"> Other </option>
              </select>
            </div>
            <input
              className={styles.searchInput}
              placeholder="Type Area or Suburb Name"
            />
          </div>
          <div className={styles.searchButtonsDiv}>
            <button className={styles.buttonTransparent}>
              <span># </span> Web Ref. Number Search
            </button>
            <div className={styles.searchButtonsRightDiv}>
              <div className={styles.moreSearchOptionsDiv}>
                <p className={styles.numberOfProperties}>
                  <b>124 Properties</b>
                </p>
                <select
                  className={`${styles.buttonTransparent} ${styles.moreSearchOptions}`}
                >
                  <option value="more-options"> More Search Options </option>
                  <option value="other"> Other Search Options </option>
                </select>
              </div>
              <button className={styles.mainButton}>
                <img src={searchIcon} alt="" /> Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SearchElement;
