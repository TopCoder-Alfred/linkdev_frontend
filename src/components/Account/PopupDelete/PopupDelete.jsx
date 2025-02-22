import eye from "../../../assets/icons/large_eye.svg";
import {
  Wrapper,
  InnerWrapper,
  BtnContainer,
  StyledBtn,
  WhiteBtn,
} from "./PopupDelete.style";
import { deleteAccount } from "../../../actions/index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function DeletePopup({ showPopup, setShowPopup }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    showPopup && (
      <Wrapper>
        <InnerWrapper>
          <img src={eye} alt="caution when user delete" />
          <p> Are you confirm to delete your account? </p>
          <BtnContainer>
            <StyledBtn onClick={() => setShowPopup(false)}>No</StyledBtn>
            <WhiteBtn onClick={() => deleteAccount(navigate, dispatch)}>
              Yes
            </WhiteBtn>
          </BtnContainer>
        </InnerWrapper>
      </Wrapper>
    )
  );
}

export default DeletePopup;
