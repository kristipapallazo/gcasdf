import mobileMap from "../../../../../public/assets/map_mobile.png";
import albaniaMap from "../../../../../public/assets/map_alb.png";
import statImg from "../../../../../public/assets/icon5.png";
import chargeVideo from "../../../../../public/assets/video/charge3.mp4";

import classes from "./MapSection.module.css";

const MapSection = () => {
  return (
    <section className={classes.cont}>
      <div className={classes.headerSection}>
        <video
          src={chargeVideo}
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

        <div className={classes.content}></div>
        {/* <div className={classes.overlay}>
          <h1 className={classes.partnerTitle}>
            Become <span>OUR PARTNER</span>
          </h1>
          <p className={classes.partnerDesc}>
            Scale your EV installation business faster with our smart charging
            solutions.
          </p>
        </div>
        <button className={classes.contactButton}>Get in touch</button> */}
      </div>

      <div className={classes.contentSection}>
        <div>
          <h1 className={classes.title}>
            <span className={classes.bluLabel}>POINTS</span> ACROSS ALBANIA
          </h1>
          <div className={classes.equalWidthSection}>
            <div className={classes.leftSection}>
              <p className={classes.desc}>
                Go straight to your EV Charger point by following along on
                Google Maps.
              </p>

              <div className={classes.statsContainer}>
                <div className={classes.statBox}>
                  <p>200+</p>
                  <p>
                    CHARGING <br /> STATIONS
                  </p>
                  <div>
                    <img src={statImg} alt="logo" width="25%" />
                  </div>
                </div>
                <div className={classes.statBox}>
                  <p>30+</p>
                  <p>
                    BUSINESS <br /> PARTNERS
                  </p>
                  <div>
                    <img src={statImg} alt="logo" width="25%" />
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.rightSection}>
              <img
                src={mobileMap}
                alt="Phone Map"
                className={classes.mobileMap}
              />
            </div>
          </div>
        </div>
        <div>
          {/* sec */}
          <img
            src={albaniaMap}
            alt="Albania Map"
            className={classes.albaniaMap}
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
