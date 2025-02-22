import { Container, Img, Title, SubTitle, ButtonWrap, Button } from "./style";
import verify from "../../../../assets/images/Verify.png";
import { useNavigate, useLocation } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  // const goHome = () => navigate("www.linkdevapp.com");
  const goProfile = () => {
    navigate("/dashboard");
  }; // todo go Profile page
  const goMainPage = () => {
    navigate("/");
  };
  let hasAuth = false;

  if (state) {
    hasAuth = state.hasAuth;
  }

  return hasAuth ? (
    <Container>
      <Img src={verify} alt="verify"></Img>
      <Title>Congratulations!</Title>
      <SubTitle>
        Now you're ready to fill out your profile page. YES, you can also fill
        it out later.
      </SubTitle>
      <ButtonWrap>
        <Button type="normal" onClick={goMainPage}>
          Go back to main page
        </Button>
        <Button onClick={goProfile}>To fill out my profile page</Button>
      </ButtonWrap>
    </Container>
  ) : (
    <container>
      <SubTitle>you have no permission to this page</SubTitle>
    </container>
  );
};

export default Verify;
