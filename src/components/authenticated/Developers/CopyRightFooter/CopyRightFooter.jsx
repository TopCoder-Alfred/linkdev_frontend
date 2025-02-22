import {
  Copyright,
  CopyrightInfo,
  CopyrightLogo,
} from "./CopyRightFooter.styled";

import circle from "../../../../assets/icons/copyright_circle.svg";

function CopyRightFooter() {
  return (
    <Copyright>
      <CopyrightInfo>
        Copyright <CopyrightLogo src={circle} alt="Copyright Circle Outlined" />
        2022 LinkDev all right reserved.
      </CopyrightInfo>
    </Copyright>
  );
}

export default CopyRightFooter;
