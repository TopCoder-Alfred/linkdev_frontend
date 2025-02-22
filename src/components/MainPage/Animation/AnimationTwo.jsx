import {
  InnerElementWrap,
  Bg,
  Card,
  Btn,
  Btn2,
} from "../Animation/AnimationTwo.style";
import formBg from "../../../assets/images/main_second_bg.png";
import formBtn from "../../../assets/images/main_second_btn.png";
import formBtn2 from "../../../assets/images/main_second_btn2.png";
import formCard from "../../../assets/images/main_second_card.png";
import Tilt from "react-parallax-tilt";
import "./AnimationBox.css";

const AnimationTwo = () => {
  return (
    <Tilt
      perspective={500}
      transitionSpeed={500}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      className="parallax-effect"
    >
      <InnerElementWrap>
        <Bg src={formBg} alt="" />
        <Card src={formCard} alt="" />
        <Btn src={formBtn} alt="" />
        <Btn2 src={formBtn2} alt="" />
      </InnerElementWrap>
    </Tilt>
  );
};

export default AnimationTwo;
