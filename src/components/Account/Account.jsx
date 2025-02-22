import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Wrapper,
  InnerWrapper,
  Logo,
  StyledHeader,
  StyledBtnToMyLink,
  ContentWrapper,
  DisplayContainer,
  StyledDeleteBtn,
  CopyrightFooter,
} from "./Account.style";
import arrow from "../../assets/icons/right_arrow_white.svg";
import LinkdevLogo from "../../assets/icons/linkdev_logo_name_black.svg";
import DeletePopup from "./PopupDelete/PopupDelete";

function Account() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("name");
  const userEmail = localStorage.getItem("email");
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Wrapper>
      <InnerWrapper>
        <Logo
          onClick={() => navigate("/")}
          src={LinkdevLogo}
          alt="Website logo"
        />

        <StyledHeader>
          <h2>My account</h2>
          <StyledBtnToMyLink onClick={() => navigate("/dashboard")}>
            <span>My link</span>
            <img src={arrow} alt="link button" />
          </StyledBtnToMyLink>
        </StyledHeader>

        <ContentWrapper>
          <h3>User information</h3>
          <DisplayContainer>
            <span>Username</span>
            <div>{userName}</div>
          </DisplayContainer>

          <DisplayContainer>
            <span>Email</span>
            <div>{userEmail}</div>
          </DisplayContainer>
        </ContentWrapper>

        <StyledDeleteBtn onClick={() => setShowPopup(true)}>
          Delete your account
        </StyledDeleteBtn>
        <DeletePopup showPopup={showPopup} setShowPopup={setShowPopup} />
      </InnerWrapper>

      <CopyrightFooter>
        Copyright ⓒ 2022 LinkDev all right reserved.
      </CopyrightFooter>
    </Wrapper>
  );
}

export default Account;
