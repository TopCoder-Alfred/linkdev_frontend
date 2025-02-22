import styled from "styled-components";
// import img from "../../assets/images/footer.svg";

// export const StyledFooter = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 35.6rem;
//   background: url(${img});
//   background-color: ${({ theme }) => theme.colors.bamboo};
//   img {
//     width: 72.9rem;
//   }
//   p {
//     color: ${({ theme }) => theme.colors.StormDust};
//   }
// `;

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
    margin-top: 2.6rem;
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
