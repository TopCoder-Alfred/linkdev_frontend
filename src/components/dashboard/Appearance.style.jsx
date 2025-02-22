import styled from "styled-components";

export const Container = styled.section`
  width: calc(100% - 60rem);
  height: calc(100vh - 10rem);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;
  //margin-bottom: 5.6rem;
  border-right: 0.15rem solid ${({ theme }) => theme.colors.lineColor};
  &:focus {
    outline: none;
  }
  @media only screen and (max-width: 1500px) {
    width: calc(100% - 50rem);
  }
  @media only screen and (max-width: 1253px) {
    width: calc(100% - 40rem);
  }
  @media only screen and (max-width: 1002px) {
    width: calc(100% - 30rem);
  }
  @media only screen and (max-width: 743px) {
    width: 100%;
    border-right: none;
  }
  @media only screen and (max-width: 431px) {
    height: calc(100vh - 14.1rem);
  }
`;

export const ContainerDark = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;

export const AppearanceContent = styled.div`
  width: 75.2rem;
  margin: 5.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.6rem;
  background-color: #ffffff;
  @media only screen and (max-width: 743px) {
    margin: 7rem 5.6rem 5.6rem 5.6rem; // margin-top for sharing link in the mobile version
  }
  @media only screen and (max-width: 431px) {
    margin: 8rem 2.4rem 2.4rem 2.4rem; // margin-top for sharing link in the mobile version
  }
`;

export const UserAvatar = styled.img`
  width: 12rem;
  height: 12rem;
  margin-top: 3.6rem;
  border-radius: 100%;
  @media only screen and (max-width: 431px) {
    width: 7.2rem;
    height: 7.2rem;
  }
`;

export const Username = styled.span`
  margin-top: 1.5rem;
  font-family: "PoppinsSemiBold", sans-serif;
  font-weight: 600;
  font-size: 2rem;
  line-height: 100%;
  color: ${(props) => props.theme.colors.StormDust};
  cursor: default;
  user-select: none;
  @media only screen and (max-width: 431px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const TitleArea = styled.div`
  width: 17rem;
  height: 2.5rem;
  text-align: center;
  margin-top: 1.2rem;
  user-select: none;
`;

export const UserTitle = styled.span`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2rem;
  color: #b1b0af;
  font-family: "PoppinsMedium", sans-serif;
  @media only screen and (max-width: 431px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;

export const InputTitle = styled.input`
  border: none;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2rem;
  color: #b1b0af;
  width: 14rem;
  text-align: right;
  font-family: "PoppinsMedium", sans-serif;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(99, 98, 96, 0.1);
  }
  @media only screen and (max-width: 431px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;

export const TitleEditBtn = styled.img`
  margin-left: 1rem;
  cursor: pointer;
  @media only screen and (max-width: 431px) {
    width: 1.44rem;
    height: 1.42rem;
  }
`;

export const ThemesTitle = styled.h2`
  font-family: "PoppinsSemiBold", sans-serif;
  font-weight: 600;
  font-size: 2.8rem;
  line-height: 5rem;
  color: #000000;
  align-self: flex-start;
  margin-left: 4rem;
  margin-top: 1.7rem;
  @media only screen and (max-width: 431px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

export const UploadArea = styled.form`
  display: flex;
  position: absolute;
  top: 36%;
  right: 48%;
  width: 66rem;
  height: 50rem;
  overflow: hidden;
  border: 0.1rem solid rgba(99, 98, 96, 0.5);
  border-radius: 1.6rem;
  background-color: #ffffff;
  padding: 5.8rem 7.7rem;
  user-select: none;
  z-index: 10;
`;

// export const UploadFormContainer = styled.form`
// `;

export const Upload = styled.input`
  position: absolute;
  width: 50rem;
  height: 38rem;
  top: 0;
  left: 0;
  opacity: 0;
  margin: 5.8rem 7.7rem;
  border-radius: 1.6rem;
`;

export const UploadDisplay = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  content: "";
  width: 50rem;
  height: 38rem;
  top: 6rem;
  left: 8rem;
  border-radius: 1.6rem;
  border: 0.1rem dashed rgba(99, 98, 96, 0.5);
  text-align: center;
  justify-content: center;
`;
export const UploadImg = styled.img`
  width: 4rem;
  align-self: center;
`;

export const UploadTitle = styled.span`
  margin-top: 2.5rem;
  color: ${(props) => props.theme.colors.StormDust};
  font-weight: 600;
  font-size: 2rem;
`;

export const UploadTip = styled.span`
  margin-top: 1.2rem;
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  color: #a2a2a2;
`;

export const Error = styled.p`
  color: #fa4f16;
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 2rem;
  width: 70rem;
  text-align: center;
  margin-top: 0.4rem;
  @media only screen and (max-width: 431px) {
    font-size: 1rem;
    line-height: 1.2rem;
  }
`;

export const ThemesContent = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  padding: 1.5rem;
  @media only screen and (max-width: 620px) {
    padding: 0;
  }
`;

export const ThemeContent = styled.div`
  align-self: center;
  display: flex;
`;

export const Theme = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Themes = styled.img`
  margin: 2rem 2rem;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    width: 32vw;
  }
  @media only screen and (max-width: 543px) {
    width: 30vw;
  }
  @media only screen and (max-width: 489px) {
    width: 27vw;
  }
  @media only screen and (max-width: 431px) {
    width: 34.8vw;
  }
`;

export const ThemeDefault = styled.img`
  margin: 2rem 2rem;
  @media only screen and (max-width: 600px) {
    width: 32vw;
  }
  @media only screen and (max-width: 543px) {
    width: 30vw;
  }
  @media only screen and (max-width: 489px) {
    width: 27vw;
  }
  @media only screen and (max-width: 431px) {
    width: 34.8vw;
  }
`;

export const ThemeName = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-right: 1rem;
  @media only screen and (max-width: 431px) {
    font-size: 1.3rem;
    line-height: 1.8rem;
  }
`;

export const LockImg = styled.img``;
