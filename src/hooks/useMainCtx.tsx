import { useContext } from "react";
import { MainCtx } from "../context/MainCtx";

const useMainCtx = () => {
  const value = useContext(MainCtx);
  return value;
};

export default useMainCtx;
