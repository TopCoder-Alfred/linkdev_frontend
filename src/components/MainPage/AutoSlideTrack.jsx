import SlideCard from "./SlideCard";
import { Wrapper, SliderContainer, SlideTrack } from "./AutoSlideTrack.style";
import Jason from "../../assets/avatar/jason_bi.svg";
import Alfred from "../../assets/avatar/alfred_xin.svg";
import Dean from "../../assets/avatar/dean_zhang.svg";
import Flora from "../../assets/avatar/flora_meng.svg";
import Frida from "../../assets/avatar/frida_wang.svg";
import Jacob from "../../assets/avatar/jacob_yeung.svg";
import Larry from "../../assets/avatar/larry_liang.svg";
import Leanne from "../../assets/avatar/leanne_li.svg";
import Tim from "../../assets/avatar/tim_feng.svg";
import Isabel from "../../assets/avatar/isabel_zhao.svg";
import Scarlett from "../../assets/avatar/scarlett_liu.svg";
import Arno from "../../assets/avatar/arno_xu.svg";
import Eric from "../../assets/avatar/eric_zhao.svg";
import Nikki from "../../assets/avatar/nikki_tang.svg";
import Jenny from "../../assets/avatar/jenny_sun.svg";
import Linkdever from "../../assets/avatar/linkdev_user.svg";

const firstSlideTrackData = [
  {
    id: 1,
    name: "Jason Bi",
    occupation: "Developer",
    email: "bichaoyu@outlook.com",
    image: Jason,
    linkedin: "https://www.linkedin.com/in/jason-bi-031509b8/",
  },
  {
    id: 2,
    name: "Alfred Xin",
    occupation: "Full-stack developer",
    email: "haomin.working@gmail.com",
    image: Alfred,
    linkedin: "https://www.linkedin.com/in/haomin-xin/",
  },
  {
    id: 3,
    name: "Dean Zhang",
    occupation: "Developer",
    email: "deanzhang1228@gmail.com",
    image: Dean,
    linkedin: "https://www.linkedin.com/in/dean-z",
  },
  {
    id: 4,
    name: "Flora Meng",
    occupation: "Developer",
    email: "shiyumeng942@gmail.com",
    image: Flora,
    linkedin: " https://www.linkedin.com/in/flora-meng/",
  },
  {
    id: 5,
    name: "Frida Wang",
    occupation: "Developer",
    email: "frida.wang@outlook.com",
    image: Frida,
    linkedin: "https://www.linkedin.com/in/frida-wang",
  },
  {
    id: 6,
    name: "Jacob Yeung",
    occupation: "Full-stack developer",
    email: "chipan.yeung@hotmail.com",
    image: Jacob,
    linkedin: "https://www.linkedin.com/in/jacob-y",
  },
  {
    id: 7,
    name: "Larry Liang",
    occupation: "Developer",
    email: "1437751770lzz@gmail.com",
    image: Larry,
    linkedin: "http://linkedin.com/in/zizhao-liang",
  },
  {
    id: 8,
    name: "Linkdev",
    occupation: " ",
    email: " ",
    image: Linkdever,
    linkedin: " ",
  },
  {
    id: 9,
    name: "Jason Bi",
    occupation: "Developer",
    email: "bichaoyu@outlook.com",
    image: Jason,
    linkedin: "https://www.linkedin.com/in/jason-bi-031509b8/",
  },
  {
    id: 10,
    name: "Alfred Xin",
    occupation: "Full-stack developer",
    email: "haomin.working@gmail.com",
    image: Alfred,
    linkedin: "https://www.linkedin.com/in/haomin-xin/",
  },
  {
    id: 11,
    name: "Dean Zhang",
    occupation: "Developer",
    email: "deanzhang1228@gmail.com",
    image: Dean,
    linkedin: "https://www.linkedin.com/in/dean-z",
  },
  {
    id: 12,
    name: "Flora Meng",
    occupation: "Developer",
    email: "shiyumeng942@gmail.com",
    image: Flora,
    linkedin: " https://www.linkedin.com/in/flora-meng/",
  },
  {
    id: 13,
    name: "Frida Wang",
    occupation: "Developer",
    email: "frida.wang@outlook.com",
    image: Frida,
    linkedin: "https://www.linkedin.com/in/frida-wang",
  },
  {
    id: 14,
    name: "Jacob Yeung",
    occupation: "Full-stack developer",
    email: "chipan.yeung@hotmail.com",
    image: Jacob,
    linkedin: "https://www.linkedin.com/in/jacob-y",
  },
  {
    id: 15,
    name: "Larry Liang",
    occupation: "Developer",
    email: "1437751770lzz@gmail.com",
    image: Larry,
    linkedin: "http://linkedin.com/in/zizhao-liang",
  },
  {
    id: 16,
    name: "Linkdev",
    occupation: " ",
    email: " ",
    image: Linkdever,
    linkedin: " ",
  },
];

