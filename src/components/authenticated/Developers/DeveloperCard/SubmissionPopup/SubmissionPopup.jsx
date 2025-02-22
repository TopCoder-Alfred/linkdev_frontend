import {
  SubmissionPopupViewContainer,
  ImageAndFormContainer,
  ImageContainer,
  MonsterImage,
  SubmissionFormContainer,
  DisplayedMessageContainer,
  DisplayedMessageLineContainer,
  DisplayedMessage,
  OKButtonContainer,
  OKButton,
} from "./SubmissionPopup.styles";

import submissionFormImage from "../../../../../assets/images/submission_form_Image.svg";

const SubmissionPopup = ({ onSetFormDisplay, onSubmissionPopup }) => {
  const onClickOKBtn = () => {
    // e.preventDefault();
    onSetFormDisplay();
    onSubmissionPopup();
  };

  return (
    <div>
      <SubmissionPopupViewContainer>
        <ImageAndFormContainer>
          <ImageContainer>
            <MonsterImage src={submissionFormImage} />
          </ImageContainer>
          <SubmissionFormContainer>
            <DisplayedMessageContainer>
              <DisplayedMessageLineContainer>
                <DisplayedMessage>Successful</DisplayedMessage>
              </DisplayedMessageLineContainer>
              <DisplayedMessageLineContainer>
                <DisplayedMessage>Submission</DisplayedMessage>
              </DisplayedMessageLineContainer>
            </DisplayedMessageContainer>
            <OKButtonContainer onClick={() => onClickOKBtn()}>
              <OKButton>OK</OKButton>
            </OKButtonContainer>
          </SubmissionFormContainer>
        </ImageAndFormContainer>
      </SubmissionPopupViewContainer>
    </div>
  );
};

export default SubmissionPopup;
