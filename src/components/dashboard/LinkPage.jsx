import { useState, useEffect } from "react";
import bin from "../../assets/icons/bin.svg";
import questionMarker from "../../assets/icons/questionMarker.svg";
import axios from "../../components/utils/request/index";
import _ from "lodash";
import setAuthToken from "../../components/utils/setAuthToken";
import Settings from "./Settings";
import Appearance from "./Appearance";
import {
  Wrapper,
  LinkManagement,
  LinkManagementInner,
  AddLinkButton,
  Form,
  TitleInputWrapper,
  LinkInfoInput,
  SaveButton,
  CheckBoxLabel,
  CheckBox,
  LinkBottom,
  Trash,
  ShareInfoWrapper,
  LinkDetail,
  LinkDetailTitle,
  LinkHref,
  MobileWrapper,
  IframeInner,
  Iframe,
  LinkPageBtn,
  LinkPageCopied,
  QuestionMarker,
} from "./LinkPage.style";

const LinkPage = ({ navStatus, setOverlay }) => {
  const [linkList, setLinkList] = useState([]);
  const [, setHover] = useState(false);
  const [shareMsg, setShareMsg] = useState(false);
  const [, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState(false);

  const getLinkInfos = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const { data } = await axios.get("/api/links");
      if (_.has(data, "links")) setLinkList(data.links);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getLinkInfos();
  }, [loading]);

  useEffect(() => {
    const userNameStored = localStorage.getItem("name");
    setUserName(userNameStored);
  }, []);

  const shareClick = () => {
    navigator.clipboard.writeText(`https://linkdevapp.com/${userName}`);
    setShareMsg(true);
  };

  if (shareMsg) {
    setTimeout(() => {
      setShareMsg(false);
    }, 1500);
  }

  const handleAddLink = () => {
    setLinkList([
      ...linkList,
      {
        title: "",
        url: "",
        editable: true,
        disabled: false,
        empty: "",
        visible: true,
      },
    ]);
  };
  const handleRemoveLink = async (index) => {
    try {
      const linkId = linkList[index]._id;
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
      const res = await axios.delete("/api/links", {
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          linkId,
        },
      });
      if (res) {
        const list = [...linkList];
        list.splice(index, 1);
        setLinkList(list);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleInfoChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...linkList];
    list[index][name] = value;
    setLinkList(list);
  };

  const handleSubmit = async (e, index) => {
    e.preventDefault();
    const list = [...linkList];
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i",
    );
    if (
      _.isEmpty(list[index]["title"]) ||
      _.isEmpty(list[index]["url"]) ||
      !urlPattern.test(list[index]["url"])
    ) {
      list[index]["empty"] = true;
    } else {
      list[index]["empty"] = false;
    }
    if (!list[index]["empty"]) {
      list[index]["disabled"] = !list[index]["disabled"];
      list[index]["editable"] = !list[index]["editable"];
    }
    setLinkList(list);
    try {
      const linkTitle = linkList[index].title;
      const linkURL = linkList[index].url;
      const empty = linkList[index].empty;
      const editable = linkList[index].editable;
      const linkId = linkList[index]._id;
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const linkInfos = JSON.stringify({ linkTitle, linkURL, linkId });
      if (!empty && !editable) {
        if (localStorage.token) {
          setAuthToken(localStorage.token);
        }
        const res = await axios.post("/api/links", linkInfos, config);
        if (res) {
          setLoading(!loading);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const isVisible = async (index) => {
    const list = [...linkList];
    list[index]["visible"] = !list[index]["visible"];
    setLinkList(list);
    try {
      const linkId = linkList[index]._id;
      const linkVisible = linkList[index].visible;
      const linkTitle = linkList[index].title;
      const linkURL = linkList[index].url;
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const linkInfos = JSON.stringify({
        linkId,
        linkVisible,
        linkTitle,
        linkURL,
      });
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
      await axios.post("/api/links", linkInfos, config);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleHandler = (index) => {
    const list = [...linkList];
    setChecked(!list[index]["visible"]);
  };

  const overlayOn = () => {
    setOverlay(true);
  };

  return (
    <Wrapper>
      {navStatus === "Links" && (
        <LinkManagement>
          <LinkManagementInner>
            <AddLinkButton onClick={handleAddLink}>Add new link</AddLinkButton>
            {linkList &&
              linkList.map((item, index) => {
                return (
                  <Form key={index} empty={item.empty}>
                    <TitleInputWrapper>
                      <LinkInfoInput
                        name="title"
                        type="text"
                        placeholder="Input Title"
                        value={item.title}
                        onChange={(e) => handleInfoChange(e, index)}
                        disabled={item.disabled}
                      />
                      <CheckBox
                        id={index}
                        type="checkbox"
                        checked={!item.visible}
                        onChange={() => toggleHandler(index)}
                        onClick={() => isVisible(index)}
                      />
                      <CheckBoxLabel htmlFor={index} />
                    </TitleInputWrapper>
                    <LinkInfoInput
                      name="url"
                      type="text"
                      placeholder="Input Url"
                      value={item.url}
                      onChange={(e) => handleInfoChange(e, index)}
                      disabled={item.disabled}
                    />
                    <LinkBottom>
                      <SaveButton onClick={(e) => handleSubmit(e, index)}>
                        {item.editable ? "Save" : "Edit"}
                      </SaveButton>
                      {linkList.length > 0 && (
                        <Trash
                          src={bin}
                          alt="bin"
                          onClick={() => handleRemoveLink(index)}
                        />
                      )}
                    </LinkBottom>
                  </Form>
                );
              })}
            {linkList.length > 0 && (
              <QuestionMarker
                src={questionMarker}
                alt="Question Marker"
                onClick={overlayOn}
              />
            )}
          </LinkManagementInner>
        </LinkManagement>
      )}
      {navStatus === "Settings" && <Settings />}
      {navStatus === "Appearance" && <Appearance />}
      <MobileWrapper>
        <ShareInfoWrapper>
          <LinkDetail>
            <LinkDetailTitle>My Link:</LinkDetailTitle>
            <LinkHref href={`/${userName}`} target="_blank">
              {`https://linkdevapp.com/${userName}`}
            </LinkHref>
          </LinkDetail>
          <LinkPageBtn
            onClick={shareClick}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            Share
            {shareMsg ? <LinkPageCopied>Link copied</LinkPageCopied> : null}
          </LinkPageBtn>
        </ShareInfoWrapper>
        <IframeInner>
          <Iframe src={`/${userName}`} />
        </IframeInner>
      </MobileWrapper>
    </Wrapper>
  );
};

export default LinkPage;
