import {
  Card,
  AvatarContainer,
  AvatarWrapper,
  Avatar,
  InfoContainer,
  UserNameContainer,
  UserName,
  UserTitleContainer,
  UserTitle,
  ContactAndProfileSection,
  ContactMeContainer,
  ViewProfileContainer,
  ContactAndProfileLink,
} from "./DeveloperCard.styled";
import defaultAvatar from "../../../../assets/avatar/defaultAvatarLarge.svg";

import ContactForm from "./ContactForm";
import SubmissionPopup from "./SubmissionPopup";

import { useState } from "react";

const DevelopersCard = ({
  name,
  cardColor,
  btnColor,
  btnHoverColor,
  title,
  avatar,
}) => {
  const [formDisplay, setFormDisplay] = useState(false);
  const [submissionPopup, setSubmissionPopup] = useState(false);
  const linkUrl = `https://aesthetic-sopapillas-a7fe6f.netlify.app//${name}`;

  const onSetFormDisplay = () => {
    setFormDisplay((prev) => !prev);
  };
  const onSubmissionPopup = () => {
    setSubmissionPopup((prev) => !prev);
  };
  return (
    <>
      {submissionPopup && (
        <SubmissionPopup
          onSubmissionPopup={onSubmissionPopup}
          onSetFormDisplay={onSetFormDisplay}
        />
      )}
      {formDisplay && (
        <ContactForm
          onSetFormDisplay={onSetFormDisplay}
          onSubmissionPopup={onSubmissionPopup}
          developerName={name}
        />
      )}
      <Card background={cardColor}>
        <AvatarContainer>
          <AvatarWrapper>
            <Avatar src={avatar || defaultAvatar} />
          </AvatarWrapper>
        </AvatarContainer>
        <InfoContainer>
          <UserNameContainer>
            <UserName>@{name}</UserName>
          </UserNameContainer>
          <UserTitleContainer>
            <UserTitle>{title}</UserTitle>
          </UserTitleContainer>
          <ContactAndProfileSection>
            <ContactMeContainer onClick={() => onSetFormDisplay()}>
              <ContactAndProfileLink color="#636260">
                Contact me
              </ContactAndProfileLink>
            </ContactMeContainer>
            <ViewProfileContainer
              background={btnColor}
              hoverColor={btnHoverColor}
            >
              <ContactAndProfileLink
                color="#FFFFFF"
                href={linkUrl}
                target="_blank"
              >
                View Links
              </ContactAndProfileLink>
            </ViewProfileContainer>
          </ContactAndProfileSection>
        </InfoContainer>
      </Card>
    </>
  );
};

export default DevelopersCard;
