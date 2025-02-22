import styled from "styled-components";

import {
  Form,
  Title,
  SubmitButton,
  PasswordArea,
  Input,
  SubmitButtonTitle,
  Copyright,
} from "../../../../Public.styled";

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
`;

export const ResetForm = styled(Form)`
  justify-content: center;
  height: 100vh;
`;

export const ResetLogoName = styled.img`
  width: 12vw;
  position: absolute;
  content: "";
  top: 4rem;
  right: 4rem;
  cursor: pointer;
  @media only screen and (max-width: 1096px) {
    width: 16rem;
  }
  @media only screen and (max-width: 431px) {
    width: 14rem;
    top: 6rem;
    left: 4rem;
  }
`;

export const ResetTitle = styled(Title)`
  margin-bottom: 6.2rem;
  font-family: "JosefinSansBold", sans-serif;
  color: #000000;
  @media only screen and (max-width: 700px) {
    font-size: 3.8rem;
    line-height: 4rem;
  }
  @media only screen and (max-width: 700px) {
    font-size: 3.2rem;
  }
  @media only screen and (max-width: 431px) {
    font-size: 2.8rem;
    line-height: 3.4rem;
    margin-bottom: 2rem;
  }
`;

export const ResetPasswordArea = styled(PasswordArea)`
  margin-bottom: 2.2rem;
  @media only screen and (max-width: 431px) {
    margin-bottom: 1.2rem;
  }
`;

export const ResetConfirmPasswordArea = styled(PasswordArea)`
  margin-bottom: 4.4rem;
  @media only screen and (max-width: 431px) {
    margin-bottom: 2.8rem;
  }
`;

export const Error = styled.p`
  color: #fa4f16;
  font-family: ${(props) => props.theme.fonts[0]}, sans-serif;
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  font-weight: 400;
  line-height: 2rem;
  width: 70rem;
  text-align: start;
  margin-top: 1.2rem;
  @media only screen and (max-width: 431px) {
    margin-top: 0.8rem;
    font-size: 1.1rem;
    line-height: 1.3rem;
    width: 50rem;
  }
`;

export const DisplayButton = styled.img`
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

export const ResetInput = styled(Input)`
  margin: 0rem;
  &::placeholder {
    color: #636260;
  }
  &:focus::placeholder {
    color: rgba(99, 98, 96, 0.3);
  }
  &:focus {
    outline: none;
  }
  @media only screen and (max-width: 801px) {
    width: 64rem;
  }
  @media only screen and (max-width: 700px) {
    width: 50rem;
  }
  @media only screen and (max-width: 550px) {
    width: 40rem;
  }
  @media only screen and (max-width: 431px) {
    width: 32.7rem;
    height: 4.4rem;
    border-radius: 0.8rem;
    placeholder {
      font-size: 1.2rem;
      line-height: 1.6rem;
    }
  }
`;

export const ResetButton = styled(SubmitButton)`
  background: ${(props) => props.theme.colors.cerulean};
  &:hover {
    background-color: #0a93b2;
  }
  @media only screen and (max-width: 801px) {
    width: 64rem;
  }
  @media only screen and (max-width: 700px) {
    width: 50rem;
  }
  @media only screen and (max-width: 550px) {
    width: 40rem;
  }
  @media only screen and (max-width: 431px) {
    width: 32.7rem;
    height: 4.4rem;
  }
`;

export const ButtonTitle = styled(SubmitButtonTitle)`
  line-height: 18px;
  font-family: "PoppinsSemiBold", sans-serif;
  @media only screen and (max-width: 431px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const CopyrightFooter = styled(Copyright)``;
