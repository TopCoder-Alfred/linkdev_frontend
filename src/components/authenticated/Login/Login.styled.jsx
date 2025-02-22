import styled from "styled-components";

import {
  Display,
  Title,
  UnderlineLinkSpan,
  SubmitButton,
  AgreementContent,
  Container,
  Form,
  Input,
  PasswordArea,
  EyeButton,
  UnderlineLink,
  SubmitButtonTitle,
  Copyright,
} from "../../../../Public.styled";

export const LoginContainer = styled(Container)`
  position: relative;
  @media only screen and (max-width: 1096px) {
    flex-direction: column;
  }
`;

export const LoginForm = styled(Form)`
  @media only screen and (max-width: 430px) {
    padding: 2.4rem 2.4rem 4.9rem 2.4rem;
  }
`;

export const LoginTitle = styled(Title)`
  margin-bottom: 6.7rem;
  @media only screen and (max-width: 1280px) {
    margin-bottom: 6.2rem;
  }
  @media only screen and (max-width: 1096px) {
    margin-top: 8.8rem;
  }
  @media only screen and (max-width: 544px) {
    font-size: 3.4rem;
    line-height: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 431px) {
    font-size: 2.8rem;
  }
  @media only screen and (max-width: 394px) {
    margin-top: 1.3rem;
  }
  @media only screen and (max-width: 381px) {
    font-size: 2.6rem;
  }
`;

export const LoginInput = styled(Input)`
  width: 52vw;
  @media only screen and (max-width: 579px) {
    width: 80vw;
  }
  @media only screen and (max-width: 431px) {
    height: 4.4rem;
    border-radius: 0.8rem;
    placeholder {
      font-size: 1.2rem;
      line-height: 1.6rem;
      margin-top: 1.2rem;
    }
  }
`;

export const LoginPasswordArea = styled(PasswordArea)``;

export const DisplayButton = styled(EyeButton)`
  @media only screen and (max-width: 1280px) {
    width: 2.34rem;
    height: 2.07rem;
    right: 2.63rem;
  }
  @media only screen and (max-width: 431px) {
    width: 1.95rem;
    height: 1.72rem;
    bottom: 1.35rem;
    right: 1.63rem;
  }
`;

export const ForgetPswContainer = styled.div`
  width: 52vw;
  margin-top: 1.5rem;
  margin-bottom: 10.4rem;
  @media only screen and (max-width: 579px) {
    width: 80vw;
    margin-top: 0.8rem;
    margin-bottom: 2.8rem;
  }
`;

export const LoginUnderlineLink = styled(UnderlineLink)``;

export const ForgetPswSpan = styled(UnderlineLinkSpan)`
  color: ${(props) => props.theme.colors.cerulean};
  align-items: flex-start;
  display: flex;
  cursor: pointer;
`;

export const LoginButton = styled(SubmitButton)`
  background: ${(props) => props.theme.colors.pickledBluewood};
  width: 52vw;
  @media only screen and (max-width: 579px) {
    width: 80vw;
  }
  @media only screen and (max-width: 431px) {
    height: 4.4rem;
  }
`;

export const LoginSubmitButtonTitle = styled(SubmitButtonTitle)`
  @media only screen and (max-width: 430px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const LoginAgreementContent = styled(AgreementContent)`
  color: ${(props) => props.theme.colors.cerulean};
  cursor: pointer;
  @media only screen and (max-width: 431px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;

export const CreateOne = styled.div`
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  font-family: "Poppins", sans-serif;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.StormDust};
  width: 51vw;
  margin-top: 1.7rem;
  margin-bottom: 5rem;
  @media only screen and (max-width: 579px) {
    width: 80vw;
    margin-top: 0.8rem;
    margin-bottom: 2.4rem;
  }
  @media only screen and (max-width: 431px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;

export const LoginAgreement = styled.div`
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  font-family: "Poppins", sans-serif;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.StormDust};
  width: 51vw;
  margin-top: 5rem;
  margin-bottom: 5rem;
  @media only screen and (max-width: 579px) {
    width: 80vw;
    margin-top: 2.4rem;
    margin-bottom: none;
  }
  @media only screen and (max-width: 431px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;

export const LoginDisplay = styled(Display)`
  background-color: ${(props) => props.theme.colors.blueLagoon};
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

export const LoginLogoName = styled.img`
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

export const ErrorMsg = styled.p`
  color: #fa4f16;
  font-family: ${(props) => props.theme.fonts[0]}, sans-serif;
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  font-weight: 400;
  line-height: 2rem;
  width: 52vw;
  text-align: start;
  margin-top: 0.6rem;
  @media only screen and (max-width: 579px) {
    width: 80vw;
  }
  @media only screen and (max-width: 431px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;

export const LoginFeature = styled.img`
  position: absolute;
  width: 24vw;
  height: auto;
  bottom: 4rem;
  right: 8rem;
  @media only screen and (max-width: 1280px) {
    width: 26vw;
  }
  @media only screen and (max-width: 1096px) {
    display: none;
  }
`;

export const CopyrightFooter = styled(Copyright)``;
