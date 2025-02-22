import styled from "styled-components";
import background from "../../assets/images/main_page_part4.svg";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledBg = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blueLagoon};
`;

export const StyledBgTwo = styled(StyledBg)`
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.wildSand};
`;

export const StyledBgThree = styled(StyledBg)`
  background-color: ${({ theme }) => theme.colors.seaBuckthorn};
`;

export const StyledBgFour = styled.div`
  width: 100%;
  padding-top: ${(props) => props.width * 0.08}px;
  padding-bottom: ${(props) => props.width * 0.08}px;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VideoFrame = styled.iframe`
  width: 70%;
  height: ${(props) => props.width * 0.56}px;
  z-index: 100000;
`;

export const InnerWrapper = styled.div`
  width: 82%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 23.7rem;
  margin-bottom: 5.2rem;
  @media (max-width: 670px) {
    margin-bottom: 9rem;
  }
  @media (max-width: 430px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-top: 12.9rem;
    margin-bottom: 2.4rem;
  }
  h1 {
    font-family: "PoppinsExtraBold", sans-serif;
    font-weight: 800;
    font-size: clamp(2.8rem, 3vw + 1rem, 7rem);
    line-height: 8rem;
    margin-bottom: 4rem;
    @media (max-width: 670px) {
      font-weight: 700;
      line-height: 4rem;
      margin-bottom: 2rem;
    }
    @media (max-width: 430px) {
      font-family: "PoppinsBold", sans-serif;
      font-weight: 700;
      line-height: 3.4rem;
      margin-bottom: 1.6rem;
    }
  }
  p {
    font-family: "PoppinsSemiBold", sans-serif;
    font-size: clamp(1.1rem, 1vw + 1rem, 2.2rem);
    font-weight: 600;
    line-height: 3.6rem;
    max-width: 60.5rem; //for not occupy the space of image
    @media (max-width: 998px) {
      font-family: "PoppinsMedium", sans-serif;
      font-weight: 500;
      line-height: 2.2rem;
    }
    @media (max-width: 430px) {
      font-family: "PoppinsMedium", sans-serif;
      font-size: 1.1rem;
      font-weight: 500;
      line-height: 1.3rem;
      margin-bottom: 2.8rem;
      width: 32.7rem;
    }
  }
`;

export const InnerWrapperTwo = styled.div`
  width: 82%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row-reverse;
  margin-top: 15.2rem;
  margin-bottom: 11.9rem;
  @media (max-width: 430px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-top: 7.8rem;
    margin-bottom: 7.8rem;
  }
  h1 {
    font-family: "PoppinsExtraBold", sans-serif;
    font-weight: 800;
    font-size: clamp(2.8rem, 3vw + 1rem, 7rem);
    line-height: 8rem;
    margin-bottom: 4rem;
    @media (max-width: 988px) {
      font-weight: 700;
      line-height: 6rem;
      margin-bottom: 2rem;
    }
    @media (max-width: 670px) {
      font-weight: 700;
      line-height: 4rem;
      margin-bottom: 2rem;
    }
    @media (max-width: 430px) {
      font-family: "PoppinsBold", sans-serif;
      font-weight: 700;
      line-height: 3.4rem;
      margin-bottom: 1.6rem;
    }
  }
  p {
    font-family: "PoppinsSemiBold", sans-serif;
    font-size: clamp(1.1rem, 1vw + 1rem, 2.2rem);
    font-weight: 600;
    line-height: 3.6rem;
    max-width: 61.5rem;
    @media (max-width: 988px) {
      font-family: "PoppinsMedium", sans-serif;
      font-weight: 500;
      line-height: 2.2rem;
    }
    @media (max-width: 430px) {
      font-family: "PoppinsMedium", sans-serif;
      font-size: 1.1rem;
      font-weight: 500;
      line-height: 1.3rem;
      margin-bottom: 2.8rem;
      /* width: 32.7rem; */
    }
  }
`;

export const InnerWrapperThree = styled.div`
  width: 82%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 17.8rem;
  margin-bottom: 12rem;
  @media (max-width: 430px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-top: 6.6rem;
    margin-bottom: 6.6rem;
  }
  h1 {
    font-family: "PoppinsExtraBold", sans-serif;
    font-weight: 800;
    font-size: clamp(2.8rem, 3vw + 1rem, 7rem);
    line-height: 8rem;
    margin-bottom: 4rem;
    max-width: 62.8rem;
    @media (max-width: 988px) {
      font-weight: 700;
      line-height: 6rem;
      margin-bottom: 2rem;
    }
    @media (max-width: 670px) {
      font-weight: 700;
      line-height: 4rem;
      margin-bottom: 2rem;
    }
    @media (max-width: 430px) {
      font-family: "PoppinsBold", sans-serif;
      font-weight: 700;
      line-height: 3.4rem;
      margin-bottom: 1.6rem;
    }
  }
  p {
    font-family: "PoppinsSemiBold", sans-serif;
    max-width: 60.5rem;
    font-weight: 600;
    font-size: clamp(1.1rem, 1vw + 1rem, 2.2rem);
    line-height: 3.6rem;
    max-width: 63.9rem;
    @media (max-width: 988px) {
      font-family: "PoppinsMedium", sans-serif;
      font-weight: 500;
      line-height: 2.2rem;
    }
    @media (max-width: 430px) {
      font-family: "PoppinsMedium", sans-serif;
      font-size: 1.1rem;
      font-weight: 500;
      line-height: 1.3rem;
      margin-bottom: 2.8rem;
      /* width: 32.7rem; */
    }
  }
`;

export const Img = styled.div`
  max-width: 50.4rem;
  @media (max-width: 430px) {
    width: 18.7rem;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

export const ImgTwo = styled.div`
  max-width: 88.7rem;
  @media (max-width: 430px) {
    width: 33.2rem;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

export const ImgThree = styled.div`
  max-width: 67.4rem;
  @media (max-width: 430px) {
    width: 25.4rem;
  }
  img {
    width: 100%;
    height: auto;
  }
`;
