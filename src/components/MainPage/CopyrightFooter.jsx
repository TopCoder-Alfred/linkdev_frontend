// import Logo from "../../assets/icons/large_logo.svg";
import {
  Footer,
  FooterBackground,
  LogoAndName,
  Logo,
  WebName,
  Copyright,
  CopyrightInfo,
  CopyrightLogo,
} from "./CopyrightFooter.style";
import background from "../../assets/icons/footer_background.svg";
import logo from "../../assets/icons/footer_logo.svg";
import name from "../../assets/icons/name_with_shadow.svg";
import circle from "../../assets/icons/copyright_circle.svg";
const CopyrightFooter = () => {
  return (
    <Footer>
      <FooterBackground src={background} alt="Background" />
      <LogoAndName>
        <Logo src={logo} alt="Logo" />
        <WebName src={name} alt="Website name" />
      </LogoAndName>
      <Copyright>
        <CopyrightInfo>
          Copyright{" "}
          <CopyrightLogo src={circle} alt="Copyright Circle Outlined" />
          2022 LinkDev all right reserved.
        </CopyrightInfo>
      </Copyright>
    </Footer>
  );
};

export default CopyrightFooter;
