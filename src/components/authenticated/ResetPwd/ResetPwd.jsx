import InvisibleEye from "../../../assets/icons/eye_button.svg";
import VisibleEye from "../../../assets/icons/visible_eye_button.svg";
import logoName from "../../../assets/icons/linkdev_logo_name_black.svg";
import { useState, useEffect } from "react";
import { resetpwd } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useMatch } from "react-router-dom";

import {
  Container,
  ResetLogoName,
  ResetTitle,
  ResetButton,
  ResetForm,
  ResetPasswordArea,
  ResetConfirmPasswordArea,
  Error,
  DisplayButton,
  ResetInput,
  ButtonTitle,
  CopyrightFooter,
} from "./ResetPwd.styled";

const Resetpwd = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated === true) {
      return navigate("/login");
    }
  }, [isAuthenticated]);
  //get isAuthenticated from store, if it is true, direct to Login

  const [formData, setFormData] = useState({
    password: "",
    pwdConfirm: "",
  });
  const { password, pwdConfirm } = formData;
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [errorNotice, setErrorNotice] = useState("");
  const [pwdShown, setPwdShown] = useState(false);
  const [pwdConfirmShown, setPwdConfirmShown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resetToken = useMatch("/resetpwd/:id");
  const data = resetToken.params.id;
  //take token from url

  const validate = (values) => {
    const errors = {};
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
  //password input must not be empty and use 6 to 12 characters with letters & numbers;

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
      resetpwd(password, setErrorNotice, dispatch, data);
    }
  }, [formErrors]);

  return (
    <Container>
      <ResetForm onSubmit={(e) => onSubmit(e)}>
        <ResetLogoName onClick={() => navigate("/")} src={logoName} />
        <ResetTitle>RESET your password?</ResetTitle>

        <ResetPasswordArea>
          <ResetInput
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
        </ResetPasswordArea>

        {formErrors.password && <Error>{formErrors.password}</Error>}

        <ResetConfirmPasswordArea>
          <ResetInput
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
        </ResetConfirmPasswordArea>

        {formErrors.pwdConfirm && <Error>{formErrors.pwdConfirm}</Error>}
        {errorNotice && <Error>{errorNotice}</Error>}

        <ResetButton type="submit">
          <ButtonTitle>Submit</ButtonTitle>
        </ResetButton>
      </ResetForm>

      <CopyrightFooter>
        Copyright ⓒ 2022 LinkDev all right reserved.
      </CopyrightFooter>
    </Container>
  );
};

export default Resetpwd;
