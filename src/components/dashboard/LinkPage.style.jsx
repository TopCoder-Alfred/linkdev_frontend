import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.wildSand};
  display: flex;
`;

export const LinkManagement = styled.div`
  width: calc(100% - 60rem);
  overflow: auto;
  border-right: 0.15rem solid ${({ theme }) => theme.colors.lineColor};
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
`;

export const LinkManagementInner = styled.div`
  width: 50vw;
  margin: 6.8rem auto 12rem auto;
  position: relative;
  @media only screen and (max-width: 743px) {
    width: 85vw;
    margin: 7rem auto 17rem auto; // the margin-top for sharing link in the mobile version
  }
  @media only screen and (max-width: 565px) {
    width: 90vw;
  }
  @media only screen and (max-width: 431px) {
    margin: 8rem auto 18rem auto; // the margin-top for sharing link in the mobile version
  }
`;

export const QuestionMarker = styled.img`
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: -4.5rem;
  top: 12.9rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
  @media only screen and (max-width: 826px) {
    right: -3rem;
  }
  @media only screen and (max-width: 565px) {
    right: -0.5rem;
  }
  @media only screen and (max-width: 431px) {
    top: 10.75rem;
  }
`;

export const AddLinkButton = styled.button`
  width: 22rem;
  height: 5.5rem;
  border: none;
  margin-bottom: 2.6rem;
  border-radius: 6.8rem;
  background-color: ${({ theme }) => theme.colors.seaBuckthorn};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: "PoppinsSemiBold", sans-serif;
  cursor: pointer;
  @media only screen and (max-width: 1280px) {
    width: 18.6rem;
  }
  @media only screen and (max-width: 431px) {
    width: 9.8rem;
    height: 4.4rem;
    font-size: 1.3rem;
    line-height: 1.8rem;
  }
`;

export const Form = styled.form`
  width: 50vw;
  height: 18rem;
  padding: 1.4rem 1.7rem 1.5rem 4.4rem;
  margin: 2.2rem 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  animation: ${({ empty }) => empty && "shake 800ms ease-in-out"};
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }
    20%,
    80% {
      transform: translate3d(+2px, 0, 0);
    }
    30%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }
    40%,
    60% {
      transform: translate3d(+4px, 0, 0);
    }
    50% {
      transform: translate3d(-4px, 0, 0);
    }
  }
  @media only screen and (max-width: 743px) {
    width: 85vw;
  }
  @media only screen and (max-width: 565px) {
    width: 84vw;
  }
  @media only screen and (max-width: 431px) {
    height: 13.2rem;
    padding: 1.4rem 1.4rem 1.4rem 3.6rem;
    margin: 1.2rem 0;
  }
`;

export const TitleInputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkInfoInput = styled.input`
  width: 40vw;
  height: 4.4rem;
  padding: 0 1.6rem;
  border: none;
  border-radius: 6.8rem;
  /* background-color: ${({ theme }) => theme.colors.wildSand}; */
  background-color: white;
  font-size: 1.4rem;
  &::placeholder {
    font-family: "Poppins", sans-serif;
  }
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
      font-family: "Poppins", sans-serif;
    }
  }
  @media only screen and (max-width: 743px) {
    width: 65vw;
  }
  @media only screen and (max-width: 565px) {
    width: 60vw;
  }
  @media only screen and (max-width: 431px) {
    padding: 0;
  }
`;

export const SaveButton = styled(AddLinkButton)`
  width: 22rem;
  height: 4.4rem;
  margin-top: 1.2rem;
  margin-bottom: 0;
  font-size: ${({ theme }) => theme.fontSizes.small};
  cursor: pointer;
  @media only screen and (max-width: 431px) {
    width: 14rem;
    height: 3rem;
  }
`;

export const LinkBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Trash = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  margin-right: 0.7rem;
  margin-bottom: 0.9rem;
  align-self: flex-end;
  @media only screen and (max-width: 431px) {
    width: 1.4rem;
    height: 1.4rem;
  }
`;

export const CheckBoxLabel = styled.label`
  width: 4.8rem;
  height: 2.4rem;
  border-radius: 1.6rem;
  background: ${({ theme }) => theme.colors.lineColor};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 1.8rem;
    height: 1.8rem;
    margin: 0.3rem;
    background: #ffffff;
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 4.2rem;
  height: 2.6rem;
  &:checked + ${CheckBoxLabel} {
    background: ${({ theme }) => theme.colors.seaBuckthorn};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 1.8rem;
      height: 1.8rem;
      margin-left: 2.8rem;
      transition: 0.2s;
    }
  }
`;

