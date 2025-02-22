import styled from "styled-components";
import logo from "../../assets/icons/linkdev_logo.svg";
import loading from "../../assets/icons/loading.svg";
import { LogoContent } from "../dashboard/Navbar.style";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingContentContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LoadingPicture = styled.img`
  width: 30%;
  height: 32%;
  @media only screen and (max-width: 394px) {
    height: 25%;
  }
`;

const Logo = styled.img`
  width: 6.877rem;
  height: 6.877rem;
  filter: drop-shadow(0 0.456429rem 0.798752rem rgba(0, 0, 0, 0.25));
  @media only screen and (max-width: 430px) {
    width: 4.271rem;
    height: 4.271rem;
  }
`;

const LogoText = styled(LogoContent)`
  font-family: "JosefinSansBold", sans-serif;
  font-weight: 700;
  font-size: 3.65144rem;
  line-height: 3.7rem;
  text-transform: capitalize;
  color: #1e1e1e;
  text-shadow: 0px 4.56429px 2.28215px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.15rem;
  margin-left: 2.643rem;
  margin-right: 4rem;
  margin-top: 0.8rem;
  @media only screen and (max-width: 430px) {
    font-size: 2rem;
    line-height: 3.2rem;
    margin-left: 1.182rem;
    margin-right: 2rem;
  }
`;

const DotOne = styled.div`
  border-radius: 50%;
  height: 1rem;
  width: 1rem;
  background-color: #1e1e1e;
  margin-right: 2.4rem;
  margin-top: 0.6rem;
  transform: scale(0);
  animation: dot 0.7s ease-in-out alternate 0.3s infinite;
  @keyframes dot {
    100% {
      transform: scale(1.2);
      box-shadow: 10px 10px 22px -2px rgba(0, 0, 0, 0.25);
    }
  }
  @media only screen and (max-width: 430px) {
    height: 0.7rem;
    width: 0.7rem;
    margin-right: 1.12rem;
  }
  @media only screen and (max-width: 394px) {
    margin-top: 1rem;
  }
`;

const DotTwo = styled(DotOne)`
  animation: dot 0.7s ease-in-out alternate 0.5s infinite;
`;

const DotThree = styled(DotOne)`
  animation: dot 0.7s ease-in-out alternate 0.8s infinite;
`;

const DotFour = styled(DotOne)`
  animation: dot 0.7s ease-in-out alternate 1.1s infinite;
`;

const DotFive = styled(DotOne)`
  animation: dot 0.7s ease-in-out alternate 1.4s infinite;
`;

const Loading = () => {
  return (
    <Wrapper>
      <LoadingPicture src={loading} />
      <LoadingContentContainer>
        <LoadingContent>
          <Logo src={logo} alt="Logo" />
          <LogoText>Loading</LogoText>
          <DotOne />
          <DotTwo />
          <DotThree />
          <DotFour />
          <DotFive />
        </LoadingContent>
      </LoadingContentContainer>
    </Wrapper>
  );
};

export default Loading;
