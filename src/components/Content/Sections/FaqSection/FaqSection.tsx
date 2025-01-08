import classes from "./FaqSection.module.css";
import chargeImg from "../../../../../public/assets/charge_img.png";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { FC } from "react";

const ArrowIcon = () => {
  return (
    <span className={classes.arrowCont}>
      <TbArrowBadgeRightFilled />
      <TbArrowBadgeRightFilled className={classes.secArrow} />
    </span>
  );
};

interface RowSectionProps {
  text: string;
}
const RowSection: FC<RowSectionProps> = ({ text }) => {
  return (
    <div className={classes.row}>
      <span className={classes.rowText}>{text}</span>
      <ArrowIcon />
    </div>
  );
};

const arr: { id: number; text: string }[] = [
  { id: 1, text: "Is the charger suitable for my electric car?" },
];

const FaqSection = () => {
  return (
    <div className={classes.cont}>
      <div>
        <img
          src={chargeImg}
          alt="Electric car charger"
          className={classes.img}
        />
      </div>
      <div className={classes.content}>
        <div>
          <span className={classes.title}>FAQ</span>
        </div>
        <div className={classes.rowCont}>
          §
          {[0, 1, 2, 3, 4].map((id) => (
            <RowSection key={id} text={arr[0].text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
