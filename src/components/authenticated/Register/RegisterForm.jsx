import styled from "styled-components";
import {
  Container,
  Display,
  Form,
  Title,
  Information,
  Input,
  AgreementContent,
  SubmitButton,
  EyeButton,
  SubmitButtonTitle,
  UnderlineLinkSpan,
  Copyright,
} from "../../../../Public.styled";

export const RegisterContainer = styled(Container)`
  position: relative;
  @media only screen and (max-width: 1096px) {
    flex-direction: column;
  }
`;

export const DisplayArea = styled(Display)`
  background-color: ${(props) => props.theme.colors.seaBuckthorn};
  width: 25vw;
  @media only screen and (max-width: 1096px) {
    width: 100vw;
    height: 13rem;
    border-radius: 0rem 0rem 0.8rem 0.8rem;
  }
  @media only screen and (max-width: 431px) {
    height: 12rem;
  }
`;

export const RegisterLogoName = styled.img`
  width: 12vw;
  position: absolute;
  content: "";
  top: 4rem;
  left: 4rem;
  cursor: pointer;
  @media only screen and (max-width: 1096px) {
    width: 18vw;
    top: 6rem;
  }
  @media only screen and (max-width: 834px) {
    width: 16rem;
    left: 2.4rem;
  }
  @media only screen and (max-width: 430px) {
    width: 14rem;
  }
`;

export const RegisterFeature = styled.img`
  position: absolute;
  width: 28vw;
  height: auto;
  bottom: 6.4rem;
  left: 4rem;
  @media only screen and (max-width: 1681px) {
    bottom: 8rem;
    left: 1rem;
  }
  @media only screen and (max-width: 1280px) {
    bottom: 10rem;
    left: 1.4rem;
  }
  @media only screen and (max-width: 1096px) {
    display: none;
  }
`;

export const RegisterForm = styled(Form)`
  @media only screen and (max-width: 430px) {
    padding: 2.4rem 2.4rem 4.9rem 2.4rem;
  }
`;

export const RegisterTitle = styled(Title)`
  @media only screen and (max-width: 1096px) {
    margin-top: 6rem;
  }
  @media only screen and (max-width: 528px) {
    font-size: 3.4rem;
    line-height: 4rem;
    margin-top: 3.2rem;
  }
  @media only screen and (max-width: 406px) {
    font-size: 3rem;
  }
  @media only screen and (max-width: 394px) {
    margin-top: 1.3rem;
  }
`;

export const RegisterInfo = styled(Information)`
  width: 56vw;
  margin-left: none;
  margin-right: none;
  color: ${(props) => props.theme.colors.StormDust};
  @media only screen and (max-width: 579px) {
    width: 80vw;
  }
  @media only screen and (max-width: 745px) {
    margin-top: 2.6rem;
    margin-bottom: 2.8rem;
  }
  @media only screen and (max-width: 431px) {
    font-size: 1.3rem;
    line-height: 1.8rem;
    margin-top: 1.4rem;
    margin-bottom: 1.4rem;
  }
`;

export const RegisterInput = styled(Input)`
  width: 52vw;
  &::placeholder {
    color: ${(props) => props.theme.colors.StormDust};
  }
  &:focus::placeholder {
    color: rgba(99, 98, 96, 0.3);
  }
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

export const DisplayButton = styled(EyeButton)`
  position: absolute;
  bottom: 1.4rem;
  right: 2.5rem;
  cursor: pointer;
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

export const PasswordArea = styled.div`
  position: relative;
`;

export const Error = styled.p`
  color: #fa4f16;
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
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

export const RegisterAgreement = styled.div`
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  font-family: "Poppins", sans-serif;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.StormDust};
  width: 51vw;
  margin-top: 5rem;
  margin-bottom: 5rem;
  color: #636260;
  @media only screen and (max-width: 579px) {
    width: 80vw;
  }
  @media only screen and (max-width: 431px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
    margin-top: 2.8rem;
    margin-bottom: 3rem;
  }
`;

export const RegisterAgreementContent = styled(AgreementContent)`
  cursor: pointer;
  @media only screen and (max-width: 431px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;
export const CreateButton = styled(SubmitButton)`
  width: 52vw;
  @media only screen and (max-width: 579px) {
    width: 80vw;
  }
  @media only screen and (max-width: 431px) {
    height: 4.4rem;
  }
`;
export const ButtonTitle = styled(SubmitButtonTitle)`
  @media only screen and (max-width: 430px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const SignIn = styled(UnderlineLinkSpan)`
  @media only screen and (max-width: 431px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;

export const SignInLink = styled.span`
  margin-top: 1.5rem;
  cursor: pointer;
  @media only screen and (max-width: 431px) {
    margin-top: 0.8rem;
  }
`;

export const CopyrightFooter = styled(Copyright)``;
