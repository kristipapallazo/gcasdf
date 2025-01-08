import Footer from "../Footer/Footer";
import AppTitleContainer from "./Sections/AppTitleContainer/AppTitleContainer";
import CardSection from "./Sections/CardSection/CardSection";
import MapSection from "./Sections/MapSection/MapSection";
import FaqSection from "./Sections/FaqSection/FaqSection";

import classes from "./Content.module.css";

const Content = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <AppTitleContainer />
        <CardSection />
        <MapSection />
        <FaqSection />
      </div>
      <Footer />
    </div>
  );
};

export default Content;
