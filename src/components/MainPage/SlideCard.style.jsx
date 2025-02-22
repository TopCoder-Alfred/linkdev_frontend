import styled from "styled-components";

export const StyledSlide = styled.div`
  /* border: 1px solid red; */
  /* width: 54.2rem; */
  /* perspective: 200px; */
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-right: 5.6rem;
  @media (max-width: 430px) {
    /* width: 27.6rem; */
    gap: 0.8rem;
    margin-right: 2.8rem;
  }
  img {
    /* border: 1px solid red; */
    width: 21.4rem;
    @media (max-width: 430px) {
      width: 10.8rem;
    }
  }
`;

export const StyledInfo = styled.div`
  /* border: 1px solid red; */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
  width: 31.6rem;
  height: 27.2rem;
  border-radius: 5.2rem;
  padding-top: 4.8rem;
  padding-left: 4rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${(props) => props.bg};
  @media (max-width: 430px) {
    gap: 0.4rem;
    width: 16rem;
    height: 13.8rem;
    border-radius: 2.4rem;
    padding-top: 2.4rem;
    padding-left: 1.7rem;
  }
  h2 {
    font-family: "PoppinsSemiBold", sans-serif;
    font-weight: 600;
    font-size: 3.2rem;
    line-height: 3.2rem;
    @media (max-width: 430px) {
      font-size: 1.6rem;
      line-height: 2.1rem;
    }
  }
  h3 {
    font-family: "PoppinsSemiBold", sans-serif;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2rem;
    @media (max-width: 430px) {
      font-size: 1.1rem;
      line-height: 1.3rem;
    }
  }
  p {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2rem;
    @media (max-width: 430px) {
      font-size: 0.9rem;
      line-height: 1.2rem;
    }
  }
  img {
    position: absolute;
    width: 4rem;
    bottom: 4rem;
    @media (max-width: 430px) {
      width: 2.4rem;
      bottom: 2rem;
    }
  }
`;

export const SpecialInfo = styled.div`
  background-color: ${(props) => props.bg};
  border-radius: 5.2rem;
  width: 31.6rem;
  height: 27.2rem;
  display: flex;
  justify-content: center;
  @media (max-width: 430px) {
    gap: 0.4rem;
    width: 16rem;
    height: 13.8rem;
    border-radius: 2.4rem;
  }
`;
