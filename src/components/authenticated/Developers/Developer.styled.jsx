import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CardsSection = styled.div`
  width: 100%;
  margin-top: 5.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1680px) {
    margin-top: 4.8rem;
  }
  @media only screen and (max-width: 1280px) {
    margin-top: 4rem;
  }
  @media only screen and (max-width: 430px) {
    margin-top: 2rem;
  }
`;

export const CardsContainer = styled.div`
  width: 74vw;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 1680px) {
    width: 88vw;
  }
  @media only screen and (max-width: 1440px) {
    width: 88vw;
  }
  @media only screen and (max-width: 1366px) {
    width: 82vw;
  }
  @media only screen and (max-width: 1280px) {
    width: 88vw;
  }
  @media only screen and (max-width: 1194px) {
    width: 88vw;
  }
  @media only screen and (max-width: 1134px) {
    width: 90vw;
  }
  @media only screen and (max-width: 834px) {
    width: 86vw;
  }
  @media only screen and (max-width: 680px) {
    width: 100%;
    min-width: 32.7rem;
  }
`;
