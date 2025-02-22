import {
  InnerElementWrap,
  Btn,
  Btn2,
  Btn3,
  Icon,
  Icon2,
  Icon3,
  Icon4,
} from "./AnimationOne.style";
import mainFirstPhone from "../../../assets/images/main_first_bg.png";
import mainFirstBtn from "../../../assets/images/main_first_btn.png";
import mainFirstBtn2 from "../../../assets/images/main_first_btn2.png";
import mainFirstBtn3 from "../../../assets/images/main_first_btn3.png";
import mainFirstIcon from "../../../assets/images/main_first_icon.png";
import mainFirstIcon2 from "../../../assets/images/main_first_icon2.png";
import mainFirstIcon3 from "../../../assets/images/main_first_icon3.png";
import mainFirstIcon4 from "../../../assets/images/main_first_icon4.png";
import Tilt from "react-parallax-tilt";
import "./AnimationBox.css";

const AnimationOne = () => {
  return (
    <Tilt
      perspective={500}
      transitionSpeed={500}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      className="parallax-effect"
    >
      <InnerElementWrap>
        <img src={mainFirstPhone} alt="" />
        <Btn src={mainFirstBtn} alt="" />
        <Btn2 src={mainFirstBtn2} alt="" />
        <Btn3 src={mainFirstBtn3} alt="" />
        <Icon src={mainFirstIcon} alt="" />
        <Icon2 src={mainFirstIcon2} alt="" />
        <Icon3 src={mainFirstIcon3} alt="" />
        <Icon4 src={mainFirstIcon4} alt="" />
      </InnerElementWrap>
    </Tilt>
  );
};

export default AnimationOne;