const secondSlideTrackData = [
  {
    id: 1,
    name: "Leanne Li",
    occupation: "Front-end developer",
    email: "leanne.hangli@gmail.com",
    image: Leanne,
    linkedin: " https://www.linkedin.com/in/leanne-hang-li",
  },
  {
    id: 2,
    name: "Tim Feng",
    occupation: "Full-stack developer",
    email: "timfreemanaus@gmail.com",
    image: Tim,
    linkedin: "https://www.linkedin.com/in/timfff/",
  },
  {
    id: 3,
    name: "Isabel Zhao",
    occupation: "Business Analyst",
    email: "yunhaoz36@gmail.com",
    image: Isabel,
    linkedin: "https://www.linkedin.com/in/yunhaoz/",
  },
  {
    id: 4,
    name: "Scarlett Liu",
    occupation: "UI Designer",
    email: "xyxynvshen@gmail.com",
    image: Scarlett,
    linkedin: "https://linkedin.com/in/xiaoyu-scarlett-liu",
  },
  {
    id: 5,
    name: "Arno Xu",
    occupation: "DevOps",
    email: "arno.xu.weichu@gmail.com",
    image: Arno,
    linkedin: " https://www.linkedin.com/in/arno-xu",
  },
  {
    id: 6,
    name: "Eric Zhao",
    occupation: "DevOps",
    email: "ericjobs3@gmail.com",
    image: Eric,
    linkedin: " http://linkedin.com/in/ericjobs",
  },
  {
    id: 7,
    name: "Nikki Tang",
    occupation: "DevOps",
    email: "candicetyx95@gmail.com",
    image: Nikki,
    linkedin: "http://www.linkedin.com/in/nikki-tang",
  },
  {
    id: 8,
    name: "Jenny Sun",
    occupation: "DevOps",
    email: "sunjuice2013@gmail.com",
    image: Jenny,
    linkedin: "http://www.linkedin.com/in/ju-sun",
  },
  {
    id: 9,
    name: "Leanne Li",
    occupation: "Front-end developer",
    email: "leanne.hangli@gmail.com",
    image: Leanne,
    linkedin: " https://www.linkedin.com/in/leanne-hang-li",
  },
  {
    id: 10,
    name: "Tim Feng",
    occupation: "Full-stack developer",
    email: "timfreemanaus@gmail.com",
    image: Tim,
    linkedin: "https://www.linkedin.com/in/timfff/",
  },
  {
    id: 11,
    name: "Isabel Zhao",
    occupation: "Business Analyst",
    email: "yunhaoz36@gmail.com",
    image: Isabel,
    linkedin: "https://www.linkedin.com/in/yunhaoz/",
  },
  {
    id: 12,
    name: "Scarlett Liu",
    occupation: "UI Designer",
    email: "xyxynvshen@gmail.com",
    image: Scarlett,
    linkedin: "https://linkedin.com/in/xiaoyu-scarlett-liu",
  },
  {
    id: 13,
    name: "Arno Xu",
    occupation: "DevOps",
    email: "arno.xu.weichu@gmail.com",
    image: Arno,
    linkedin: " https://www.linkedin.com/in/arno-xu",
  },
  {
    id: 14,
    name: "Eric Zhao",
    occupation: "DevOps",
    email: "ericjobs3@gmail.com",
    image: Eric,
    linkedin: " http://linkedin.com/in/ericjobs",
  },
  {
    id: 15,
    name: "Nikki Tang",
    occupation: "DevOps",
    email: "candicetyx95@gmail.com",
    image: Nikki,
    linkedin: "http://www.linkedin.com/in/nikki-tang",
  },
  {
    id: 16,
    name: "Jenny Sun",
    occupation: "DevOps",
    email: "sunjuice2013@gmail.com",
    image: Jenny,
    linkedin: "http://www.linkedin.com/in/ju-sun",
  },
];

const AutoSlide = () => {
  return (
    <Wrapper>
      <h1>About us</h1>
      <SliderContainer>
        <SlideTrack>
          {firstSlideTrackData.map((item, index) => (
            <SlideCard
              key={index}
              item={item}
              bgColor={index % 2 === 0 ? "#16697A" : "#FFA62B"}
            />
          ))}
        </SlideTrack>

        <SlideTrack>
          {secondSlideTrackData.map((item, index) => (
            <SlideCard
              key={index}
              item={item}
              bgColor={index % 2 === 0 ? "#FFA62B" : "#16697A"}
            />
          ))}
        </SlideTrack>
      </SliderContainer>
    </Wrapper>
  );
};

export default AutoSlide;
