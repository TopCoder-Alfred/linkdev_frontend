import axios from "../../components/utils/request/index";
import Lock from "../../assets/icons/lock.svg";
import Photo from "../../assets/icons/profile_photo.svg";
import EditIcon from "../../assets/icons/edit_icon.svg";
import FileAdd from "../../assets/icons/file_add.svg";
import { useState, useEffect, useRef } from "react";
import ThemeOne from "../../assets/images/theme_one.svg";
import ThemeTwo from "../../assets/images/theme_two.svg";
import ThemeThree from "../../assets/images/theme_three.svg";
import ThemeFour from "../../assets/images/theme_four.svg";
import ThemeFive from "../../assets/images/theme_five.svg";
import ThemeSix from "../../assets/images/theme_six.svg";
import ThemeSeven from "../../assets/images/theme_seven.svg";
import ThemeEight from "../../assets/images/theme_eight.svg";
import {
  Container,
  ContainerDark,
  Themes,
  ThemeDefault,
  ThemesContent,
  AppearanceContent,
  ThemesTitle,
  UserAvatar,
  Username,
  TitleArea,
  UserTitle,
  TitleEditBtn,
  Upload,
  UploadArea,
  UploadDisplay,
  UploadImg,
  UploadTitle,
  UploadTip,
  InputTitle,
  Error,
  ThemeContent,
  Theme,
  ThemeName,
  LockImg,
} from "./Appearance.style";

import UnderDevPopup from "./PopupUnderDev";

export default function Appearance() {
  // when in uploading state, file selector will pop up and the rest viewport area will be dark
  const [uploading, setUploading] = useState(false);
  const [titleEditable, setTitleEditable] = useState(false);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [error, setError] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const avatarUploadPopup = useRef();
  const titleInputArea = useRef();
  const userId = localStorage.getItem("name");

  useEffect(() => {
    const fetchedUserInfo = async () => {
      const res = await axios.get("/api/users/user");
      if (res.data.avatar.url) {
        setAvatarUrl(res.data.avatar.url);
      }
      if (res.data.title) {
        setEnteredTitle(res.data.title);
      }
    };
    fetchedUserInfo();
  }, []);

  useEffect(() => {
    const listener = (event) => {
      if (
        !avatarUploadPopup.current ||
        avatarUploadPopup.current.contains(event.target)
      ) {
        return;
      }
      setUploading(false);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [uploading]);

  useEffect(() => {
    const listener = (event) => {
      if (
        !titleInputArea.current ||
        titleInputArea.current.contains(event.target)
      ) {
        return;
      }
      submitTitle();
      setTitleEditable(false);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [titleEditable]);

  const handleAvatarClick = () => {
    setUploading(!uploading);
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      setUploading(false);
    }
  };

  const onChange = (e) => {
    setEnteredTitle(e.target.value);
  };

  const onClick = () => {
    setTitleEditable(!titleEditable);
    if (!/^[A-Za-z ]+$/.test(enteredTitle)) {
      setError("Please enter only letters.");
    } else {
      setError("");
      submitTitle();
    }
  };

  const onAvatarUpload = async (e) => {
    const avatarFile = e.target.files[0];
    const formData = new FormData();
    formData.append("avatar", avatarFile);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/users/avatar", formData, config);
      setAvatarUrl(res.data.avatar.url);
      setUploading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const submitTitle = async () => {
    const titleChange = JSON.stringify({ title: enteredTitle });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      // const res = await axios.patch("/api/users/proTitle", titleChange, config);
      // const res = await axios.patch("/api/users/proTitle", titleChange, config);
      await axios.patch("/api/users/proTitle", titleChange, config);
    } catch (err) {
      return false;
    }
  };

  return (
    <Container onKeyDown={(e) => onKeyDown(e)} tabIndex={0}>
      {uploading && <ContainerDark />}
      <AppearanceContent>
        <UserAvatar
          src={avatarUrl || Photo}
          onClick={(e) => handleAvatarClick(e)}
        />
        <Username>{userId}</Username>
        <TitleArea ref={titleInputArea}>
          {titleEditable ? (
            <InputTitle
              type="input"
              placeholder="Professional Title"
              onChange={(e) => onChange(e)}
            />
          ) : (
            <UserTitle>{enteredTitle}</UserTitle>
          )}
          <TitleEditBtn src={EditIcon} onClick={(e) => onClick(e)} />
        </TitleArea>
        {error && <Error>{error}</Error>}
        <ThemesTitle>Themes</ThemesTitle>
        <ThemesContent>
          <Theme>
            <ThemeDefault src={ThemeOne} />
            <ThemeContent>
              <ThemeName>Theme One</ThemeName>
            </ThemeContent>
          </Theme>
          <Theme onClick={() => setShowPopup(true)}>
            <Themes src={ThemeTwo} />
            <ThemeContent>
              <ThemeName>Theme Two</ThemeName>
              <LockImg src={Lock} />
            </ThemeContent>
          </Theme>
          <Theme onClick={() => setShowPopup(true)}>
            <Themes src={ThemeThree} />
            <ThemeContent>
              <ThemeName>Theme Three</ThemeName>
              <LockImg src={Lock} />
            </ThemeContent>
          </Theme>
          <Theme onClick={() => setShowPopup(true)}>
            <Themes src={ThemeFour} />
            <ThemeContent>
              <ThemeName>Theme Four</ThemeName>
              <LockImg src={Lock} />
            </ThemeContent>
          </Theme>
          <Theme onClick={() => setShowPopup(true)}>
            <Themes src={ThemeFive} />
            <ThemeContent>
              <ThemeName>Theme Five</ThemeName>
              <LockImg src={Lock} />
            </ThemeContent>
          </Theme>
          <Theme onClick={() => setShowPopup(true)}>
            <Themes src={ThemeSix} />
            <ThemeContent>
              <ThemeName>Theme Six</ThemeName>
              <LockImg src={Lock} />
            </ThemeContent>
          </Theme>
          <Theme onClick={() => setShowPopup(true)}>
            <Themes src={ThemeSeven} />
            <ThemeContent>
              <ThemeName>Theme Seven</ThemeName>
              <LockImg src={Lock} />
            </ThemeContent>
          </Theme>
          <Theme onClick={() => setShowPopup(true)}>
            <Themes src={ThemeEight} />
            <ThemeContent>
              <ThemeName>Theme Eight</ThemeName>
              <LockImg src={Lock} />
            </ThemeContent>
          </Theme>
        </ThemesContent>
      </AppearanceContent>
      {uploading && (
        <UploadArea ref={avatarUploadPopup}>
          <UploadDisplay>
            <UploadImg src={FileAdd} />
            <UploadTitle>Select files to upload</UploadTitle>
            <UploadTip>Or Drag and Drop, Copy and Paste files</UploadTip>
          </UploadDisplay>
          <Upload
            type="file"
            accept=".jpeg, .png, .jpg, .svg"
            onChange={(e) => onAvatarUpload(e)}
          />
        </UploadArea>
      )}
      {showPopup && <UnderDevPopup setShowPopup={setShowPopup} />}
    </Container>
  );
}
