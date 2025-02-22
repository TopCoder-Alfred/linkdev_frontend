import styled, { css } from "styled-components";

export const Container = styled.div`
  @media only screen and (max-width: 690px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MobileStep = styled.div`
  @media only screen and (max-width: 690px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4.8rem;
  }
`;

export const MobileLogo = styled.img`
  height: 6rem;
  margin-left: 2.8rem;
  @media only screen and (min-width: 690px) {
    display: none;
  }
  @media only screen and (max-width: 431px) {
    height: 4rem;
    margin-top: 0.5rem;
    margin-left: 2.4rem;
  }
`;

export const MobileUserPhoto = styled.img`
  width: 5rem;
  height: 5rem;
  margin-right: 2.4rem;
  @media only screen and (min-width: 690px) {
    display: none;
  }
  @media only screen and (max-width: 431px) {
    width: 3.4rem;
    height: 3.4rem;
  }
`;

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem 0 2rem;
  @media only screen and (max-width: 690px) {
    padding: 0;
    height: 4.8rem;
  }
`;

export const Navigation = styled.div`
  width: 80rem;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 931px) {
    width: 80vw;
  }
  @media only screen and (max-width: 690px) {
    width: 100vw;
  }
`;

export const LogoWrapper = styled.div`
  width: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  @media only screen and (max-width: 690px) {
    display: none;
  }
`;

export const Logo = styled.object`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  filter: drop-shadow(0rem 0.3rem 0.5rem rgba(0, 0, 0, 0.25));
`;

export const LogoContent = styled.span`
  font-size: 2.8rem;
  font-weight: 800;
  margin-top: 1rem;
  font-family: "JosefinSansBold", sans-serif;
  text-shadow: 0px 4px 2px rgba(0, 0, 0, 0.2);
`;

export const NavigationTextWrapper = styled.ul`
  width: 58rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 690px) {
    width: 100vw;
  }
`;

export const NavigationText = styled.li`
  width: 10rem;
  height: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-family: "PoppinsSemiBold", sans-serif;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.StormDust};
  ${({ active }) =>
    active
      ? css`
          color: ${({ theme }) => theme.colors.seaBuckthorn};
          border-bottom: 0.35rem solid
            ${({ theme }) => theme.colors.seaBuckthorn};
        `
      : ""}
  cursor: pointer;
  @media only screen and (max-width: 690px) {
    font-size: 1.5rem;
    height: 4.5rem;
  }
`;

export const UserPhoto = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  cursor: pointer;
  @media only screen and (max-width: 690px) {
    display: none;
  }
`;