export const MobileWrapper = styled.div`
  width: 60rem;
  overflow: auto;
  padding: 2.4rem 2.8rem;
  position: relative;
  @media only screen and (max-width: 1500px) {
    width: 50rem;
  }
  @media only screen and (max-width: 1253px) {
    width: 40rem;
  }
  @media only screen and (max-width: 1002px) {
    width: 30rem;
    padding: 2.4rem 1.5rem;
  }
  // work with <IframeInner> display:none, to make shared link can be relocated
  @media only screen and (max-width: 743px) {
    position: absolute;
    top: 10rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    overflow: hidden;
    padding: 1.2rem 2.4rem 0.5rem 2.4rem;
    background-color: white;
  }
  @media only screen and (max-width: 690px) {
    top: 15.5rem;
  }
  @media only screen and (max-width: 431px) {
    top: 14.1rem;
  }
`;

export const ShareInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  z-index: 1;
  /* position: relative; */
`;

export const LinkDetail = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 1%;
  align-items: center;
  @media only screen and (max-width: 1253px) {
    margin-right: 1rem;
  }
`;

export const LinkDetailTitle = styled.span`
  font-family: "PoppinsSemiBold", sans-serif;
  color: ${({ theme }) => theme.colors.StormDust};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.extraSmall};
  z-index: 1;
  @media only screen and (max-width: 1002px) {
    font-size: 1.2rem;
  }
`;

export const LinkHref = styled.a`
  font-family: ${({ theme }) => theme.fonts[0]};
  font-size: ${({ theme }) => theme.fontSizes.extraSmall};
  font-style: regular;
  color: ${({ theme }) => theme.colors.bamboo};
  font-weight: 400;
  text-decoration: underline;
  z-index: 1;
  @media only screen and (max-width: 1002px) {
    font-size: 1.2rem;
  }
`;

export const IframeInner = styled.div`
  transform: translateY(-50%) translate(-50%);
  position: absolute;
  top: 50%;
  left: 50%;
  @media only screen and (max-width: 743px) {
    display: none;
  }
`;

export const Iframe = styled.iframe`
  width: 38rem;
  height: 76rem;
  transform: scale(70%);
  border: 2rem solid black;
  border-radius: 7.5rem;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  @media only screen and (max-width: 1253px) {
    width: 35rem;
    height: 70rem;
  }
  @media only screen and (max-width: 1002px) {
    transform: scale(60%);
  }
  @media only screen and (min-width: 1003px) and (max-height: 749px) {
    transform: scale(60%);
  }
  @media only screen and (min-width: 1003px) and (max-height: 657px) {
    transform: scale(50%);
  }
  @media only screen and (min-width: 1003px) and (max-height: 590px) {
    transform: scale(40%);
  }
  @media only screen and (min-width: 1003px) and (max-height: 508px) {
    transform: scale(30%);
  }
  @media only screen and (min-width: 1003px) and (max-height: 430px) {
    transform: scale(20%);
  }
  @media only screen and (max-width: 1002px) and (max-height: 634px) {
    transform: scale(50%);
  }
  @media only screen and (max-width: 1002px) and (max-height: 556px) {
    transform: scale(40%);
  }
  @media only screen and (max-width: 1002px) and (max-height: 483px) {
    transform: scale(30%);
  }
  @media only screen and (max-width: 1002px) and (max-height: 413px) {
    transform: scale(20%);
  }
`;

export const LinkPageBtn = styled.button`
  width: 9rem;
  height: 3.2rem;
  font-family: ${({ theme }) => theme.fonts[0]};
  font-size: 1.4rem;
  border: 0.05rem solid rgba(0, 0, 0, 0.3);
  border-radius: ${(props) => props.theme.borderRadius.webBorderRadius};
  background-color: #ececec;
  color: ${(props) => props.theme.colors.StormDust};
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: #ffffff;
    color: #000;
  }
  @media only screen and (max-width: 743px) {
    width: 6.4rem;
    height: 2.4rem;
    font-size: 1.2rem;
  }
`;

export const LinkPageCopied = styled.span`
  position: absolute;
  right: 0;
  top: 4rem;
  width: 15rem;
  height: 5.2rem;
  border-radius: 1.6rem;
  background-color: rgba(0, 0, 0, 0.15);
  color: ${(props) => props.theme.colors.StormDust};
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  line-height: 2.4rem;
  animation: hidden 1.5s;
  @keyframes hidden {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
