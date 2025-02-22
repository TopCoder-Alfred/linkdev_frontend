import invisibleEye from "../../../assets/icons/eye_button.svg";
import visibleEye from "../../../assets/icons/visible_eye_button.svg";
import logoName from "../../../assets/icons/linkdev_logo_name.svg";
import loginFeature from "../../../assets/icons/login_feature.svg";

import {
  LoginTitle,
  ForgetPswContainer,
  ForgetPswSpan,
  LoginButton,
  CreateOne,
  LoginAgreementContent,
  LoginAgreement,
  LoginDisplay,
  LoginLogoName,
  ErrorMsg,
  LoginFeature,
  CopyrightFooter,
  LoginContainer,
  LoginForm,
  LoginInput,
  LoginPasswordArea,
  DisplayButton,
  LoginUnderlineLink,
  LoginSubmitButtonTitle,
} from "./Login.styled";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { login } from "../../../actions/index";

const Login = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    if (isAuthenticated) {
      return navigate("/dashboard");
    }
  }, [isAuthenticated]); //get isAuthenticated from store, if it is true, direct to Dashboard

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [pwdVisible, setPwdVisible] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const { email, password } = formData;
  const [errorMsg, setErrorMsg] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  }; //email and password input must not be empty;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (isSubmit) {
      login({ email, password }, setErrorMsg, dispatch);
    }
  }, [formErrors]);

  return (
    <LoginContainer>
      <LoginForm onSubmit={(e) => onSubmit(e)}>
        <LoginTitle>Log in to your LinkDev</LoginTitle>
        <LoginInput
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
        />
        {formErrors.email && <ErrorMsg>{formErrors.email}</ErrorMsg>}
        <LoginPasswordArea>
          <LoginInput
            placeholder="Password"
            type={pwdVisible ? "text" : "password"}
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
          <DisplayButton
            src={pwdVisible ? visibleEye : invisibleEye}
            alt="display button"
            onClick={() => setPwdVisible(!pwdVisible)}
          />
        </LoginPasswordArea>
        {formErrors.password && <ErrorMsg>{formErrors.password}</ErrorMsg>}
        {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}

        <ForgetPswContainer>
          <LoginUnderlineLink onClick={() => navigate("/forgetpwd")}>
            <ForgetPswSpan> Forget Password? </ForgetPswSpan>
          </LoginUnderlineLink>
        </ForgetPswContainer>

        <LoginButton type="submit">
          <LoginSubmitButtonTitle>Log in</LoginSubmitButtonTitle>
        </LoginButton>

        <CreateOne>
          Don't have a LinkDev account?{" "}
          <LoginAgreementContent onClick={() => navigate("/register")}>
            Create One
          </LoginAgreementContent>
        </CreateOne>

        <LoginAgreement>
          This site is protected by reCAPTCHA and the{" "}
          <LoginAgreementContent onClick={() => navigate("/loginterms")}>
            Terms and Conditions{" "}
          </LoginAgreementContent>
          and{" "}
          <LoginAgreementContent onClick={() => navigate("/loginprivacy")}>
            Google Privacy Policy
          </LoginAgreementContent>{" "}
          apply.
          {/* change to terms and policy pages After it has been created */}
        </LoginAgreement>
      </LoginForm>

      <LoginDisplay>
        <LoginLogoName onClick={() => navigate("/")} src={logoName} />
      </LoginDisplay>
      <LoginFeature src={loginFeature} alt="Login Feature" />
      <CopyrightFooter>
        Copyright ⓒ 2022 LinkDev all right reserved.
      </CopyrightFooter>
    </LoginContainer>
  );
};

export default Login;
