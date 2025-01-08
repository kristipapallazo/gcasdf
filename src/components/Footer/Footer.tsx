import inIcon from "../../assets/sm_in_icon.png";
import instaIcon from "../../assets/sm_insta_icon.png";
import youtubeIcon from "../../assets/sm_youtube_icon.png";
import mainLogo from "../../assets/main_logo.jpg";

import classes from "./Footer.module.css";

// const arr: string[] = ["insta", "fb"];

// const SocialLinksCont = () => {
//   const items = arr.map((k) => {
//     return <span key={k}>{k}</span>;
//   });

//   return <div>{items}</div>;
// };

// const footerItemsArr: FooterItem[] = [
//   {
//     key: "links",
//     label: "Quick links",
//     children: [
//       { key: "commitment", label: "Our commitment" },
//       { key: "contact", label: "Contact us" },
//       { key: "relations", label: "Investor Relations" },
//     ],
//   },
//   {
//     key: "explore",
//     label: "Explore",
//     children: [
//       { key: "ev_charges", label: "EV Charges" },
//       { key: "locations", label: "Locations" },
//     ],
//   },
//   {
//     key: "company",
//     label: "Company",
//     children: [
//       { key: "about_us", label: "About Us" },
//       { key: "privacy_olicy", label: "Privacy Policy" },
//     ],
//   },
//   {
//     key: "more",
//     label: "More on us",
//   },
// ];

const linksArr: string[] = [
  "Contact",
  "Partner with us",
  "Terms & conditions",
  "Our mission",
];

const Footer = () => {
  const links = linksArr.map((link) => {
    return <span>{link}</span>;
  });

  return (
    <div className={classes.footer}>
      <div className={classes.logoCont}>
        <img src={mainLogo} alt="logo" className={classes.logo} />
      </div>
      <div className={classes.linksCont}>{links}</div>
      <div className={classes.cp}>
        <div className={classes.socialMediaCont}>
          <img src={inIcon} alt="logo" className={classes.smIcon} />
          <img src={youtubeIcon} alt="logo" className={classes.smIcon} />
          <img src={instaIcon} alt="logo" className={classes.smIcon} />
        </div>
        <span>EV Charger @ 2024</span>
      </div>
    </div>
  );
};

export default Footer;
