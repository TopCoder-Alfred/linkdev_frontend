// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/icons/linkdev_logo.svg";
import name from "../../assets/icons/linkdev_logo_name_black.svg";
import defaultPhoto from "../../assets/icons/user_photo.svg";
// import axios from "../../components/utils/request/index";
// import setAuthToken from "../utils/setAuthToken";
import {
  Container,
  MobileStep,
  MobileLogo,
  MobileUserPhoto,
  NavbarWrapper,
  Navigation,
  LogoWrapper,
  Logo,
  LogoContent,
  NavigationTextWrapper,
  NavigationText,
  UserPhoto,
} from "./Navbar.style";

const Navbar = ({ navStatus, setNavStatus, avatarUrl }) => {
  const navSelection = ["Links", "Appearance", "Settings"];
  const navigate = useNavigate();
  // const [avatarUrl, setAvatarUrl] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const fetchedUserInfo = async () => {
  //   if (localStorage.token) {
  //     setAuthToken(localStorage.token);
  //   }
  //   const res = await axios.get("/api/users/user");
  //   if (!_.isEmpty(res.data.avatar.url)) {
  //     setLoading(!loading);
  //     setAvatarUrl(res.data.avatar.url);
  //   }
  // };
  // useEffect(() => {
  //   fetchedUserInfo();
  // }, [loading]);
  return (
    <Container>
      <MobileStep>
        <MobileLogo src={name} alt="namelogo" onClick={() => navigate("/")} />
        <MobileUserPhoto src={avatarUrl || defaultPhoto} alt="user photo" />
      </MobileStep>
      <NavbarWrapper>
        <Navigation>
          <LogoWrapper>
            <Logo data={logo} alt="logo" onClick={() => navigate("/")} />
            <LogoContent onClick={() => navigate("/")}>LinkDev</LogoContent>
          </LogoWrapper>
          <NavigationTextWrapper>
            {navSelection.map((item, index) => {
              return (
                <NavigationText
                  key={index}
                  active={navStatus === item}
                  onClick={() => {
                    setNavStatus(item);
                  }}
                >
                  {item}
                </NavigationText>
              );
            })}
          </NavigationTextWrapper>
        </Navigation>
        <UserPhoto
          src={avatarUrl || defaultPhoto}
          alt="user photo"
          onClick={() => navigate("/account")}
        />
      </NavbarWrapper>
    </Container>
  );
};

export default Navbar;
