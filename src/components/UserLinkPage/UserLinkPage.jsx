import Photo from "../../assets/icons/profile_photo.svg";
import leftArrow from "../../assets/icons/arrow_left.svg";
import rightArrow from "../../assets/icons/arrow_right.svg";
import MobileLogo from "../../assets/icons/linkdev_logo_name_black.svg";
import copyLinkMobile from "../../assets/icons/copy_link_mobile.svg";
import { getLink } from "../../actions";
import { useState, useEffect } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import {
  ShareContainer,
  Header,
  Logo,
  ShareButton,
  ShareButtonMobile,
  ShareStyle,
  LinkCopied,
  Profile,
  ProfileHeader,
  ProfilePhoto,
  ProfileName,
  ProfileTitle,
  LeftArrowButton,
  RightArrowButton,
  SlideNav,
  SlideNavItemOne,
  SlideNavItemTwo,
  SlideNavItemThree,
  ProfileLink,
  LinkName,
  Error,
} from "./UserLinkPage.style";

const UserLinkPage = () => {
  const [hover, setHover] = useState(false);
  const [shareMsg, setShareMsg] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [error, setError] = useState("");
  const [linkData, setLinkData] = useState([]);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [enteredTitle, setEnteredTitle] = useState("");
  const data = useMatch("/:id");
  let nextDisplay = false;
  let prevDisplay = false;

  let currentData = [];
  const limit = 3;
  let totalPage = Math.ceil(linkData.length / limit);
  if (totalPage > 1) nextDisplay = true;
  if (currentPage === totalPage - 1 && totalPage > 1) {
    nextDisplay = false;
    prevDisplay = true;
  } else if (currentPage !== 0) {
    prevDisplay = true;
  }
  if (linkData.length > 0) {
    for (let i = currentPage * limit; i < currentPage * limit + limit; i++) {
      currentData.push(linkData[i]);
    }
  }

  const navigate = useNavigate();
  useEffect(() => {
    getLink(setLinkData, setError, setAvatarUrl, setEnteredTitle, navigate);
  }, [linkData]);

  const shareClick = (e) => {
    navigator.clipboard.writeText(e.target.baseURI);
    setShareMsg(true);
  };

  if (shareMsg) {
    setTimeout(() => {
      setShareMsg(false);
    }, 1500);
  }

  const prevClick = () => {
    setCurrentPage(currentPage - 1);
  };
  const nextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <ShareContainer>
      <Header>
        <Logo src={MobileLogo} alt="logo" onClick={() => navigate("/")} />
        <ShareButton
          onClick={(e) => shareClick(e)}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          <ShareStyle style={hover ? { color: "#000" } : null}>
            Share
          </ShareStyle>
        </ShareButton>
        <ShareButtonMobile
          src={copyLinkMobile}
          onClick={(e) => shareClick(e)}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        />
        {shareMsg ? <LinkCopied>Link copied</LinkCopied> : null}
      </Header>
      <Profile>
        <ProfileHeader>
          <ProfilePhoto src={avatarUrl || Photo} />
          <ProfileName>{data.params.id}</ProfileName>
          <ProfileTitle>{enteredTitle || "IT Engineer"}</ProfileTitle>
          {prevDisplay && (
            <LeftArrowButton src={leftArrow} onClick={(e) => prevClick(e)} />
          )}
          {nextDisplay && (
            <RightArrowButton src={rightArrow} onClick={(e) => nextClick(e)} />
          )}
          <SlideNav>
            <SlideNavItemOne />
            <SlideNavItemTwo />
            <SlideNavItemThree />
          </SlideNav>
        </ProfileHeader>
        {currentData.map(
          (item, index) =>
            item &&
            !item.visible && (
              <ProfileLink key={index} href={item.url} target="_blank">
                <LinkName>{item.title}</LinkName>
              </ProfileLink>
            ),
        )}
      </Profile>
      {error && <Error>{error}</Error>}
    </ShareContainer>
  );
};

export default UserLinkPage;
