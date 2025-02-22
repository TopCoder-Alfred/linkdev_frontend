import styled from "styled-components";

export const SubmissionPopupViewContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;

export const ImageAndFormContainer = styled.div`
  width: 36.1rem;
  height: 35.4rem; //H212px + H142px
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 36.1rem;
  height: 14.2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 1280px) {
    width: 23.2rem;
    height: 9.126rem;
  }
`;

export const MonsterImage = styled.img`
  width: 26.9rem;
  height: 14.2rem;
  display: block;
  margin-left: 0.6rem;
  @media only screen and (max-width: 1280px) {
    width: 17.4rem;
    height: 9.2rem;
    margin-left: 0.4rem;
  }
`;

export const SubmissionFormContainer = styled.div`
  width: 36.1rem;
  height: 21.2rem;
  background: rgba(255, 255, 255, 0.97);
  box-shadow: 0 0.8rem 2rem rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(0.25rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 1.6rem;
  z-index: 5;
  @media only screen and (max-width: 1280px) {
    width: 23.2rem;
    height: 13.8rem;
  }
`;

export const DisplayedMessageContainer = styled.div`
  width: 15.7rem;
  height: 7rem;
  margin-top: 5rem;
  margin-bottom: 2.2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 1280px) {
    width: 10.5rem;
    height: 5rem;
    margin-top: 2.4rem;
    margin-bottom: 1.2rem;
  }
`;

export const DisplayedMessageLineContainer = styled.div`
  width: 15.7rem;
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1280px) {
    width: 10.5rem;
    height: 2.5rem;
  }
`;

export const DisplayedMessage = styled.p`
  font-family: "JosefinSansBold", sans-serif;
  font-weight: 700;
  font-size: 3rem;
  line-height: 3.5rem;
  letter-spacing: -0.008em;
  text-transform: capitalize;
  color: #000000;
  @media only screen and (max-width: 1280px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

export const OKButtonContainer = styled.div`
  width: 15.4rem;
  height: 3.6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #2a3d4e;
  border-radius: 6.8rem;
  cursor: pointer;
  @media only screen and (max-width: 1280px) {
    width: 13.2rem;
    height: 2.8rem;
  }
`;

export const OKButton = styled.button`
  font-family: "PoppinsSemiBold";
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 100%;
  color: #ffffff;
  border: none;
  background: #2a3d4e;
  cursor: pointer;
  @media only screen and (max-width: 1280px) {
    font-size: 1.3rem;
  }
`;
