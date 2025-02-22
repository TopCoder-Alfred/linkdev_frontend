import styled from "styled-components";

export const InnerElementWrap = styled.div`
  transform-style: preserve-3d;
  transform: perspective(1000px);
  position: relative;
`;

export const Bg = styled.img`
  max-width: 70%;
`;

export const Card = styled.img`
  position: absolute;
  transform: translateZ(50px);
  max-width: 50%;
  top: 63%;
  left: 38%;
`;

export const Btn = styled.img`
  position: absolute;
  transform: translateZ(80px);
  max-width: 15%;
  top: 82%;
  left: 40%;
`;

export const Btn2 = styled.img`
  position: absolute;
  transform: translateZ(50px);
  max-width: 38%;
  top: 34%;
  left: 42%;
`;
