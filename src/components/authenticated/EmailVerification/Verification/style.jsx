import styled from "styled-components";
import { Display, Copyright } from "../../../../../Public.styled";

export const Container = styled.div`
  display: flex;
  background: #ffffff;
  user-select: none;
  position: relative;
  @media only screen and (max-width: 1096px) {
    flex-direction: column;
  }
`;

export const VerifyBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: auto;
`;

export const Arrow = styled.img`
  position: absolute;
  top: 9rem;
  left: 9rem;
  cursor: pointer;
  z-index: 1;
  @media only screen and (max-width: 1134px) {
    left: 8rem;
  }
  @media only screen and (max-width: 1096px) {
    top: 18rem;
    left: 6rem;
  }
  @media only screen and (max-width: 431px) {
    width: 1.64rem;
    height: auto;
    top: 16rem;
    left: 2.6rem;
  }
`;

export const VerifyTitle = styled.div`
  font-size: ${(props) => props.theme.fontSizes.extraLarge};
  font-family: "PoppinsBold", sans-serif;
  letter-spacing: -0.008em;
  font-weight: 700;
  line-height: 5rem;
  text-align: center;
  color: #000000;
  @media only screen and (max-width: 1096px) {
    margin-top: 9.6rem;
  }
  @media only screen and (max-width: 650px) {
    font-size: 4rem;
    line-height: 3.4rem;
    margin-bottom: 2.8rem;
    margin-top: 12rem;
  }
  @media only screen and (max-width: 431px) {
    font-size: 2.8rem;
    margin-bottom: 2rem;
    margin-top: 10rem;
  }
  @media only screen and (max-width: 381px) {
    font-size: 2.6rem;
  }
`;

export const VerifySubTitle = styled.div`
  font-family: "PoppinsMedium", sans-serif;
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: 2.4rem;
  text-align: center;
  width: 50vw;
  color: ${(props) => (props.error ? "#FF0000" : "#636260")};
  margin: 4rem 0 3.6rem;
  @media (431px < width <= 1096px) {
    width: 64vw;
  }
  @media only screen and (max-width: 650px) {
    margin-top: 0rem;
  }
  @media only screen and (max-width: 431px) {
    font-size: 1.3rem;
    line-height: 1.8rem;
    margin-bottom: 2rem;
    width: 90vw;
  }
`;

export const InputWraper = styled.div`
  position: relative;
  height: 8.2rem;
  width: 43rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 431px) {
    width: 90vw;
  }
`;

export const InputContent = styled.div`
  position: relative;
  height: 8.2rem;
  width: 8rem;
  margin-right: 3rem;
  &:last-child {
    margin-right: 0;
  }
  @media only screen and (max-width: 431px) {
    margin-right: 0.5rem;
  }
`;

export const InputImg = styled.img`
  position: absolute;
  top: 2.9rem;
  left: 2.9rem;
  transition: 0.1s;
`;

export const Input = styled.input`
  position: relative;
  height: 8rem;
  width: 8rem;
  outline: none;
  background: ${(props) => (props.error ? "" : "#f3f3f3")};
  border-radius: 1rem;
  padding: 2rem 0 2rem 1rem;
  font-size: 6rem;
  font-weight: 500;
  caret-color: #636260;
  // caret-color: transparent;
  text-indent: 2rem;
  border: ${(props) =>
    props.error ? "0.2rem solid #FF0000;" : "0.2rem solid transparent"};
  &:focus {
  }
  @media only screen and (max-width: 431px) {
    height: 5.6rem;
    width: 5.6rem;
    padding: 2rem 0 2rem 0rem;
  }
`;

export const ErrorMsg = styled.span`
  font-family: "PoppinsMedium", sans-serif;
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  text-align: center;
  color: #ff0000;
  position: absolute;
  bottom: -40%;
  left: 50%;
  transform: translateX(-50%);
  @media only screen and (max-width: 431px) {
    font-size: 1.2rem;
    bottom: -5%;
  }
`;

export const Button = styled.button`
  height: 5.5rem;
  width: 42vw;
  border-radius: 6.8rem;
  background: ${(props) => props.theme.colors.bamboo};
  color: white;
  font-weight: 600;
  font-size: 1.8rem;
  font-family: "PoppinsSemiBold", sans-serif;
  text-align: center;
  line-height: 5.5rem;
  margin-top: 7.3rem;
  border: none;
  cursor: ${(props) => (props.disable ? "not-allowed" : "pointer")};
  padding-top: ${(props) => (props.isLoading ? "0.48rem" : "")};
  @media only screen and (max-width: 1281px) {
    margin-top: 5rem;
  }
  @media only screen and (max-width: 1096px) {
    width: 64vw;
  }
  @media only screen and (max-width: 650px) {
    width: 76vw;
  }
  @media only screen and (max-width: 431px) {
    width: 90vw;
    margin-top: 0.8rem;
    height: 4rem;
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const Resend = styled.span`
  position: relative;
  color: ${(props) => props.theme.colors.bamboo};
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  font-family: "Poppins", sans-serif;
  text-align: center;
  cursor: pointer;
  margin-top: 1.6rem;
  text-decoration: underline;
  @media only screen and (max-width: 431px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
    margin-top: 0.8rem;
  }
`;

export const SuccessResendAlert = styled.p`
  position: absolute;
  bottom: -200%;
  left: 50%;
  transform: translateX(-50%);
  height: 3rem;
  width: 34rem;
  line-height: 3rem;
  text-align: center;
  font-family: ${(props) => props.theme.fonts[0]}, sans-serif;
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  color: ${(props) => props.theme.colors.StormDust};
  background-color: #ececec;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
  border-radius: 1.6rem;
  animation: buttons 0.3s linear;
  @media only screen and (max-width: 431px) {
    width: 26.5rem;
    height: 2.4rem;
    font-size: 1.1rem;
    line-height: 1.3rem;
  }
`;

export const Loading = styled.img`
  cursor: pointer;
  animation: rotate 2s linear infinite;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const VerifyDisplay = styled(Display)`
  background-color: ${(props) => props.theme.colors.bamboo};
  border-radius: 5rem 0rem 0rem 5rem;
  width: 25vw;
  @media only screen and (max-width: 1096px) {
    width: 100vw;
    height: 13rem;
    border-radius: 0rem 0rem 0.8rem 0.8rem;
    order: -1;
  }
  @media only screen and (max-width: 431px) {
    height: 12rem;
  }
`;

export const VerifyLogoName = styled.img`
  width: 12vw;
  position: absolute;
  content: "";
  top: 4rem;
  right: 4rem;
  cursor: pointer;
  @media only screen and (max-width: 1096px) {
    width: 16rem;
    top: 6rem;
    left: 4rem;
  }
  @media only screen and (max-width: 834px) {
    left: 2.4rem;
  }
  @media only screen and (max-width: 431px) {
    width: 14rem;
  }
`;

export const VerifyBanner = styled.img`
  position: absolute;
  width: 24vw;
  height: auto;
  bottom: 12rem;
  right: 8rem;
  @media only screen and (max-width: 1280px) {
    width: 26vw;
  }
  @media only screen and (max-width: 1096px) {
    display: none;
  }
`;

export const CopyrightFooter = styled(Copyright)`
  @media only screen and (max-width: 1096px) {
    margin-top: 12rem;
  }
`;
