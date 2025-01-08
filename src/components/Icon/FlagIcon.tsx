import { FC } from "react";
import Flag, { FlagProps } from "react-world-flags";

const FlagIcon: FC<FlagProps> = (props) => {
  const { code = "AL", width = 30 } = props;
  return <Flag code={code} width={width} />;
};

export default FlagIcon;
