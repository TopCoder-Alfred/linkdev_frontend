import logo from "../../../../assets/icons/linkdev_logo.svg";
import logoName from "../../../../assets/icons/linkdev_name_black.svg";
import {
  NavBarContainer,
  NavBarLeftContainer,
  NavBarRightContainer,
  DevLinkPositionContainer,
  DevLinkUnderline,
  DevLinkContainer,
  NavBarLogo,
  NavBarName,
  DevelopersNav,
  MyLinksNavPositionContainer,
  MyLinksNavContainer,
  MyLinksNav,
  LoginAndLogoutContainer,
  LoginAndLogoutNav,
  SignUpAndMyAccountContainer,
  SignUpAndMyAccountNav,
} from "./NavBar.styled";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NavBar.css";

const NavBar = ({ developerPage }) => {
  // if autoLogin is true, Navbar shows Logout and Myaccount
  // if autoLogin is false, Navbar shows Logoin and Sign up
  const [autoLogin, setAutoLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("autoLogin");
    if (isAuthenticated) {
      setAutoLogin(true);
    }
  }, []);

  const onLogout = () => {
    localStorage.removeItem("autoLogin");
    setAutoLogin(false);
  };

  return (
    <NavBarContainer>
      <NavBarLeftContainer>
        <NavBarLogo onClick={() => navigate("/")} data={logo}></NavBarLogo>
        <NavBarName onClick={() => navigate("/")} src={logoName}></NavBarName>
        <DevLinkPositionContainer>
          <DevLinkContainer onClick={() => navigate("/developers")}>
            <DevelopersNav>Developers</DevelopersNav>
          </DevLinkContainer>
          <DevLinkUnderline
            className={developerPage ? "currentPageEffect" : null}
          />
        </DevLinkPositionContainer>
        <MyLinksNavPositionContainer>
          <MyLinksNavContainer>
            <MyLinksNav exact="true" to="/dashboard">
              My Links
            </MyLinksNav>
          </MyLinksNavContainer>
        </MyLinksNavPositionContainer>
      </NavBarLeftContainer>
      <NavBarRightContainer>
        {autoLogin ? (
          <LoginAndLogoutContainer onClick={() => onLogout()}>
            <LoginAndLogoutNav>Log out</LoginAndLogoutNav>
          </LoginAndLogoutContainer>
        ) : (
          <LoginAndLogoutContainer onClick={() => navigate("/login")}>
            <LoginAndLogoutNav>Log in</LoginAndLogoutNav>
          </LoginAndLogoutContainer>
        )}
        {autoLogin ? (
          <SignUpAndMyAccountContainer onClick={() => navigate("/account")}>
            <SignUpAndMyAccountNav>My account</SignUpAndMyAccountNav>
          </SignUpAndMyAccountContainer>
        ) : (
          <SignUpAndMyAccountContainer onClick={() => navigate("/register")}>
            <SignUpAndMyAccountNav>Sign up</SignUpAndMyAccountNav>
          </SignUpAndMyAccountContainer>
        )}
      </NavBarRightContainer>
    </NavBarContainer>
  );
};

export default NavBar;
