import backButton from "../../../assets/icons/arrow_left_diff.svg";
import logoName from "../../../assets/icons/linkdev_logo_name_black.svg";
import { useState } from "react";

import {
  Container,
  Form,
  Title,
  Input,
  ResetpwdButton,
  BackButton,
  Error,
  SuccessAlert,
  CopyrightFooter,
  ForgetLogoName,
} from "./ForgetPwd.styled";
import { useNavigate } from "react-router-dom";
import { getResetPasswordLink } from "../../../actions/index";

const ForgetPwd = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const getPasswordResetLinkHandler = () => {
    if (email) {
      getResetPasswordLink(email, setError, setEmailSent);
    }
  };

  return (
    <Container>
      <BackButton
        src={backButton}
        alt="go back to login page"
        onClick={() => {
          navigate("/login");
        }}
      />
      <ForgetLogoName onClick={() => navigate("/")} src={logoName} />

      <Form>
        <Title>Forgot your password?</Title>
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        {error && <Error>{error}</Error>}
        <ResetpwdButton onClick={getPasswordResetLinkHandler}>
          Send reset email to yourself
        </ResetpwdButton>
        {emailSent && (
          <SuccessAlert>The reset password email has been sent.</SuccessAlert>
        )}
      </Form>

      <CopyrightFooter>
        Copyright ⓒ 2022 LinkDev all right reserved.
      </CopyrightFooter>
    </Container>
  );
};
export default ForgetPwd;
