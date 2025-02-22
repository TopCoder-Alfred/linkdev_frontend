import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 22.6rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 1280px) {
    margin-top: 21.4rem;
  }
  @media only screen and (max-width: 430px) {
    margin-top: 8.1rem;
  }
`;

export const Header = styled.h1`
  display: block;
  margin-left: 13vw;
  font-family: "PoppinsBold", sans-serif;
  font-size: 5rem;
  font-weight: 700;
  line-height: 5rem;
  letter-spacing: -0.008em;
  color: #000000;
  @media only screen and (max-width: 1920px) {
    margin-left: 26.8rem;
  }
  @media only screen and (max-width: 1440px) {
    margin-left: 18.8rem;
  }
  @media only screen and (max-width: 1280px) {
    margin-left: 12.8rem;
  }
  @media only screen and (max-width: 980px) {
    margin-left: 10.8rem;
  }
  @media only screen and (max-width: 680px) {
    margin-left: 6.8rem;
  }
  @media only screen and (max-width: 430px) {
    margin-left: 3.8rem;
    font-size: 2.8rem;
    line-height: 3.4rem;
  }
  @media only screen and (max-width: 375px) {
    margin-left: 2.8rem;
  }
`;
