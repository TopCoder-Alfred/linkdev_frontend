import styled from "styled-components";
import { Title } from "../../../Public.styled";

export const SettingManagement = styled.div`
  width: calc(100% - 60rem);
  overflow: auto;
  display: flex;
  justify-content: center;
  border-right: 0.15rem solid ${({ theme }) => theme.colors.lineColor};
  @media only screen and (max-width: 1500px) {
    width: calc(100% - 50rem);
  }
  @media only screen and (max-width: 1253px) {
    width: calc(100% - 40rem);
  }
  @media only screen and (max-width: 1002px) {
    width: calc(100% - 30rem);
  }
  @media only screen and (max-width: 743px) {
    width: 100%;
    border-right: none;
  }
`;

export const SettingManagementInner = styled.div`
  margin: 6rem auto;
  @media only screen and (max-width: 743px) {
    margin: 7rem 6rem 6rem 6rem; // the margin-top for sharing link in the mobile version
  }
  @media only screen and (max-width: 431px) {
    margin: 8rem 2.8rem 2.8rem 2.8rem; // the margin-top for sharing link in the mobile version
  }
`;

export const SettingTitle = styled(Title)``;

export const Form = styled.form`
  width: 50vw;
  height: 32rem;
  padding: 2.4rem 3.7rem;
  margin-top: 4rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.6rem;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 743px) {
    width: 85vw;
  }
`;

export const FormTitle = styled.h3`
  font-family: "PoppinsSemiBold", sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 500;
  font-style: normal;
  margin-bottom: 4rem;
  line-height: 4rem;
`;

export const FormContent = styled.div`
  display: flex;
  height: 7.2rem;
  width: 100%;
  justify-content: space-between;
`;

export const SettingInfo = styled.p`
  font-family: "PoppinsMedium", sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.StormDust};
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
  margin-right: 4rem;
`;
export const CheckBoxLabel = styled.label`
  /* border: 1px solid red; */
  position: absolute;
  width: 4.8rem;
  height: 2.4rem;
  border-radius: 1.6rem;
  background: ${({ theme }) => theme.colors.lineColor};
  cursor: pointer;
  &::after {
    /* border: 1px solid red; */
    content: "";
    display: block;
    border-radius: 50%;
    width: 1.8rem;
    height: 1.8rem;
    margin: 0.3rem;
    background: #ffffff;
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  /* border-radius: 1.5rem;
  width: 4.2rem;
  height: 2.6rem; */
  &:checked + ${CheckBoxLabel} {
    background: ${({ theme }) => theme.colors.seaBuckthorn};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 1.8rem;
      height: 1.8rem;
      margin-left: 2.8rem;
      transition: 0.2s;
    }
  }
`;
