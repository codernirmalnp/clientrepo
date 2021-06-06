import PrimaryLogo from "../assets/images/logo.svg";
import SecondaryLogo from "../assets/images/logo-small.svg";
import PrimaryLogoLight from "../assets/images/logo-light.svg";
import SecondaryLogoLight from "../assets/images/logo-small-light.svg";

export const toolBarConfig = {
  primaryLogo: PrimaryLogo,
  secondaryLogo: SecondaryLogo,
  style: "sticky", //option: static, sticky, fixed
  bgColor: "#ffffff",
  textColor: "#555454",
  iconColor: "#4B4A4A",
};

export const sideNavConfig = {
  primaryLogo: PrimaryLogoLight,
  secondaryLogo: SecondaryLogoLight,
  hoverSubMenu: false,
  collapseState: { md: true, lg: false }, //sidemenu default state in medium devices and large devices
  expandOnHover: false, //Expand side nav on hover if side nav is collapsed & hoversubmenu is false
  navigateOnParentClick: false, // Enable this if you want to navigate to first child on parent click

  //Side Nav Styles
  bgColor: "#114172",
  textColor: "#ffffff",
  iconColor: "#ffffff",
  activeColor: "#63BFB0",
  hoverSubmenubg: "#f8f8f8",
};

export const defaultCurrency = {
  name: "Norwegian Krone",
  code: "NOK",
  symbol: "NOK",
  symbolPosition: "after",
};

export const defaultCountry = {
  id: 160,
  name: "Norway",
  code: "NO",
  isdCode: "+47",
};
