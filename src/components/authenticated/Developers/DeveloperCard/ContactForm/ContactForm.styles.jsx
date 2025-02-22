import styled from "styled-components";
import headerContainerImg from "../../../../../assets/images/developer_page_contact_form_header_image.svg";
import headerContainerImgMobile from "../../../../../assets/images/developer_page_contact_form_header_image_mobile.svg";
export const PageContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const ContactFormContainer = styled.div`
  width: 70.6rem;
  height: 78.4rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 3rem;
  z-index: 3;
  @media only screen and (max-width: 768px) {
    top: 14.3rem;
    left: 28.7rem;
  }
  @media only screen and (max-width: 1280px) {
    top: 12.8rem;
    left: 2.4rem;
    width: 32.8rem;
    height: 41.1rem;
    border-radius: 1.6rem;
  }
`;

export const FormHeaderAreaContainer = styled.div`
  width: 70.6rem;
  height: 21.8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  background: url(${headerContainerImg});
  @media only screen and (max-width: 1280px) {
    width: 32.8rem;
    height: 9.6rem;
    background: url(${headerContainerImgMobile});
  }
`;

export const FormHeaderContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1280px) {
    margin-top: 4.4rem;
  }
`;

export const FormHeader = styled.h2`
  font-family: "JosefinSansBold", sans-serif;
  font-weight: 700;
  font-size: 5.6rem;
  line-height: 5rem;
  letter-spacing: -0.8%;
  color: #ffffff;
  text-shadow: 0px 7.875px 4.375px rgba(0, 0, 0, 0.25);
  @media only screen and (max-width: 1280px) {
    font-size: 2.8rem;
    line-height: 3.4rem;
  }
`;

export const FormContainer = styled.form`
  width: 70.6rem;
  height: 56.6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 1280px) {
    width: 32.8rem;
    height: 31.5rem;
  }
`;

export const FormBody = styled.div`
  width: 70.6rem;
  height: 47.6rem; // H163px + 214px - 64px
  margin-top: 6.4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 1280px) {
    width: 32.8rem;
    height: 21.9rem; //H71px + 160px - 12px
    margin-top: 1.2rem;
  }
`;

export const FullNameAndEmailLineContainer = styled.div`
  width: 60.2rem; //W706px - ML52px - MR52px
  height: 5rem;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 1280px) {
    width: 28rem;
    height: auto;
    margin-bottom: 1.2rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const FullNameAndEmailLabelContainer = styled.div`
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1280px) {
    height: auto;
  }
`;

export const FullNameAndEmailLabel = styled.label`
  font-family: "PoppinsMedium", sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2rem;
  color: #636260;
  @media only screen and (max-width: 1280px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
    margin-bottom: 0.4rem;
  }
`;

export const FullNameAndEmailInput = styled.input`
  width: 48.2rem;
  height: 5rem;
  border: none;
  border-radius: 1.6rem;
  background: ${(props) => props.theme.colors.wildSand};
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  font-weight: 400;
  line-height: 2rem;
  padding-left: 2.4rem;
  color: #636260;
  &::placeholder {
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSizes.extraSmall};
    line-height: 2rem;
    color: rgba(99, 98, 96, 0.3);
  }
  &:focus {
    outline: none;
  }
  @media only screen and (max-width: 1280px) {
    padding-left: 1.6rem;
    width: 28rem;
    height: 3.2rem;
    border-radius: 0.8rem;
    &::placeholder {
      font-size: 1.1rem;
      line-height: 1.3rem;
    }
  }
`;

export const MessageLineContainer = styled.div`
  width: 60.2rem; //W706px - ML52px - MR52px
  height: 16.3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 1280px) {
    width: 28rem;
    height: auto;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const MessageLabelContainer = styled.div`
  height: 16.3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 1280px) {
    height: auto;
  }
`;

export const MessageLabel = styled.label`
  //margin-top: 1.5rem;
  font-family: "PoppinsMedium", sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2rem;
  color: #636260;
  @media only screen and (max-width: 1280px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
    margin-bottom: 0.4rem;
  }
`;

export const MessageInput = styled.textarea`
  width: 48.2rem;
  height: 16.3rem;
  border: none;
  border-radius: 1.6rem;
  background: ${(props) => props.theme.colors.wildSand};
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  font-weight: 400;
  line-height: 2rem;
  padding: 1.5rem 0 0 2.4rem;
  color: #636260;
  border-radius: 0.8rem;
  &::placeholder {
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSizes.extraSmall};
    line-height: 2rem;
    color: rgba(99, 98, 96, 0.3);
  }
  &:focus {
    outline: none;
  }
  @media only screen and (max-width: 1280px) {
    width: 28rem;
    height: 7.1rem;
    padding-left: 1.6rem;
    padding-top: 1rem;
    &::placeholder {
      font-size: 1.1rem;
      line-height: 1.5rem;
      border-radius: 0.8rem;
    }
  }
`;

export const ButtonAreaContainer = styled.section`
  width: 70.6rem;
  height: 18.9rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  @media only screen and (max-width: 1280px) {
    width: 32.8rem;
    height: 8.4rem;
  }
`;

export const ButtonPositionContainer = styled.div`
  width: 48.2rem; //W220px + 314px - MR52px
  height: 5.5rem;
  margin-left: 17.2rem;
  margin-bottom: 7.8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 1280px) {
    width: 28rem; //W132px + 172px - MR24px
    height: 4.4rem;
    margin-left: 2.4rem;
    margin-bottom: 2.4rem;
  }
`;

export const CancelButton = styled.button`
  width: 22rem;
  height: 5.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.8rem;
  line-height: 100%;
  color: rgba(0, 0, 0, 0.3);
  border: 0.525px solid rgba(0, 0, 0, 0.3);
  border-radius: 2.975rem;
  text-align: center;
  background-color: #ffffff;
  cursor: pointer;
  @media only screen and (max-width: 1280px) {
    width: 13.2rem;
    height: 4.4rem;
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const SubmitButton = styled.button`
  width: 22rem;
  height: 5.5rem;
  font-family: "PoppinsSemiBold", sans-serif;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.8rem;
  line-height: 100%;
  color: rgba(99, 98, 96, 0.3);
  text-align: center;
  border: none;
  border-radius: 2.975rem;
  background: #f3f3f3;
  pointer-events: none;
  @media only screen and (max-width: 1280px) {
    width: 13.2rem;
    height: 4.4rem;
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;
