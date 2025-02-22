import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  user-select: none;
  text-align: center;
`;

export const Img = styled.img`
  width: 62.2;
  display: block;
  margin: 11rem auto 2.2rem;
`;

export const Title = styled.div`
  font-family: "JosefinSansBold";
  font-weight: 700;
  font-size: 50px;
  line-height: 50px;
  text-align: center;
  letter-spacing: -0.008em;
  color: #000000;
  margin-bottom: 3.4rem;
`;

export const SubTitle = styled.div`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #636260;
  margin-bottom: 3.8rem;
`;

export const ButtonWrap = styled.div`
  width: 908px;
  margin: 0 auto 16.1rem;
`;

export const Button = styled.a`
  display: inline-block;
  height: 5.5rem;
  width: 42rem;
  border-radius: 2.8rem;
  background: ${(props) => (props.type === "normal" ? "white" : "#0BA4C6")};
  color: ${(props) => (props.type === "normal" ? "#636260" : "white")};
  font-weight: ${(props) => (props.type === "normal" ? "400" : "600")};
  margin-right: ${(props) => (props.type === "normal" ? "66px" : "")};
  border: ${(props) =>
    props.type === "normal" ? "1px solid rgba(0, 0, 0, 0.3)" : ""};
  font-size: 1.8rem;
  font-family: "Poppins";
  text-align: center;
  line-height: 5.5rem;
  cursor: pointer;
`;
