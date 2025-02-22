import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const InnerWrapper = styled.div`
  flex: 1;
  margin: 0 auto;
  width: 80%;
  max-width: 86rem;
`;

export const Logo = styled.img`
  position: absolute;
  width: clamp(10.8rem, 10rem + 5vw, 21.5rem);
  left: 4rem;
  top: 4rem;
  @media (max-width: 430px) {
    left: 2.4rem;
    top: 4.8rem;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20rem;
  @media (max-width: 430px) {
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    margin-top: 15rem;
  }
  h2 {
    white-space: nowrap; // make sure h2 won't wrap before breakpoint occur
    font-family: "PoppinsBold";
    font-size: clamp(2.8rem, 1rem + 5vw, 5rem);
    font-weight: 700;
    line-height: 5rem;
  }
`;

export const StyledBtnToMyLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.2rem;
  width: 18.6rem;
  height: 5rem;
  border-radius: 2.5rem;
  border: none;
  cursor: pointer;
  background: ${(props) => props.theme.colors.seaBuckthorn};
  @media (max-width: 430px) {
    align-self: end;
    gap: 1rem;
    width: 10.7rem;
    height: 3.2rem;
  }
  span {
    font-family: "PoppinsSemiBold";
    font-size: clamp(1.3rem, 1rem + 0.5vw, 1.8rem);
    font-weight: 600;
    color: ${(props) => props.theme.colors.white};
  }
  img {
    width: 1.6rem;
    @media (max-width: 430px) {
      width: 1.3rem;
    }
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 4rem;
  @media (max-width: 430px) {
    margin-top: 2.4rem;
  }
  h3 {
    font-family: "PoppinsSemiBold";
    font-size: clamp(2rem, 5vw, 2.8rem);
    line-height: clamp(2.5rem, 2vw, 5rem);
    letter-spacing: -0.008em;
    color: ${(props) => props.theme.colors.black};
  }
`;

export const DisplayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 2.2rem;
  @media (max-width: 430px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1.6rem;
  }
  span {
    flex-basis: 11rem; //Give all labels the same base width, despite the text length varies
    flex-grow: 0;
    flex-shrink: 0;

    font-family: "PoppinsSemiBold";
    font-size: 1.6rem;
    line-height: 2rem;
    font-weight: 600;
    color: #636260;
    @media (max-width: 430px) {
      flex-basis: 0rem;
      font-size: 1.3rem;
      margin-bottom: 0.8rem;
      line-height: 1.8rem;
    }
  }
  div {
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;

    display: flex;
    align-items: center;
    font-family: "Poppins";
    font-style: normal;
    height: 5rem;
    padding-left: 2.6rem;
    font-size: 1.4rem;
    line-height: 5rem;
    font-weight: 400;
    border-radius: 1.6rem;
    background-color: ${(props) => props.theme.colors.wildSand};
    color: #636260;
    @media (max-width: 430px) {
      flex-basis: 4.4rem; //flex-basis become vertical here as flexbox layout become column
      width: 100%; // make sure div won't shrink after breakpoint occur
      padding-left: 1.6rem;
      font-size: 1.2rem;
      border-radius: 0.8rem;
    }
  }
`;

export const StyledDeleteBtn = styled.div`
  width: 14.2rem;
  height: 2rem;
  margin-top: 3.2rem;
  text-decoration: underline;
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  font-family: "Poppins", sans-serif;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.bamboo};
  cursor: pointer;
`;

export const CopyrightFooter = styled.p`
  font-family: "PoppinsMedium", sans-serif;
  width: 100%;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 2.4rem;
  font-size: clamp(1.1rem, 1vw, 1.3rem);
  line-height: clamp(1.3rem, 1vw, 3.6rem);
  font-weight: 500;
  color: rgba(0, 0, 0, 0.3);
  @media (max-width: 430px) {
    margin-bottom: 1.6rem;
  }
`;
