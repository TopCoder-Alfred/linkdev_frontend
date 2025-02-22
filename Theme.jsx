import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    blueLagoon: "#16697A",
    bamboo: "#DB6400",
    seaBuckthorn: "#FFA62B",
    wildSand: "#F3F3F3",
    black: "#1E1E1E",
    white: "#FFFFFF",
    cerulean: "#0BA4C6",
    pickledBluewood: "#2A3D4E",
    lineColor: "#D9D9D9",
    StormDust: "#636260",
  },
  fonts: ["Poppins", "JosefinSans", "sans-serif"],
  fontSizes: {
    extraSmall: "1.4rem",
    small: "1.6rem",
    medium: "1.8rem",
    large: "2.8rem",
    extraLarge: "5rem",
  },
  borderRadius: {
    webBorderRadius: "6.8rem",
    mobileBorderRadius: "6.4rem",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
