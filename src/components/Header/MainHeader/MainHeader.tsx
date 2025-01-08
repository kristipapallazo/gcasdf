import RoundBttn from "../../Button/RoundButton/RoundBttn";
import FlagDropdown from "../../Dropdown/FlagDropdown/FlagDropdown";
// import mainLogo from "../../../assets/main_logo.jpg";

import classes from "./MainHeader.module.css";
const MainLogo = () => {
  return <img src="/src/assets/main_logo.jpg" alt="logo" height="80px" />;
};

const PAGE_KEYS: string[] = ["Home", "Locations", "Products", "About us"];
const PagesBttnMenu = () => {
  const items = PAGE_KEYS.map((key) => <span key={key}>{key}</span>);
  return (
    <div className={classes["pages-bttn-cont"]}>
      <ul className={classes["pages-bttn-menu"]}>{items}</ul>
    </div>
  );
};

const MainHeader = () => {
  return (
    <div className={classes.header}>
      <MainLogo />
      <PagesBttnMenu />
      <FlagDropdown />
      <RoundBttn>Contact us</RoundBttn>
    </div>
  );
};

export default MainHeader;
