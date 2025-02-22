import styled, { css } from "styled-components";
import Navbar from "./Navbar";
import LinkPage from "./LinkPage";
import { useState } from "react";
import { useEffect } from "react";
import _ from "lodash";
import setAuthToken from "../utils/setAuthToken";
import axios from "../../components/utils/request/index";
import tipBg from "../../assets/icons/tipbg.svg";
import tipBtm from "../../assets/icons/tipbtm.svg";
//import Loading from "../loading";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const OverlayWrapper = styled.div`
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  ${({ overlay }) =>
    overlay
      ? css`
          display: grid;
          place-items: center;
        `
      : ""}
`;

const TipWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  @media only screen and (max-width: 743px) {
    transform: scale(90%);
  }
  @media only screen and (max-width: 431px) {
    transform: scale(80%);
  }
`;

const TipTopImg = styled.img`
  max-width: 22rem;
  max-height: 12rem;
`;

const TipContentWrapper = styled.div`
  width: 32.2rem;
  height: 18.8rem;
  background: rgba(255, 255, 255, 0.97);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  & p {
    font-family: "JosefinSansMedium", sans-serif;
    color: ${(props) => props.theme.colors.StormDust};
    padding: 0 4rem;
    font-style: medium;
    text-align: center;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2rem;
    margin-bottom: 2rem;
  }
  & button {
    background-color: ${(props) => props.theme.colors.pickledBluewood};
    width: 16.8rem;
    height: 3.6rem;
    border-radius: 5rem;
    border-color: transparent;
    color: white;
    font-weight: 600;
    font-family: "PoppinsSemiBold", sans-serif;
    font-size: 1.5rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(0.9);
    }
  }
`;

const TipBtmImg = styled.img`
  max-width: 20rem;
  max-height: 15rem;
  position: absolute;
  right: 2%;
  top: 86%;
`;

const Dashboard = () => {
  const [navStatus, setNavStatus] = useState("Links");
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const fetchedUserInfo = async () => {
    try {
      setLoading(false);
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
      const res = await axios.get("/api/users/user");
      if (!_.isEmpty(res.data.avatar.url)) {
        setAvatarUrl(res.data.avatar.url);
      }
    } catch (err) {
      setLoading(true);
    }
  };
  useEffect(() => {
    fetchedUserInfo();
  }, [loading]);

  // if (loading) {
  //   return <Loading />;
  // }

  const overlayOff = () => {
    setOverlay(false);
  };
  return (
    <>
      <OverlayWrapper overlay={overlay}>
        <TipWrapper>
          <TipTopImg src={tipBg} alt="" />
          <TipContentWrapper>
            <p>
              Turning on the visual feature means you don't mind sharing your
              personal information with others.
            </p>
            <button onClick={overlayOff}>Understand</button>
          </TipContentWrapper>
          <TipBtmImg src={tipBtm} alt="" />
        </TipWrapper>
      </OverlayWrapper>
      <Wrapper>
        <Navbar
          navStatus={navStatus}
          setNavStatus={setNavStatus}
          avatarUrl={avatarUrl}
        />
        <LinkPage navStatus={navStatus} setOverlay={setOverlay} />
      </Wrapper>
    </>
  );
};

export default Dashboard;
