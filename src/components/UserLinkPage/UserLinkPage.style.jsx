import styled from "styled-components";
import { Container } from "../../../Public.styled";

export const ShareContainer = styled(Container)`
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: relative;
  user-select: none;
  overflow: auto;
`;

export const Header = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 4rem;
  @media only screen and (max-width: 744px) {
    margin-top: 4.4rem;
  }
  @media only screen and (max-width: 431px) {
    margin: 4.8rem 2.4rem 3.7rem;
  }
`;

export const Logo = styled.img`
  width: 12vw;
  height: auto;
  cursor: pointer;
  @media only screen and (max-width: 1096px) {
    width: 16rem;
  }
  @media only screen and (max-width: 744px) {
    width: 18rem;
  }
  @media only screen and (max-width: 431px) {
    width: 11.1rem;
  }
`;

export const ShareButton = styled.button`
  align-self: flex-end;
  width: 18rem;
  height: 6.4rem;
  border: 0.05rem solid rgba(0, 0, 0, 0.3);
  border-radius: ${(props) => props.theme.borderRadius.webBorderRadius};
  background-color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #ececec;
  }
  @media only screen and (max-width: 743px) {
    display: none;
  }
`;

export const ShareButtonMobile = styled.img`
  position: relative;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  align-self: center;
  @media only screen and (min-width: 743px) {
    display: none;
  }
  @media only screen and (max-width: 431px) {
    width: 6.4rem;
    height: 2.8rem;
  }
`;

export const ShareStyle = styled.span`
  font-size: 2.2rem;
  line-height: 100%;
  color: ${(props) => props.theme.colors.StormDust};
  font-family: "Poppins", sans-serif;
  @media only screen and (max-width: 431px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;

export const LinkCopied = styled.span`
  position: absolute;
  top: 10rem;
  right: 0rem;
  padding: 1.5rem 3.5rem;
  border-radius: 1.6rem;
  background-color: rgba(0, 0, 0, 0.15);
  color: ${(props) => props.theme.colors.StormDust};
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  line-height: 2.4rem;
  margin-right: 1.5rem;
  opacity: 0;
  animation: hidden 2s;
  @keyframes hidden {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @media only screen and (max-width: 1797px) {
    top: 9rem;
  }
  @media only screen and (max-width: 1500px) {
    top: 8rem;
  }
  @media only screen and (max-width: 743px) {
    top: 1.8rem;
    right: 4rem;
    padding: 0.2rem 1.5rem;
  }
  @media only screen and (max-width: 431px) {
    top: 0.8rem;
    right: 4rem;
    padding: 0.1rem 1.1rem;
  }
  @media only screen and (max-width: 320px) {
    top: 0.8rem;
    right: 3.3rem;
    padding: 0.1rem 0.3rem;
    font-size: 1.1rem;
  }
`;

export const Profile = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

export const ProfilePhoto = styled.img`
  background-color: ${(props) => props.theme.colors.seaBuckthorn};
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  @media only screen and (max-width: 431px) {
    width: 7.2rem;
    height: 7.2rem;
  }
`;

export const ProfileName = styled.h2`
  margin-top: 2.8rem;
  font-family: "PoppinsSemiBold", sans-serif;
  font-size: 3.6rem;
  line-height: 100%;
  color: ${(props) => props.theme.colors.StormDust};
  @media only screen and (max-width: 743px) {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
  @media only screen and (max-width: 431px) {
    font-size: 1.7rem;
    line-height: 2.2rem;
    margin-top: 1.6rem;
  }
`;

export const ProfileTitle = styled.span`
  margin-top: 2.4rem;
  margin-bottom: 6.8rem;
  font-size: ${(props) => props.theme.fontSizes.large};
  font-family: "PoppinsMedium", sans-serif;
  line-height: 2rem;
  color: rgba(99, 98, 96, 0.5);
  @media only screen and (max-width: 743px) {
    margin-top: 2rem;
    margin-bottom: 3.6rem;
    font-size: 2rem;
  }
  @media only screen and (max-width: 431px) {
    font-size: 1.3rem;
    line-height: 1.8rem;
    margin-top: 0.4rem;
    margin-bottom: 2rem;
  }
`;

export const LeftArrowButton = styled.img`
  position: absolute;
  height: 2.7rem;
  top: 49.3rem;
  left: -25.5rem;
  cursor: pointer;
  @media only screen and (max-width: 780px) {
    top: 49rem;
    left: -30vw;
  }
  @media only screen and (max-width: 743px) {
    top: 43.5rem;
  }
  @media only screen and (max-width: 583px) {
    left: -25vw;
  }
  @media only screen and (max-width: 431px) {
    display: none;
  }
`;

export const RightArrowButton = styled.img`
  position: absolute;
  height: 2.7rem;
  top: 49.3rem;
  right: -25.5rem;
  cursor: pointer;
  @media only screen and (max-width: 780px) {
    top: 49rem;
    right: -30vw;
  }
  @media only screen and (max-width: 743px) {
    top: 43.5rem;
  }
  @media only screen and (max-width: 583px) {
    right: -25vw;
  }
  @media only screen and (max-width: 431px) {
    display: none;
  }
`;

export const SlideNav = styled.div`
  position: absolute;
  z-index: 99;
  @media only screen and (min-width: 431px) {
    display: none;
  }
  @media only screen and (max-width: 431px) {
    top: 49rem;
  }
  @media only screen and (max-width: 340px) {
    top: 48rem;
  }
`;

export const SlideNavItemOne = styled.a`
  display: inline-block;
  width: 0.6rem;
  height: 0.6rem;
  background-color: #d9d9d9;
  border-radius: 50%;
  margin-right: 0.5rem;
  cursor: pointer;
  &:active {
    background-color: #cb5d00;
  }
`;

export const SlideNavItemTwo = styled(SlideNavItemOne)``;

export const SlideNavItemThree = styled.a`
  display: inline-block;
  width: 0.6rem;
  height: 0.6rem;
  background-color: #d9d9d9;
  border-radius: 50%;
  cursor: pointer;
  &:active {
    background-color: #cb5d00;
  }
`;

export const ProfileLink = styled.a`
  background-color: #ffa62b;
  max-width: 50rem;
  width: 100%;
  height: 12rem;
  border-radius: ${(props) => props.theme.borderRadius.mobileBorderRadius};
  margin-bottom: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.25) inset;
    background-color: #ee951b;
  }
  @media only screen and (max-width: 743px) {
    width: 90vw;
    border-radius: 8rem;
    margin-bottom: 1.5rem;
  }
  @media only screen and (max-width: 640px) {
    width: 75vw;
  }
  @media only screen and (max-width: 431px) {
    width: 90vw;
    height: 9.6rem;
    border-radius: 8rem;
    margin-bottom: 1.2rem;
  }
`;

export const LinkName = styled.span`
  width: 42.2rem;
  font-family: "PoppinsMedium", sans-serif;
  text-align: center;
  font-weight: 500;
  line-height: 100%;
  font-size: 2.2rem;
  color: #ffffff;
  @media only screen and (max-width: 744px) {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
  @media only screen and (max-width: 431px) {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

export const Error = styled.p`
  color: #fa4f16;
  font-family: ${(props) => props.theme.fonts[0]}, sans-serif;
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  font-weight: 400;
  line-height: 2rem;
  align-self: center;
  margin-top: 1.2rem;
`;
