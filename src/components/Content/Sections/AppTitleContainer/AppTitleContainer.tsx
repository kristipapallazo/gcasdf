import RoundBttn from "../../../Button/RoundButton/RoundBttn";
import classes from "./AppTitleContainer.module.css";
import mainVideo from "../../../../assets/video/main_video.mp4";

const AppTitleContainer = () => {
  return (
    <div className={classes.cont}>
      <video
        src={mainVideo}
        className={classes.video}
        width="100%"
        height="100%"
        // controls
        autoPlay
        loop
        muted
      >
        {/* <source src="movie.mp4" type="video/mp4">
        <source src="movie.ogg" type="video/ogg"> */}
      </video>
      <div className={classes.text}>
        <h1 className={classes.title}>
          Future-proof charging for <br /> the electric revolution
        </h1>
        <h3 className={classes["sub-title"]}>efficent, reliable, everywhere</h3>
        <RoundBttn>Discover more</RoundBttn>
      </div>
    </div>
  );
};

export default AppTitleContainer;
