import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import FlagIcon from "../../Icon/FlagIcon";
import useMainCtx from "../../../hooks/useMainCtx";

const items: MenuProps["items"] = [
  {
    key: "AL",
    icon: <FlagIcon />,
  },
  {
    key: "GB_ENG",
    icon: <FlagIcon code="GB_ENG" />,
  },
];

const FlagDropdown = () => {
  const { lang, setLang } = useMainCtx();
  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        selectedKeys: [lang],
        onClick: ({ key }) => {
          setLang(key as Lang);
        },
      }}
    >
      <span style={{ cursor: "pointer" }}>
        <FlagIcon code={lang} />
      </span>
    </Dropdown>
  );
};

export default FlagDropdown;
