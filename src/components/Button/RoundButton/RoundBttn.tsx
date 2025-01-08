import { FC } from "react";
import classes from "./RoundBttn.module.css";

interface RoundBttnProps {
  children: string;
}
const RoundBttn: FC<RoundBttnProps> = (props) => {
  const { children } = props;
  return <button className={classes["round-bttn"]}>{children}</button>;
};

export default RoundBttn;
