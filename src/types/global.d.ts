type Lang = "AL" | "GB_ENG";

type SetStateFn<T> = React.Dispatch<React.SetStateAction<T>>;
interface CardMeta {
  id: nmber;
  title: string;
  desc: string;
  img?: string;
}
interface FooterItem {
  key: string;
  label: string;
  children?: FooterItem[];
}
