import { NavLink } from "react-router-dom";
import Search from "../Search";
import ButtonRandomAnime from "./Buttons/ButtonRandomAnime";
import classes from "./Footer.module.scss";
import ButtonHome from "./Buttons/ButtonHome";
import ButtonFavourite from "./Buttons/ButtonFavourite";

const Footer = () => {
  return (
    <div className={classes.header_box}>
      <div className={classes.header_panel_box}>
        <div className={classes.logo_box}>
          {" "}
          <div className={classes.logo}></div>
          <span className={classes.title_media}>MY ANIME</span>
        </div>

        <ButtonRandomAnime />
        <ButtonHome />
        <ButtonFavourite />
      </div>
    </div>
  );
};

export default Footer;
