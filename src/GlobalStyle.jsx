import { createGlobalStyle } from "styled-components";
import PoppinsRegular from "./fonts/Poppins-Regular.ttf";
import PoppinsMedium from "./fonts/Poppins-Medium.ttf";
import PoppinsSemiBold from "./fonts/Poppins-SemiBold.ttf";
import PoppinsBold from "./fonts/Poppins-Bold.ttf";
import PoppinsExtraBold from "./fonts/Poppins-ExtraBold.ttf";
import JosefinSansMedium from "./fonts/JosefinSans-Medium.ttf";
import JosefinSansBold from "./fonts/JosefinSans-Bold.ttf";

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        font-size: 10px;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
    }
    @font-face {
        font-family: 'Poppins';
        src:${() => `url(${PoppinsRegular}) format('TrueType')`}
    }
    @font-face {
        font-family: 'PoppinsMedium';
        src:${() => `url(${PoppinsMedium}) format('TrueType')`}
    }
    @font-face {
        font-family: 'PoppinsSemiBold';
        src:${() => `url(${PoppinsSemiBold}) format('TrueType')`}
    }
    @font-face {
        font-family: 'PoppinsBold';
        src:${() => `url(${PoppinsBold}) format('TrueType')`}
    }
    @font-face {
        font-family: 'PoppinsExtraBold';
        src:${() => `url(${PoppinsExtraBold}) format('TrueType')`}
    }
    @font-face {
        font-family: 'JosefinSansMedium';
        src:${() => `url(${JosefinSansMedium}) format('TrueType')`}
    }
    @font-face {
        font-family: 'JosefinSansBold';
        src:${() => `url(${JosefinSansBold}) format('TrueType')`}
    }
`;

export default GlobalStyles;
