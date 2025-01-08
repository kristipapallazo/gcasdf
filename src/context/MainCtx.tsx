import { createContext, FC, useState } from "react";

interface DefaultValue {
  lang: Lang;
  setLang: SetStateFn<Lang>;
  isMobile: boolean;
  setIsMobile: SetStateFn<boolean>;
}

const DEFAUL_VALUE: DefaultValue = {
  lang: "AL",
  setLang: (prev) => prev,
  isMobile: false,
  setIsMobile: (prev) => prev,
};

export const MainCtx = createContext(DEFAUL_VALUE);

interface MainCtxProviderProps {
  children: React.ReactNode;
}

const MainCtxProvider: FC<MainCtxProviderProps> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("AL");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  return (
    <MainCtx.Provider value={{ lang, setLang, isMobile, setIsMobile }}>
      {children}
    </MainCtx.Provider>
  );
};

export default MainCtxProvider;
