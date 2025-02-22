import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  /* border: 1px solid red; */
  width: 100vw;
  h1 {
    /* border: 1px solid red; */
    width: 100%;
    margin-top: 14.4rem;
    margin-bottom: 6.2rem;
    padding-left: 12rem;
    font-family: PoppinsExtraBold;
    font-size: 7rem;
    font-weight: 800;
    line-height: 8rem;
    @media (max-width: 430px) {
      width: 100%;
      margin-top: 8.2rem;
      margin-bottom: 4rem;
      padding-left: 0;
      text-align: center;
      font-size: 2.8rem;
      font-weight: 700;
      line-height: 3.4rem;
    }
  }
`;

export const SliderContainer = styled.div`
  /* border: 1px solid red; */
  position: relative;
  width: 100%;
  overflow: hidden;
  display: grid;
  place-items: center;
  margin-bottom: 11.6rem; //17.6rem;
  @media (max-width: 430px) {
    margin-bottom: 6.4rem; //9.6rem;
  }
`;

const slideAnimation = keyframes`
0% { transform: translateX(0);}
100% {transform: translateX(-478.4rem);}
`;

const slideAnimationUnder430px = keyframes`
0% { transform: translateX(0);}
100% {transform: translateX(-243.2rem);}
`;

export const SlideTrack = styled.div`
  /* border: 1px solid red; */
  display: flex;
  width: 956.8rem;
  margin-bottom: 6rem; //???
  animation: ${slideAnimation} 40s linear infinite;
  @media (max-width: 430px) {
    width: 486.4rem;
    margin-bottom: 3.2rem; //???
    animation: ${slideAnimationUnder430px} 40s linear infinite;
  }
  &:hover {
    animation-play-state: paused;
  }
`;
