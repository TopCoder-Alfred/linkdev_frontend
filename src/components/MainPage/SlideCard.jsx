import { StyledSlide, StyledInfo, SpecialInfo } from "./SlideCard.style";
import LinkedinLogo from "../../assets/icons/linkedin.svg";
import LinkDevName from "../../assets/icons/linkdev_mainpage_card.svg";

const SlideCard = ({
  bgColor,
  item: { name, occupation, email, image, linkedin },
}) => {
  return (
    <StyledSlide>
      <img src={image} alt="Developer's photo" />
      {name === "Linkdev" ? (
        <SpecialInfo bg={bgColor}>
          <img src={LinkDevName} alt="" />
        </SpecialInfo>
      ) : (
        <StyledInfo bg={bgColor}>
          <h2>{name}</h2>
          <h3>{occupation}</h3>
          <p>{email}</p>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <img src={LinkedinLogo} alt="Linkedin Button" />
          </a>
        </StyledInfo>
      )}
    </StyledSlide>
  );
};

export default SlideCard;
