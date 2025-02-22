/* eslint-disable prettier/prettier */
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import arrow from "../../../../assets/icons/arrow_left_diff.svg";
import x from "../../../../assets/icons/x.svg";
import logoName from "../../../../assets/icons/linkdev_logo_name.svg";
import banner from "../../../../assets/images/Banner.png";
import LoadingSpinner from "../LoadingSpinner/index";

import {
  Container,
  VerifyBody,
  Arrow,
  VerifyTitle,
  VerifySubTitle,
  InputWraper,
  InputContent,
  InputImg,
  Input,
  ErrorMsg,
  Button,
  Resend,
  VerifyDisplay,
  VerifyLogoName,
  VerifyBanner,
  CopyrightFooter,
  SuccessResendAlert,
} from "./style.jsx";
import { getVerifyResult, sendMailCode } from "./service.js";
import { setUnAuthenticated } from "../../../../redux/auth";
import { deleteAccount } from "../../../../actions/index";

const Verify = () => {
  const [value, setValue] = useState([0, new Array(3).fill(null)]); // tofixbug
  // const [value, setValue] = useState(new Array(4).fill(null)); // verify code value
  const inputRef = useRef([]); // input dom object
  const inputArr = new Array(4).fill(1); // generate input array (for dom loop)
  const [isLoading, setIsLoading] = useState(false); // verify loading status (control button loading)
  const [verifyValue, setVerifyValue] = useState(true); // verify result (control input error status)

  const dispatch = useDispatch();
  const navigate = useNavigate(); // used for page redirection
  const disableStyle = {
    cursor: "not-allowed",
  };
  const pointerStyle = {
    cursor: "pointer",
  };

  // input focus
  const handelFocus = () => {
    // find the empty input's index
    let index = value.findIndex((e) => !e);
    // while find empty input, focus on it
    if (index !== -1) inputRef.current[index].focus();
  };

  // input change
  const handelInput = (e, i) => {
    const inputValue = e.target.value;
    if (inputValue) {
      const val = value.slice(0); //copy value
      val[i] = inputValue.length > 1 ? inputValue.substring(1) : inputValue; // get input value
      setValue(val);
    } else {
      const val = value.slice(0); // deep clone
      val[i] = ""; // get input value
      setValue(val);
    }
  };

  // input keydown(listen backspace)
  const handelKeyDown = (e, i) => {
    // press Backspace key
    if (e.keyCode === 8) {
      const val = value.slice(0); // copy value
      const index = val.findIndex((ele) => !ele); // find empty index
      if (index !== -1) {
        val[i - 1] = null; // delete the last not empty input
        setValue(val);
      } else {
        val[i] = null;
        setValue(val);
      }
    }
  };

  // button click
  const handelButtonClick = () => {
    setIsLoading(true);
    // get the result of code verify
    getVerifyResult(value.join("")).then((res) => {
      if (res && res.status == 200) {
        // redirection to congratulation page
        navigate("/congratulation", { state: { hasAuth: true } });
      }
      setIsLoading(false);
      setVerifyValue(res);
      setValue(new Array(4).fill(null));
    });
  };

  // watch input value change
  useEffect(() => {
    // if (value.every((e) => !e)) return; // do not watch the first render change
    let index = value.findIndex((e) => !e); // find the empty input's index
    if (index !== -1) {
      inputRef.current[index].focus(); // focus on the first empty input
    } else {
      //when all inputs have values, begin verify
      inputRef.current[value.length - 1].blur(); // blur the last input
    }
  }, [value]);

  useEffect(() => {
    setTimeout(() => {
      // to fix bug
      setValue(new Array(4).fill(null));
    }, 0);
  }, []);

  const handleGoBack = () => {
    deleteAccount();
    localStorage.clear();
    dispatch(setUnAuthenticated());
    navigate("/register");
  };

  const [isResendClick, setIsResendClick] = useState(false);
  const [showResendText, setShowResendText] = useState(false);

  const handleResendBtn = () => {
    sendMailCode();
    setIsResendClick(true);
  };
  // Delay one second to display "code has been resent" note
  useEffect(() => {
    if (isResendClick) {
      const timeoutId = setTimeout(() => {
        setShowResendText(true);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [isResendClick]);

  return (
    <div>
      <Container>
        <VerifyBody>
          <Arrow
            src={arrow}
            alt="go back to register page"
            onClick={handleGoBack}
          ></Arrow>
          <VerifyTitle>Verify your email address</VerifyTitle>
          <VerifySubTitle>
            A message with a verification code has been sent to your device.
            Enter the verification code to continue.
          </VerifySubTitle>
          <InputWraper>
            {inputArr.map((_, i) => (
              <InputContent key={i}>
                <Input
                  ref={(ref) => (inputRef.current[i] = ref)}
                  value={""}
                  maxlength="1"
                  error={!verifyValue}
                  onFocus={handelFocus}
                  onInput={(e) => handelInput(e, i)}
                  onKeyDown={(e) => handelKeyDown(e, i)}
                ></Input>
                {value[i] && <InputImg src={x} alt=""></InputImg>}
              </InputContent>
            ))}
            {!verifyValue && <ErrorMsg>Wrong number</ErrorMsg>}
          </InputWraper>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <Button
              style={
                isLoading || value.some((e) => !e) ? disableStyle : pointerStyle
              }
              onClick={handelButtonClick}
            >
              {!verifyValue ? "Retry" : "Verify"}
            </Button>
          )}
          <Resend onClick={handleResendBtn}>
            Resend a new code
            {showResendText && (
              <SuccessResendAlert>
                The verify code has been resent.
              </SuccessResendAlert>
            )}
          </Resend>
        </VerifyBody>

        <VerifyDisplay>
          <VerifyLogoName onClick={() => navigate("/")} src={logoName} />
        </VerifyDisplay>
        <VerifyBanner src={banner} alt="VerifyBanner" />
        <CopyrightFooter>
          Copyright ⓒ 2022 LinkDev all right reserved.
        </CopyrightFooter>
      </Container>
    </div>
  );
};

export default Verify;
