import InvisibleEye from "../../../assets/icons/eye_button.svg";
import VisibleEye from "../../../assets/icons/visible_eye_button.svg";
import logoName from "../../../assets/icons/linkdev_logo_name.svg";
import registerFeature from "../../../assets/icons/register_feature.svg";
import { useState, useEffect } from "react";
import { register } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  RegisterContainer,
  DisplayArea,
  RegisterLogoName,
  RegisterForm,
  RegisterTitle,
  RegisterInfo,
  RegisterInput,
  PasswordArea,
  DisplayButton,
  RegisterAgreement,
  RegisterAgreementContent,
  CreateButton,
  ButtonTitle,
  SignInLink,
  SignIn,
  Error,
  RegisterFeature,
  CopyrightFooter,
} from "./RegisterForm";

// import { sendMailCode } from "../EmailVerification/Verification/service.js";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    pwdConfirm: "",
  });

  const { name, email, password, pwdConfirm } = formData;
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState("");
  const [pwdShown, setPwdShown] = useState(false);
  const [pwdConfirmShown, setPwdConfirmShown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 15) {
      errors.name = "Must be 15 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/.test(password)) {
      errors.password = "Use 6 to 12 characters with letters & numbers";
    }

    if (!values.pwdConfirm) {
      errors.pwdConfirm = "Required";
    } else if (values.password !== values.pwdConfirm) {
      errors.pwdConfirm = "Passwords didn't match. Try again.";
    }
    return errors;
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      register({ name, email, password }, setError, dispatch);
    }
  }, [formErrors]);

  useEffect(() => {
    if (isAuthenticated) {
      // sendMailCode(); //发送邮件放这儿
      navigate("/");
    }
  }, [isAuthenticated]);

  const onSubmit = (e) => {
    e.preventDefault();
    const res = validate(formData);
    if (res) setFormErrors(res);
    setIsSubmit(true);
  };

  return (
    <RegisterContainer>
      <DisplayArea>
        <RegisterLogoName src={logoName} onClick={() => navigate("/")} />
      </DisplayArea>

      <RegisterFeature src={registerFeature} alt="Register Feature" />
      <RegisterForm onSubmit={(e) => onSubmit(e)}>
        <RegisterTitle>Create your account</RegisterTitle>
        <RegisterInfo>
          Choose your LinkDev username. It will show on your shared page. You
          can change it anytime.
        </RegisterInfo>
        <RegisterInput
          placeholder="LinkDev Username"
          type="text"
          name="name"
          value={name}
          onChange={(e) => onChange(e)}
        />
        {formErrors.name && <Error>{formErrors.name}</Error>}

        <RegisterInput
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
        />
        {formErrors.email && <Error>{formErrors.email}</Error>}
        <PasswordArea>
          <RegisterInput
            placeholder="Password"
            type={pwdShown ? "text" : "password"}
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
          <DisplayButton
            src={pwdShown ? VisibleEye : InvisibleEye}
            alt="display button"
            onClick={() => setPwdShown(!pwdShown)}
          />
        </PasswordArea>
        {formErrors.password && <Error>{formErrors.password}</Error>}
        <PasswordArea>
          <RegisterInput
            placeholder="Confirm Password"
            type={pwdConfirmShown ? "text" : "password"}
            name="pwdConfirm"
            value={pwdConfirm}
            onChange={(e) => onChange(e)}
          />
          <DisplayButton
            src={pwdConfirmShown ? VisibleEye : InvisibleEye}
            alt="display button"
            onClick={() => setPwdConfirmShown(!pwdConfirmShown)}
          />
        </PasswordArea>
        {formErrors.pwdConfirm && <Error>{formErrors.pwdConfirm}</Error>}
        {error && <Error>{error}</Error>}
        <RegisterAgreement>
          By clicking Create account, you agree to LinkDev's{" "}
          <RegisterAgreementContent onClick={() => navigate("/registerterms")}>
            Terms and Conditions
          </RegisterAgreementContent>{" "}
          confirm you have read our{" "}
          <RegisterAgreementContent
            onClick={() => navigate("/registerprivacy")}
          >
            Privacy Notice
          </RegisterAgreementContent>
          . You may receive offers, news and updates from us.
        </RegisterAgreement>
        <CreateButton>
          <ButtonTitle>Create account</ButtonTitle>
        </CreateButton>
        <SignInLink>
          <SignIn onClick={() => navigate("/login")}>
            Already have an account ?
          </SignIn>
        </SignInLink>
      </RegisterForm>
      <CopyrightFooter>
        Copyright ⓒ 2022 LinkDev all right reserved.
      </CopyrightFooter>
    </RegisterContainer>
  );
};

export default Register;
