import { FC } from "react";
import classes from "./Card.module.css";

// interface CardFaceProps {
//   card: CardMeta;
// }

// const CardFace: FC<CardFaceProps> = ({ card }) => {
//   const { title, desc } = card;
//   return (
//     <div className={classes.front}>
//       <span>logo</span>
//       {/* <span>line</span> */}
//       <hr />
//       <span className={classes.title}>{title}</span>
//       <span className={classes.desc}>{desc}</span>
//     </div>
//   );
// };
// const BackCard = () => {
//   return <div className={classes.back}>back</div>;
// };

interface CardProps {
  card: CardMeta;
}

const Card: FC<CardProps> = ({ card }) => {
  const { title, desc, img } = card;

  /* TODO: define properly alt text */
  return (
    <div className={classes.card}>
      <img src={img} alt="logo" height="70px" className={classes.img} />
      <hr className={classes.hr} />
      <h3 className={classes.title}>{title}</h3>
      <span className={classes.desc}>{desc}</span>
    </div>
  );
};

// const Card: FC<CardProps> = ({ card }) => {
//   return (
//     <div className={classes.card}>
//       <div className={classes["card-inner"]}>
//         <CardFace card={card} />
//         <BackCard />
//       </div>
//     </div>
//   );
// };

export default Card;
