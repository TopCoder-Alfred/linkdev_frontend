import styled from "styled-components";

export const InnerElementWrap = styled.div`
  transform-style: preserve-3d;
  transform: perspective(1000px);
  position: relative;
`;

export const Btn = styled.img`
  position: absolute;
  transform: translateZ(50px);
  max-width: 50%;
  top: 30%;
  left: 40%;
`;

export const Btn2 = styled(Btn)`
  top: 45%;
  left: 34%;
`;

export const Btn3 = styled(Btn)`
  max-width: 44%;
  transform: translateZ(55px);
  top: 59%;
  left: 14%;
`;

export const Icon = styled.img`
  position: absolute;
  transform: translateZ(50px);
  max-width: 18%;
  top: 17%;
  left: 44%;
`;

export const Icon2 = styled(Icon)`
  max-width: 23%;
  top: 31%;
  left: 17%;
`;

export const Icon3 = styled(Icon)`
  max-width: 23%;
  top: 45%;
  left: 10%;
`;

export const Icon4 = styled(Icon)`
  max-width: 15%;
  transform: translateZ(60px);
  top: 61%;
  left: 17%;
`;
