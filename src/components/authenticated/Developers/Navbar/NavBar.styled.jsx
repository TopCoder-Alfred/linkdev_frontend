import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Navigation Bar
export const NavBarContainer = styled.div`
  margin-top: 7.8rem;
  width: 75vw;
  height: 8rem;
  background: rgba(255, 255, 255, 0.97);
  border: 0.12rem solid #808080;
  backdrop-filter: blur(2.5px);
  border-radius: 6.8rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  @media only screen and (max-width: 1680px) {
    width: 78vw;
  }
  @media only screen and (max-width: 1280px) {
    width: 82vw;
  }
  @media only screen and (max-width: 768px) {
    width: 86vw;
  }
  @media only screen and (max-width: 680px) {
    margin-top: 1.3rem;
    width: 88vw;
    min-width: 32.7rem;
    height: 4.4rem;
    border-radius: 5rem;
  }
`;

export const NavBarLeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavBarLogo = styled.object`
  width: 6.9rem;
  height: 6.9rem;
  display: block;
  margin-left: 1.68rem;
  margin-right: 1.742rem;
  cursor: pointer;
  filter: drop-shadow(0rem 0.3rem 0.5rem rgba(0, 0, 0, 0.25));
  @media only screen and (max-width: 680px) {
    width: 3.6rem;
    height: 3.2rem;
    margin: 0.6rem;
  }
`;

export const NavBarName = styled.img`
  width: 12rem;
  height: 3.2rem;
  display: block;
  margin-right: 1.8rem;
  margin-top: 0.5rem;
  cursor: pointer;
  @media only screen and (max-width: 980px) {
    display: none;
  }
`;

export const DevLinkPositionContainer = styled.div`
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.2rem;
  margin-right: 1rem;
  @media only screen and (max-width: 680px) {
    height: 3.8rem;
    margin-right: 1.2rem;
    margin-left: 0.7rem;
  }
`;

export const DevLinkContainer = styled.div`
  width: 12rem;
  height: 4rem;
  border-radius: 6.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.2rem;
  :hover {
    background-color: #e0e0e0;
  }
  @media only screen and (max-width: 680px) {
    width: 6.2rem;
    height: 2.2rem;
    border-radius: 2.38rem;
    margin-top: 0.9rem;
  }
`;

export const DevLinkUnderline = styled.div`
  width: 9rem;
  height: 0.4rem;
  border-radius: 0.2rem;
  background: #16697a;
  display: none;
  margin-top: 0.9rem;
  @media only screen and (max-width: 680px) {
    width: 6.1rem;
    margin-top: 0.2rem;
  }
`;

export const DevelopersNav = styled(NavLink)`
  font-family: "PoppinsMedium", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 100%;
  color: #2a3d4e;
  @media only screen and (max-width: 680px) {
    font-size: 1.1rem;
    line-height: 1.3rem;
  }
`;

export const MyLinksNavPositionContainer = styled.div`
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.2rem;
  @media only screen and (max-width: 680px) {
    height: 3.8rem;
    margin-left: 0.8rem;
  }
`;

export const MyLinksNavContainer = styled.div`
  width: 8.7rem;
  height: 4rem;
  border-radius: 6.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.2rem;
  :hover {
    background-color: #e0e0e0;
  }
  @media only screen and (max-width: 680px) {
    width: 5rem;
    height: 2.2rem;
    border-radius: 2.4rem;
    margin-top: 0.9rem;
  }
`;

export const MyLinksNav = styled(NavLink)`
  font-family: "PoppinsMedium", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 100%;
  color: #2a3d4e;
  @media only screen and (max-width: 680px) {
    font-size: 1.1rem;
    line-height: 1.3rem;
  }
`;

export const NavBarRightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoginAndLogoutContainer = styled.div`
  margin-right: 0.7rem;
  height: 5.6rem;
  width: 11rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;
  border-radius: 6.8rem;
  :hover {
    background-color: #e0e0e0;
  }
  @media only screen and (max-width: 680px) {
    margin-right: 0.4rem;
    height: 3.2rem;
    width: 4.8rem;
    border-radius: 5rem;
  }
`;

export const LoginAndLogoutNav = styled(NavLink)`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 100%;
  color: #2a3d4e;
  @media only screen and (max-width: 680px) {
    font-size: 1.1rem;
    line-height: 1.3rem;
  }
`;

export const SignUpAndMyAccountContainer = styled.div`
  margin-right: 1.2rem;
  height: 5.6rem;
  width: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2a3d4e;
  border-radius: 6.8rem;
  :hover {
    background-color: #3a5064;
  }
  @media only screen and (max-width: 680px) {
    margin-right: 0.6rem;
    height: 3.2rem;
    width: 7.2rem;
    border-radius: 5rem;
  }
`;

export const SignUpAndMyAccountNav = styled(NavLink)`
  font-family: "PoppinsSemiBold", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 100%;
  color: #ffffff;
  @media only screen and (max-width: 680px) {
    font-size: 1.1rem;
    line-height: 1.3rem;
  }
`;
