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
import emailjs from "@emailjs/browser";

const ContactForm = ({ onSetFormDisplay, onSubmissionPopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formData;
  const form = useRef();

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("Gmail", "linkdev_default", e.target, "yKobXsbxao7oqPQvM")
      .then(
        (result) => {
          console.log(result.text);
          onSubmissionPopup();
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  };

  return (
    <PageContainer>
      <ContactFormContainer>
        <FormHeaderAreaContainer>
          <FormHeaderContainer>
            <FormHeader>CONTACT FORM</FormHeader>
          </FormHeaderContainer>
        </FormHeaderAreaContainer>
        <FormContainer id="contactForm" ref={form} onSubmit={sendEmail}>
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
                placeholder="Explain your problem or issue. We are here to support"
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
};

export default ContactForm;
