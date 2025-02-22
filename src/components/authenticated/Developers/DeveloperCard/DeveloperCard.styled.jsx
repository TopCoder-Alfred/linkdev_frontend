import styled from "styled-components";

export const Card = styled.div`
  width: 58.1rem;
  height: 31rem;
  margin-left: 1.7rem;
  margin-right: 1.7rem;
  margin-bottom: 3.4rem;
  background: ${(props) => props.background};
  border-radius: 12rem 4.8rem 4.8rem 12rem;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  @media only screen and (max-width: 1920px) {
    margin-left: 1.8rem;
  }
  @media only screen and (max-width: 1440px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  @media only screen and (max-width: 1366px) {
    width: 47.3rem;
    height: 25rem;
    margin-left: 8.4rem;
    //margin-right: 0.1rem;
    border-radius: 9.8rem 4rem 4rem 9.8rem;
  }
  @media only screen and (max-width: 1280px) {
    margin-left: 4rem;
    margin-right: 1rem;
  }
  @media only screen and (max-width: 1194px) {
    margin-left: 3.4rem;
  }
  @media only screen and (max-width: 1134px) {
    margin-left: 2.4rem;
  }
  @media only screen and (max-width: 1024px) {
    margin-left: 2rem;
    margin-right: 1.2rem;
  }
  @media only screen and (max-width: 834px) {
    margin-left: 1.2rem;
    margin-right: 1.2rem;
  }
  @media only screen and (max-width: 580px) {
    width: 32.7rem;
    height: 16.2rem;
    margin-left: 2.3rem;
    margin-right: 0.1rem;
    border-radius: 6.4rem 2.4rem 2.4rem 6.4rem;
  }
  @media only screen and (max-width: 430px) {
    margin-left: 3.4rem;
    margin-right: 1.7rem;
    margin-bottom: 1.2rem;
  }
  @media only screen and (max-width: 393px) {
    margin-left: 2rem;
    margin-right: 1.7rem;
  }
`;

export const AvatarContainer = styled.div`
  margin: 1.9rem 0 1.9rem 1.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1366px) {
    margin: 1.5rem 0 1.5rem 1.5rem;
  }
  @media only screen and (max-width: 580px) {
    margin: 1.2rem 0 1.2rem 1.2rem;
  }
`;

export const AvatarWrapper = styled.div`
  width: 21.4rem;
  height: 27.2rem;
  border-radius: 10.7rem;
  overflow: hidden;
  @media only screen and (max-width: 1366px) {
    width: 17.4rem;
    height: 22rem;
  }
  @media only screen and (max-width: 580px) {
    width: 10.8rem;
    height: 13.8rem;
  }
`;

export const Avatar = styled.img`
  width: 21.4rem;
  height: 27.2rem;
  border-radius: 10.7rem;
  @media only screen and (max-width: 1366px) {
    width: 17.4rem;
    height: 22rem;
  }
  @media only screen and (max-width: 580px) {
    width: 10.8rem;
    height: 13.8rem;
  }
`;

export const InfoContainer = styled.div`
  width: 34.8rem; //Outer container W 581px - avatar ML 19px - avatar container W 214px
  height: 31rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  @media only screen and (max-width: 1366px) {
    width: 28.4rem; //Outer container W 473px - avatar ML 15px - avatar container W 174px
    height: 25.2rem;
  }
  @media only screen and (max-width: 580px) {
    width: 25.2rem; //Outer container W 372px - avatar ML 12px - avatar container W 108px
    height: 16.2rem;
  }
`;

export const UserNameContainer = styled.div`
  width: 31.6rem; //Username W 148px + Username MR 168px
  height: 12.4rem; //Username H 26px + Username MT 98px
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  @media only screen and (max-width: 1366px) {
    width: 26rem; //Username W 117px + Username MR 143px
    height: 10.2rem; //Username H 22px + Username MT 80px
  }
  @media only screen and (max-width: 580px) {
    width: 17.7rem; //Username W 80px + Username MR 97px
    height: 6rem; //Username H 20px + Username MT 40px
  }
`;

