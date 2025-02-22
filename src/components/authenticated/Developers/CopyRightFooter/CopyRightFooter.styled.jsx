import styled from "styled-components";

export const Copyright = styled.div`
  margin-top: 8.1rem;
  margin-bottom: 2.4rem;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 761px) {
    margin-top: 2.45rem;
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
