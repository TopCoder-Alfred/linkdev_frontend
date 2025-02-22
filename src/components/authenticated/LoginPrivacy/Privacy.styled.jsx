import styled from "styled-components";

export const PageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const PrivacyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 2.8rem;
  padding: 7.8rem 22rem 10rem 22rem;
  @media only screen and (max-width: 1680px) {
    padding: 7.8rem 18rem 10rem 18rem;
  }
  @media only screen and (max-width: 1440px) {
    padding: 7.8rem 16rem 10rem 16rem;
  }
  @media only screen and (max-width: 1280px) {
    padding: 7.8rem 12rem 10rem 12rem;
  }
  @media only screen and (max-width: 1024px) {
    padding: 7.8rem 9rem 10rem 9rem;
  }
  @media only screen and (max-width: 913px) {
    padding: 7.8rem 8rem 10rem 8rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 7.8rem 5rem 10rem 5rem;
  }
  @media only screen and (max-width: 681px) {
    padding: 7.8rem 4rem 10rem 4rem;
  }
  @media only screen and (max-width: 431px) {
    margin: 0;
    padding: 5.7rem 2.4rem 4rem 2.4rem;
  }
  @media only screen and (max-width: 376px) {
    padding: 5.7rem 2.1rem 4rem 2.1rem;
  }
`;

export const PrivacyHeader = styled.div`
  margin-top: 15.4rem;
  display: flex;
  position: relative;
  @media only screen and (max-width: 639px) {
    margin-top: 10rem;
  }
  @media only screen and (max-width: 527px) {
    margin-top: 8rem;
  }
  @media only screen and (max-width: 430px) {
    margin-top: 6.8rem;
  }
`;

export const BackButton = styled.img`
  position: absolute;
  left: -6.5rem;
  top: 1.23rem;
  cursor: pointer;
  @media only screen and (max-width: 1281px) {
    left: -6rem;
  }
  @media only screen and (max-width: 769px) {
    left: -4rem;
    width: 2.8rem;
  }
  @media only screen and (max-width: 430px) {
    position: sticky;
    width: 1.64rem;
    height: auto;
    order: -1;
    margin-right: 1.38rem;
  }
`;

export const PrivacyTitle = styled.h2`
  display: block;
  font-family: "PoppinsExtraBold", sans-serif;
  font-size: 7rem;
  font-weight: 800;
  line-height: 5rem;
  letter-spacing: -0.008em;
  color: #000000;
  z-index: -1;
  @media only screen and (max-width: 1000px) {
    font-size: 6rem;
  }
  @media only screen and (max-width: 828px) {
    font-size: 5rem;
  }
  @media only screen and (max-width: 639px) {
    font-size: 4rem;
  }
  @media only screen and (max-width: 527px) {
    font-size: 3rem;
  }
  @media only screen and (max-width: 430px) {
    font-family: "PoppinsBold", sans-serif;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3rem;
  }
`;

export const PrivacyInfo = styled.div`
  margin-top: 6rem;
  @media only screen and (max-width: 1000px) {
    margin-top: 5rem;
  }
  @media only screen and (max-width: 828px) {
    margin-top: 4rem;
  }
  @media only screen and (max-width: 639px) {
    margin-top: 3rem;
  }
  @media only screen and (max-width: 527px) {
    margin-top: 2rem;
  }
  @media only screen and (max-width: 430px) {
    margin-top: 1.6rem;
  }
`;

export const Info = styled.p`
  margin-bottom: 3rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: #636260;
  @media only screen and (max-width: 430px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const InfoLast = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: #636260;
`;

export const Footer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: -1;
`;

export const FooterBackground = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  mix-blend-mode: overlay;
  object-fit: cover;
  background-color: ${({ theme }) => theme.colors.bamboo};
`;

export const LogoAndName = styled.div`
  margin-top: 7.2rem;
  display: flex;
  justify-content: center;
  mix-blend-mode: normal;
  @media only screen and (max-width: 1280px) {
    margin-top: 6.4rem;
  }
  @media only screen and (max-width: 430px) {
    margin-top: 1.6rem;
  }
`;

export const Logo = styled.img`
  margin-right: 6.21rem;
  mix-blend-mode: normal;
  z-index: 99;
  @media only screen and (max-width: 1280px) {
    width: 15.3rem;
    height: auto;
    margin-right: 4rem;
  }
  @media only screen and (max-width: 430px) {
    width: 5rem;
    height: auto;
    margin-right: 1rem;
  }
`;

export const WebName = styled.img`
  z-index: 99;
  mix-blend-mode: normal;
  width: 35.3rem;
  @media only screen and (max-width: 430px) {
    width: 8.3rem;
    height: auto;
  }
`;

export const Copyright = styled.div`
  margin-top: 5.12rem;
  margin-bottom: 2.4rem;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 1280px) {
    margin-top: 1.3rem;
  }
  @media only screen and (max-width: 430px) {
    margin-top: 0.8rem;
    margin-bottom: 1.6rem;
  }
`;

export const CopyrightInfo = styled.p`
  font-family: "PoppinsMedium", sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 3.6rem;
  color: rgba(0, 0, 0, 0.3);
  z-index: 99;
  @media only screen and (max-width: 430px) {
    font-size: 1.1rem;
    line-height: 1.3rem;
  }
`;

export const CopyrightLogo = styled.img`
  vertical-align: middle;
  z-index: 99;
`;
