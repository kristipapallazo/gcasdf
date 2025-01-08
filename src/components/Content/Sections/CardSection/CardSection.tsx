import Card from "./Card/Card";
import icon1 from "../../../../assets/icon1.png";
import icon2 from "../../../../assets/icon2.png";
import icon3 from "../../../../assets/icon3.png";
import icon4 from "../../../../assets/icon4.png";

import classes from "./CardSection.module.css";

const CARD_META_ARR: CardMeta[] = [
  {
    id: 1,
    title: "Innovative Technology",
    desc: `Offer charging rates lower than
traditional fuels with tiered pricing
structures for regular and casual
users.`,
    img: icon1,
  },
  {
    id: 2,
    title: "Aftersales Support",
    desc: `Our team provides 24/7 support after
any purchase made with us.`,
    img: icon2,
  },
  {
    id: 3,
    title: "Sustainability",
    desc: `In collaboration with our partners,
we are enabling a low-carbon
society, promoting social progress
for a net-zero future.`,
    img: icon3,
  },
  {
    id: 4,
    title: "Cultivating Excellence",
    desc: `We foster an inclusive environment
that embraces smart individuals from
diverse backgrounds.`,
    img: icon4,
  },
];

const CardSection = () => {
  const cards = CARD_META_ARR.map((card) => <Card key={card.id} card={card} />);
  return <div className={classes.cont}>{cards}</div>;
};

export default CardSection;
