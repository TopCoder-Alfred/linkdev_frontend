import NavBar from "./Navbar";
import backButton from "../../../assets/icons/back_arrow.svg";
import background from "../../../assets/icons/footer_background.svg";
import logo from "../../../assets/icons/footer_logo.svg";
import name from "../../../assets/icons/name_with_shadow.svg";
import circle from "../../../assets/icons/copyright_circle.svg";
import {
  PageContainer,
  PrivacyContainer,
  PrivacyHeader,
  BackButton,
  PrivacyTitle,
  PrivacyInfo,
  Info,
  InfoLast,
  Footer,
  FooterBackground,
  LogoAndName,
  Logo,
  WebName,
  Copyright,
  CopyrightInfo,
  CopyrightLogo,
} from "./Privacy.styled";
import { useNavigate } from "react-router-dom";

const RegisterPrivacy = () => {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <PrivacyContainer>
        <NavBar />
        <PrivacyHeader>
          <PrivacyTitle>Privacy Notice</PrivacyTitle>
          <BackButton
            src={backButton}
            alt="go back to login page"
            onClick={() => {
              navigate("/register");
            }}
          />
        </PrivacyHeader>
        <PrivacyInfo>
          <Info>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
            enim eget feugiat morbi suscipit. Nisi non amet, ipsum eleifend.
            Viverra pharetra mauris mi suspendisse neque, vel. Egestas ultrices
            tempor adipiscing ut velit varius pulvinar. Pellentesque eget sem
            metus aliquet.
          </Info>
          <Info>
            Nulla hendrerit diam arcu aliquet nunc amet. Mattis quis dignissim
            turpis ac eget neque facilisi feugiat in. Id vel laoreet eleifend
            aliquam volutpat pretium pellentesque purus. Sit odio hac risus urna
            et, pretium enim. Ligula id arcu quis nulla nunc nulla mattis
            tempor. Ipsum faucibus pharetra nisl eleifend amet. Mi, porttitor
            justo, velit, quis aliquam feugiat vulputate scelerisque quis.
          </Info>
          <Info>
            Interdum quam ut in rhoncus. Platea enim sit enim nibh volutpat,
            nisi mollis. Augue faucibus lacus ultrices sollicitudin sed
            consectetur turpis. Diam pharetra et adipiscing donec tempor, fames.
            Sodales a sed non sit vestibulum tempor pellentesque quam accumsan.
            Nam tellus tincidunt tellus nisi sed tellus. Pellentesque odio sem
            sapien, consectetur ornare varius. Scelerisque accumsan libero, id
            massa blandit. Nunc rhoncus sed dui at volutpat cras odio.
          </Info>
          <Info>
            Feugiat quam sit amet nibh aliquet. Suspendisse a lorem nunc, leo
            donec venenatis. Quam arcu dignissim molestie risus sapien vel ut.
            Arcu pretium consectetur nec sit pretium sapien nisi. Ut massa
            blandit vestibulum sagittis id in purus risus, egestas. Odio tempus
            adipiscing faucibus sit habitant rhoncus fusce. Cursus nisi cursus
            sagittis, cursus pellentesque vestibulum, vulputate. Eros arcu,
            facilisis mi purus. Mauris lacus, lectus mi nunc elit egestas
            volutpat, gravida. Scelerisque scelerisque platea auctor posuere
            proin.
          </Info>
          <Info>
            Nunc commodo, dictumst lorem cursus. Suspendisse orci, ultrices
            proin euismod nisi, eu in. Id velit, faucibus enim tellus.
            Scelerisque et, id placerat at massa venenatis. Non ultrices viverra
            aliquet sed. Quis risus potenti non iaculis consequat. Rhoncus ut
            vel egestas elementum a. Volutpat et, amet, malesuada vulputate. Nec
            aliquam laoreet egestas bibendum elementum, lectus ipsum. Quis at
            egestas malesuada orci id vulputate eu. Vel sed a, dolor fringilla
            tincidunt.
          </Info>
          <Info>
            Donec dignissim suspendisse quisque blandit et sem diam. Eget diam
            mattis in in morbi nisl arcu nisl id. Auctor nibh ultricies et sed.
            Morbi cursus nec ultricies diam, consequat. Vel cursus leo dolor in
            sit malesuada. Lacus iaculis posuere consequat dui aliquam lacus,
            urna. Magna id euismod nisl, ac id imperdiet est. Ut morbi urna nibh
            commodo integer nunc mi sed velit. Senectus netus ut ut accumsan.
          </Info>
          <Info>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
            enim eget feugiat morbi suscipit. Nisi non amet, ipsum eleifend.
            Viverra pharetra mauris mi suspendisse neque, vel. Egestas ultrices
            tempor adipiscing ut velit varius pulvinar. Pellentesque eget sem
            metus aliquet.
          </Info>
          <Info>
            Nulla hendrerit diam arcu aliquet nunc amet. Mattis quis dignissim
            turpis ac eget neque facilisi feugiat in. Id vel laoreet eleifend
            aliquam volutpat pretium pellentesque purus. Sit odio hac risus urna
            et, pretium enim. Ligula id arcu quis nulla nunc nulla mattis
            tempor. Ipsum faucibus pharetra nisl eleifend amet. Mi, porttitor
            justo, velit, quis aliquam feugiat vulputate scelerisque quis.
          </Info>
          <Info>
            Interdum quam ut in rhoncus. Platea enim sit enim nibh volutpat,
            nisi mollis. Augue faucibus lacus ultrices sollicitudin sed
            consectetur turpis. Diam pharetra et adipiscing donec tempor, fames.
            Sodales a sed non sit vestibulum tempor pellentesque quam accumsan.
            Nam tellus tincidunt tellus nisi sed tellus. Pellentesque odio sem
            sapien, consectetur ornare varius. Scelerisque accumsan libero, id
            massa blandit. Nunc rhoncus sed dui at volutpat cras odio.
          </Info>
          <Info>
            Feugiat quam sit amet nibh aliquet. Suspendisse a lorem nunc, leo
            donec venenatis. Quam arcu dignissim molestie risus sapien vel ut.
            Arcu pretium consectetur nec sit pretium sapien nisi. Ut massa
            blandit vestibulum sagittis id in purus risus, egestas. Odio tempus
            adipiscing faucibus sit habitant rhoncus fusce. Cursus nisi cursus
            sagittis, cursus pellentesque vestibulum, vulputate. Eros arcu,
            facilisis mi purus. Mauris lacus, lectus mi nunc elit egestas
            volutpat, gravida. Scelerisque scelerisque platea auctor posuere
            proin.
          </Info>
          <Info>
            Nunc commodo, dictumst lorem cursus. Suspendisse orci, ultrices
            proin euismod nisi, eu in. Id velit, faucibus enim tellus.
            Scelerisque et, id placerat at massa venenatis. Non ultrices viverra
            aliquet sed. Quis risus potenti non iaculis consequat. Rhoncus ut
            vel egestas elementum a. Volutpat et, amet, malesuada vulputate. Nec
            aliquam laoreet egestas bibendum elementum, lectus ipsum. Quis at
            egestas malesuada orci id vulputate eu. Vel sed a, dolor fringilla
            tincidunt.
          </Info>
          <InfoLast>
            Donec dignissim suspendisse quisque blandit et sem diam. Eget diam
            mattis in in morbi nisl arcu nisl id. Auctor nibh ultricies et sed.
            Morbi cursus nec ultricies diam, consequat. Vel cursus leo dolor in
            sit malesuada. Lacus iaculis posuere consequat dui aliquam lacus,
            urna. Magna id euismod nisl, ac id imperdiet est. Ut morbi urna nibh
            commodo integer nunc mi sed velit. Senectus netus ut ut accumsan.
          </InfoLast>
        </PrivacyInfo>
      </PrivacyContainer>

      <Footer>
        <FooterBackground src={background} alt="background" />
        <LogoAndName>
          <Logo src={logo} alt="Logo" />
          <WebName src={name} alt="Linkdev" />
        </LogoAndName>
        <Copyright>
          <CopyrightInfo>
            Copyright{" "}
            <CopyrightLogo src={circle} alt="Copyright Circle Outlined" />
            2022 LinkDev all right reserved.
          </CopyrightInfo>
        </Copyright>
      </Footer>
    </PageContainer>
  );
};

export default RegisterPrivacy;
