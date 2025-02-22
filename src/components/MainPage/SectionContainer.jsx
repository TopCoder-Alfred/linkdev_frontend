import {
  Wrapper,
  StyledBg,
  StyledBgTwo,
  StyledBgThree,
  StyledBgFour,
  VideoFrame,
  InnerWrapper,
  InnerWrapperTwo,
  InnerWrapperThree,
  Img,
  ImgTwo,
  ImgThree,
} from "./SectionContainer.style";
import NavBar from "./Navbar/Navbar";
import AnimationOne from "./Animation/AnimationOne";
import AnimationTwo from "./Animation/AnimationTwo";
import AnimationThree from "./Animation/AnimationThree";
import { useState, useEffect, useRef } from "react";

const SectionContainer = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [videoWidth, setVideoWidth] = useState(window.innerWidth * 0.7);
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setVideoWidth(videoRef.current.offsetWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(videoRef.current.offsetWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Wrapper>
      <NavBar />
      <StyledBg>
        <InnerWrapper>
          <div>
            <h1>ONE is ENOUGH.</h1>
            <p>
              ONE LinkDev link = Countless links. You can share one LinkDev link
              instead of thousands of links confusing your audience.
            </p>
          </div>
          <Img>
            <AnimationOne />
          </Img>
        </InnerWrapper>
      </StyledBg>

      <StyledBgTwo>
        <InnerWrapperTwo>
          <div>
            <h1>Find and Contact.</h1>
            <p>
              On LinkDev's developers' page, without login, you can browse
              developers' information and contact them.
            </p>
          </div>
          <ImgTwo>
            <AnimationTwo />
          </ImgTwo>
        </InnerWrapperTwo>
      </StyledBgTwo>

      <StyledBgThree>
        <InnerWrapperThree>
          <div>
            <h1>Share when you're ready.</h1>
            <p>
              With multiple visibility options, LinkDev helps you protect the
              privacy of your information.
            </p>
          </div>
          <ImgThree>
            <AnimationThree />
          </ImgThree>
        </InnerWrapperThree>
      </StyledBgThree>
      <StyledBgFour ref={containerRef} width={containerWidth}>
        <VideoFrame
          src="https://www.youtube.com/embed/4tenYcp2mDA"
          ref={videoRef}
          frameborder="1"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; 
        picture-in-picture"
          allowfullscreen
          width={videoWidth}
        />
      </StyledBgFour>
    </Wrapper>
  );
};

export default SectionContainer;
