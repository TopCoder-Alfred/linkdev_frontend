import errorImg from "../../../assets/images/404 2.svg";
import logo from "../../../assets/icons/linkdev_logo.svg";
import logoName from "../../../assets/icons/linkdev_name_black.svg";

import {
  Page404Logo,
  Page404Linkdev,
  ErrorImage,
  Container,
  Message,
  Error404Button,
} from "./Error404.styles";

import ContactForm from "./ContactForm";
import SubmissionPopup from "./SubmissionPopup";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const [formDisplay, setFormDisplay] = useState(false);
  const [submissionPopup, setSubmissionPopup] = useState(false);

  const navigate = useNavigate();
  const onSetFormDisplay = () => {
    setFormDisplay((prev) => !prev);
  };
  const onSubmissionPopup = () => {
    setSubmissionPopup((prev) => !prev);
  };

  return (
    <>
      {submissionPopup && (
        <SubmissionPopup
          onSubmissionPopup={onSubmissionPopup}
          onSetFormDisplay={onSetFormDisplay}
        />
      )}
      {formDisplay && (
        <ContactForm
          onSetFormDisplay={onSetFormDisplay}
          onSubmissionPopup={onSubmissionPopup}
        />
      )}
      <Page404Logo onClick={() => navigate("/")} src={logo} />
      <Page404Linkdev src={logoName} />
      <Container>
        <ErrorImage src={errorImg} />
        <Message>The page you requested wasn't found</Message>
        <Error404Button onClick={() => navigate(-1)}>Try again</Error404Button>
        <Error404Button onClick={() => onSetFormDisplay()}>
          Message us
        </Error404Button>
      </Container>
    </>
  );
};

export default Error404;
