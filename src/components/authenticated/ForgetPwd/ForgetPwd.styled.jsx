import styled from "styled-components";

import { Copyright } from "../../../../Public.styled";

export const Container = styled.div`
  position: relative;
`;

export const BackButton = styled.img`
  position: absolute;
  margin-top: 9.3rem;
  margin-left: 9.3rem;
  cursor: pointer;
  @media only screen and (max-width: 801px) {
    margin-left: 8rem;
  }
  @media only screen and (max-width: 431px) {
    width: 1.64rem;
    height: auto;
    margin-top: 14rem;
    margin-left: 4.8rem;
  }
  @media only screen and (max-width: 376px) {
    width: 1.64rem;
    height: auto;
    margin-top: 12rem;
    margin-left: 3.2rem;
  }
`;

export const ForgetLogoName = styled.img`
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

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.extraLarge};
  font-family: "JosefinSansBold", sans-serif;
  line-height: 5rem;
  letter-spacing: -0.008em;
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
  }
`;

export const Input = styled.input`
  width: 75rem;
  height: 5.5rem;
  margin-top: 6.2rem;
  border: none;
  border-radius: 1.6rem;
  color: ${(props) => props.theme.colors.StormDust};
  background-color: ${(props) => props.theme.colors.wildSand};
  font-family: ${(props) => props.theme.fonts[0]}, sans-serif;
  line-height: normal;
  padding-left: 2.6rem;
  font-size: 1.4rem;
  & ::placeholder {
    font-family: ${(props) => props.theme.fonts[0]}, sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${(props) => props.theme.colors.wildSand};
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
    margin-top: 2rem;
    border-radius: 0.8rem;
    placeholder {
      font-size: 1.2rem;
      line-height: 1.6rem;
    }
  }
`;

export const Error = styled.p`
  color: #fa4f16;
  display: flex;
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
  @media only screen and (max-width: 376px) {
    width: 1.64rem;
    height: auto;
    margin-top: 12rem;
    margin-left: 3.2rem;
  }
`;

export const ResetpwdButton = styled.button`
  width: 75rem;
  height: 5.5rem;
  margin-top: 4.3rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.cerulean};
  border-radius: 6.8rem;
  border: none;
  cursor: pointer;
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
    margin-top: 2.8rem;
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const SuccessAlert = styled.p`
  height: 3rem;
  width: 34rem;
  line-height: 3rem;
  text-align: center;
  margin-top: 4rem;
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
    margin-top: 1.6rem;
    font-size: 1.1rem;
    line-height: 1.3rem;
  }
`;

export const CopyrightFooter = styled(Copyright)``;
