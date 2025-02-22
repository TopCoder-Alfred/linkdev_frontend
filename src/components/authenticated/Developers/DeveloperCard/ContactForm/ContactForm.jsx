import {
  PageContainer,
  ContactFormContainer,
  FormHeaderAreaContainer,
  FormHeaderContainer,
  FormHeader,
  FormContainer,
  FormBody,
  FullNameAndEmailLineContainer,
  FullNameAndEmailLabelContainer,
  FullNameAndEmailLabel,
  FullNameAndEmailInput,
  MessageLineContainer,
  MessageLabelContainer,
  MessageLabel,
  MessageInput,
  ButtonAreaContainer,
  ButtonPositionContainer,
  CancelButton,
  SubmitButton,
} from "./ContactForm.styles";
import "./ContactForm.css";

import { useRef, useState } from "react";
// import SubmissionPopup from "../SubmissionPopup";
import { sendEmailToDev } from "../../../../../actions";
// import axios from "axios";

function ContactForm({ onSetFormDisplay, onSubmissionPopup, developerName }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { name, email, message } = formData;

  const onClickSubmitBtn = (e) => {
    e.preventDefault();
    sendEmailToDev(name, email, message, developerName);
    onSubmissionPopup();
  };

  const form = useRef();

  return (
    <PageContainer>
      <ContactFormContainer>
        <FormHeaderAreaContainer>
          <FormHeaderContainer>
            <FormHeader>CONTACT FORM</FormHeader>
          </FormHeaderContainer>
        </FormHeaderAreaContainer>
        <FormContainer id="contactForm" ref={form} onSubmit={onClickSubmitBtn}>
          <FormBody>
            <FullNameAndEmailLineContainer>
              <FullNameAndEmailLabelContainer>
                <FullNameAndEmailLabel>Full Name*</FullNameAndEmailLabel>
              </FullNameAndEmailLabelContainer>
              <FullNameAndEmailInput
                placeholder="Full Name"
                type="text"
                name="name"
                onChange={(e) => onChange(e)}
              ></FullNameAndEmailInput>
            </FullNameAndEmailLineContainer>
            <FullNameAndEmailLineContainer>
              <FullNameAndEmailLabelContainer>
                <FullNameAndEmailLabel>Email*</FullNameAndEmailLabel>
              </FullNameAndEmailLabelContainer>
              <FullNameAndEmailInput
                placeholder="Email"
                type="text"
                name="email"
                onChange={(e) => onChange(e)}
              />
            </FullNameAndEmailLineContainer>
            <MessageLineContainer>
              <MessageLabelContainer>
                <MessageLabel>Message*</MessageLabel>
              </MessageLabelContainer>
              <MessageInput
                placeholder="Please quick note, and I will contact you ASAP."
                type="text"
                name="message"
                onChange={(e) => onChange(e)}
              />
            </MessageLineContainer>
          </FormBody>
          <ButtonAreaContainer>
            <ButtonPositionContainer>
              <CancelButton onClick={() => onSetFormDisplay()}>
                Cancel
              </CancelButton>
              <SubmitButton
                type="submit"
                form="contactForm"
                className={
                  name != "" && email != "" && message != ""
                    ? "btnEnabled"
                    : null
                }
              >
                Submit
              </SubmitButton>
            </ButtonPositionContainer>
          </ButtonAreaContainer>
        </FormContainer>
      </ContactFormContainer>
    </PageContainer>
  );
}

export default ContactForm;
