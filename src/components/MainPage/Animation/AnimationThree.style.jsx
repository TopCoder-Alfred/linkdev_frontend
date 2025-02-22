import styled from "styled-components";

export const InnerElementWrap = styled.div`
  transform-style: preserve-3d;
  transform: perspective(1000px);
  position: relative;
  left: 15%;
`;

export const Phone2 = styled.img`
  max-width: 85%;
`;

export const Phone1 = styled.img`
  position: absolute;
  transform: translateZ(50px);
  max-width: 55%;
  left: -12%;
  top: 10%;
`;

export const Btn1 = styled.img`
  position: absolute;
  transform: translateZ(50px);
  max-width: 11%;
  left: 12%;
  top: 18%;
`;

export const Btn2 = styled.img`
  position: absolute;
  transform: translateZ(15px);
  max-width: 47%;
  left: 43%;
  top: 23%;
`;

export const Icon1 = styled.img`
  position: absolute;
  max-width: 11%;
  left: 39%;
  top: 10%;
  @media (max-width: 430px) {
    left: 46%;
  }
`;

export const Icon2 = styled.img`
  position: absolute;
  transform: translateZ(50px);
  max-width: 12%;
  left: 66%;
  top: 28%;
`;

export const Text1 = styled.img`
  position: absolute;
  transform: translateZ(50px);
  max-width: 11%;
  left: 1%;
  top: 19%;
`;

export const Text2 = styled.img`
  position: absolute;
  transform: translateZ(50px);
  max-width: 12%;
  left: 22%;
  top: 16.5%;
`;

export const Text3 = styled.img`
  position: absolute;
  transform: translateZ(50px);
  max-width: 30%;
  left: 0%;
  top: 38%;
`;
