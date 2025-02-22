import styled from "styled-components";

export const Page404Logo = styled.img`
  position: absolute;
  content: "";
  width: 6.877rem;
  height: 6.877rem;
  left: 4.88rem;
  top: 4rem;
  border-radius: 4.23637rem;
  filter: drop-shadow(0 0.3rem 0.5rem rgba(0, 0, 0, 0.25));
  @media only screen and (max-width: 430px) {
    width: 3.095rem;
    height: 3.106rem;
    left: 2.796rem;
    top: 4.8rem;
    border-radius: 3.08rem;
  }
`;

export const Page404Linkdev = styled.img`
  position: absolute;
  content: "";
  width: 12rem;
  height: 3.2rem;
  top: 6.2rem;
  left: 13.5rem;
  text-shadow: 0px 4px 2px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 430px) {
    width: 6.4rem;
    height: 2.2rem;
    left: 6.8rem;
    top: 5.5rem;
  }
`;

export const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ErrorImage = styled.img`
  margin-top: 1rem;
  margin-bottom: 2.4rem;
  display: block;
  width: 40%;
  height: auto;
  @media only screen and (max-width: 430px) {
    width: 34.3rem;
    height: 21.8rem;
  }
`;

export const Message = styled.p`
  //height: 5rem;
  margin-bottom: 5.8rem;
  color: #000000;
  font-family: "JosefinSansBold", sans-serif;
  font-weight: 700;
  font-size: 5rem;
  line-height: 5rem;
  letter-spacing: -0.8%;
  @media only screen and (max-width: 1366px) {
    font-size: 4rem;
    margin-bottom: 1.2rem;
  }
  @media only screen and (max-width: 430px) {
    margin-bottom: 2.4rem;
    margin-left: 3.2rem;
    margin-right: 3.2rem;
    font-size: 2.8rem;
    line-height: 3.4rem;
  }
`;

export const Error404Button = styled.button`
  margin-top: 2.2rem;
  width: 75rem;
  height: 5.5rem;
  background-color: #f3f3f3;
  border-radius: 6.8rem;
  font-family: "Poppins", sans-serif;
  border: none;
  color: #636260;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.8rem;
  text-align: center;
  cursor: pointer;
  @media only screen and (max-width: 430px) {
    margin-top: 1.2rem;
    width: 32.7rem;
    height: 4.4rem;
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;