export const UserName = styled.p`
  margin-left: 3.2rem;
  font-family: ${(props) => props.theme.fonts[0]}, sans-serif;
  font-style: SemiBold;
  font-weight: 600;
  font-size: 2.6rem;
  line-height: 100%;
  color: #ffffff;
  @media only screen and (max-width: 1366px) {
    font-size: 2.2rem;
    margin-left: 2.4rem;
  }
  @media only screen and (max-width: 580px) {
    font-size: 1.5rem;
    margin-left: 3rem;
  }
`;

export const UserTitleContainer = styled.div`
  width: 31.6rem; //UserTitleContainer W 102px + UserTitleContainer MR 214px
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  @media only screen and (max-width: 1366px) {
    width: 26rem; //UserTitleContainer W 77px + UserTitleContainer MR 183px
  }
  @media only screen and (max-width: 580px) {
    width: 17.7rem; //UserTitleContainer W 62px + UserTitleContainer MR 115px
  }
`;

export const UserTitle = styled.p`
  margin-top: 1.5rem;
  margin-left: 3.2rem;
  font-family: ${(props) => props.theme.fonts[0]}, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2rem;
  color: #ffffff;
  @media only screen and (max-width: 1366px) {
    margin-left: 2.4rem;
    font-size: 1.5rem;
    line-height: 1.6rem;
  }
  @media only screen and (max-width: 580px) {
    margin-left: 3rem;
    font-size: 1.2rem;
  }
`;

export const ContactAndProfileSection = styled.div`
  margin-top: 7.6rem;
  width: 34.8rem; //ML19px + W140px + M29px + W140px + M20px
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 1366px) {
    margin-top: 5.6rem;
    width: 28.3rem; //ML16px + W114px + M23px + W114px + M16px
  }
  @media only screen and (max-width: 580px) {
    margin-top: 2.7rem;
    width: 20.7rem; //ML23px + W80px + M12px + W80px + M12px
  }
`;

export const ContactMeContainer = styled.div`
  width: 14rem;
  height: 5.5rem;
  margin-left: 1.9rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 6.8rem;
  :hover {
    background-color: #e0e0e0;
  }
  @media only screen and (max-width: 1366px) {
    width: 11.4rem;
    height: 4.5rem;
    margin-left: 1.5rem;
    margin-bottom: 1.56rem;
    border-radius: 5.5rem;
  }
  @media only screen and (max-width: 580px) {
    width: 8rem;
    height: 3.2rem;
    margin-left: 2.3rem;
    margin-bottom: 1.2rem;
    border-radius: 3.827rem;
  }
`;

export const ViewProfileContainer = styled.div`
  width: 14rem;
  height: 5.5rem;
  margin-left: 2.9rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background};
  border-radius: 6.8rem;
  :hover {
    background-color: ${(props) => props.hoverColor};
  }
  @media only screen and (max-width: 1366px) {
    width: 11.4rem;
    height: 4.5rem;
    margin-left: 2.3rem;
    margin-right: 1.6rem;
    margin-bottom: 1.56rem;
    border-radius: 5.5rem;
  }
  @media only screen and (max-width: 580px) {
    width: 8rem;
    height: 3.2rem;
    margin-left: 1.2rem;
    margin-right: 1.2rem;
    margin-bottom: 1.2rem;
    border-radius: 3.827rem;
  }
`;
export const ContactAndProfileLink = styled.a`
  font-family: ${(props) => props.theme.fonts[0]}, sans-serif;
  font-style: Medium;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 100%;
  color: ${(props) => props.color};
  @media only screen and (max-width: 1366px) {
    font-size: 1.46rem;
  }
  @media only screen and (max-width: 580px) {
    font-size: 1.1rem;
  }
`;
