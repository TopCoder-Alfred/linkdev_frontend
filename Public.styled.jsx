import styled from "styled-components";

export const Form = styled.form`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.extraLarge};
  font-family: "PoppinsBold", sans-serif;
  line-height: 5rem;
  letter-spacing: -0.008em;
`;

export const Container = styled.div`
  display: flex;
  font-family: ${(props) => props.theme.fonts[0]}, sans-serif;
  font-style: normal;
`;

export const Display = styled.section`
  width: 55rem;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.bamboo};
  position: relative;
  border-radius: 0rem 5rem 5rem 0rem;
`;

export const Logo = styled.img`
  position: absolute;
  content: "";
  width: 8rem;
  height: 8rem;
  left: 4rem;
  top: 4rem;
  border-radius: 2.8rem;
`;

export const EyeButton = styled.img`
  position: absolute;
  bottom: 1.4rem;
  right: 2.5rem;
  cursor: pointer;
`;

export const Information = styled.p`
  font-family: "PoppinsMedium", sans-serif;
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: 2rem;
  color: ${(props) => props.theme.colors.StormDust};
  margin: 4rem 0 2.5rem 0;
`;

export const Input = styled.input`
  width: 75rem;
  height: 5rem;
  margin-top: 1.5rem;
  border: none;
  border-radius: 1.6rem;
  background: ${(props) => props.theme.colors.wildSand};
  font-family: "Poppins", sans-serif;
  line-height: normal;
  padding-left: 2.6rem;
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  &::placeholder {
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSizes.extraSmall};
    font-family: "Poppins", sans-serif;
    line-height: 2rem;
    color: ${(props) => props.theme.colors.StormDust};
  }
  &:focus {
    outline: none;
  }
`;

export const PasswordArea = styled.div`
  position: relative;
`;

export const Agreement = styled.div`
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  font-family: "Poppins", sans-serif;
  line-height: 2rem;
  margin: 6.5rem 21.5rem 5rem 21.5rem;
  color: ${(props) => props.theme.colors.StormDust};
`;

export const AgreementContent = styled.a`
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  line-height: 2rem;
  color: ${(props) => props.theme.colors.bamboo};
  text-decoration: underline;
`;

export const SubmitButton = styled.button`
  width: 75rem;
  height: 5.5rem;
  background: ${(props) => props.theme.colors.seaBuckthorn};
  border-radius: 6.8rem;
  border: none;
  cursor: pointer;
`;

export const SubmitButtonTitle = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-family: "PoppinsSemiBold", sans-serif;
  line-height: 100%;
  color: ${(props) => props.theme.colors.white};
`;

export const UnderlineLink = styled.a`
  margin-top: 1.5rem;
`;

export const UnderlineLinkSpan = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  line-height: 2rem;
  color: ${(props) => props.theme.colors.bamboo};
  text-decoration: underline;
`;

export const RegisterName = styled.img`
  position: absolute;
  content: "";
  top: 6.2rem;
  left: 13.5rem;
`;

export const Copyright = styled.p`
  position: absolute;
  width: 100%;
  bottom: 0rem;
  text-align: center;
  font-family: "PoppinsMedium", sans-serif;
  margin-bottom: 1.2rem;
  font-size: clamp(1.1rem, 1vw, 1.3rem);
  line-height: clamp(1.3rem, 1vw, 3.6rem);
  font-weight: 500;
  color: rgba(0, 0, 0, 0.3);
  @media only screen and (max-width: 1096px) {
    position: static;
  }
`;

// export const IframeArea = styled.section`
//   width: 30%;
//   height: 100%;
//   display: flex;
//   position: relative;
// `;

// export const IframeContent = styled.iframe`
//   position: absolute;
//   content: "";
//   border: none;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   transform: scale(0.65);
// `;

// export const IframeTheme = styled.img`
//   top: 12%;
//   left: 25%;
//   width: 32rem;
//   height: 65rem;
//   margin: auto;
// `;
