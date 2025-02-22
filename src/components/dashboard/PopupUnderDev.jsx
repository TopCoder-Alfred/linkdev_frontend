import eye from "../../assets/icons/large_eye.svg";
import {
  Wrapper,
  InnerWrapper,
  BtnContainer,
  StyledBtn,
} from "./PopupUnderDev.style";

function UnderDevPopup({ setShowPopup }) {
  return (
    <Wrapper>
      <InnerWrapper>
        <img src={eye} alt="caution when user delete" />
        <p>Features are under development</p>
        <BtnContainer>
          <StyledBtn onClick={() => setShowPopup(false)}>Understand</StyledBtn>
        </BtnContainer>
      </InnerWrapper>
    </Wrapper>
  );
}

export default UnderDevPopup;
