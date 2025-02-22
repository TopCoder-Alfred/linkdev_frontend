import {
  InnerElementWrap,
  Phone1,
  Phone2,
  Btn1,
  Btn2,
  Icon1,
  Icon2,
  Text1,
  Text2,
  Text3,
} from "../Animation/AnimationThree.style";
import phoneCase1 from "../../../assets/images/main_third_phone1.png";
import phoneCase2 from "../../../assets/images/main_third_phone2.png";
import btn1 from "../../../assets/images/main_third_btn1.png";
import btn2 from "../../../assets/images/main_third_btn2.png";
import icon1 from "../../../assets/images/main_third_icon1.png";
import icon2 from "../../../assets/images/main_third_icon2.png";
import text1 from "../../../assets/images/main_third_text.png";
import text2 from "../../../assets/images/main_third_text2.png";
import text3 from "../../../assets/images/main_third_text3.png";
import Tilt from "react-parallax-tilt";
import "./AnimationBox.css";

const AnimationThree = () => {
  return (
    <Tilt
      perspective={500}
      transitionSpeed={500}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      className="parallax-effect"
    >
      <InnerElementWrap>
        <Phone2 src={phoneCase2} alt="" />
        <Phone1 src={phoneCase1} alt="" />
        <Btn1 src={btn1} alt="" />
        <Btn2 src={btn2} alt="" />
        <Icon1 src={icon1} alt="" />
        <Icon2 src={icon2} alt="" />
        <Text1 src={text1} alt="" />
        <Text2 src={text2} alt="" />
        <Text3 src={text3} alt="" />
      </InnerElementWrap>
    </Tilt>
  );
};

export default AnimationThree;
