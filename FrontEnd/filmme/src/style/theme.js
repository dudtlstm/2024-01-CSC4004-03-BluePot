import { keyframes, css } from "styled-components";

export const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const colors = {
  // primary1: "#4285F4",
  // primary2: "#78AAFE",
  // bg: "#FFFFFF",
  // gray1: "#F8F8FA",
  // gray2: "#EEEFF3",
  // gray3: "#DEDFE5",
  // gray4: "#AEAFB9",
  // gray5: "#606067",
  // gray6: "#E4E4E4",
  // gray7: "#E2E2E2",
  // black: "#282828"
};

function FONT({ weight, size, lineHeight }) {
  return `
    font-family: "Pretendard";
    font-weight : ${weight};
    font-size : ${size}px;
    line-height : ${lineHeight}px;
    `;
}

const fonts = {
  extra_bold: FONT({ weight: 800, size: 20, lineHeight: 32 }),
  bold: FONT({ weight: 700, size: 16, lineHeight: 19 }),
  medium: FONT({ weight: 500, size: 16, lineHeight: 19 }),
  regular: FONT({ weight: 400, size: 16, lineHeight: 19 }),
  nav: FONT({ weight: 600, size: 18, lineHeight: 29 }),
  tutorial_head: FONT({ weight: 700, size: 24, lineHeight: 24 }),
  tutorial_strong: FONT({ weight: 700, size: 20, lineHeight: 20 }),
  tutorial_sub: FONT({ weight: 500, size: 18, lineHeight: 18 }),
  tutorial_text: FONT({ weight: 500, size: 13, lineHeight: 20 }),
  category_strong: FONT({ weight: 800, size: 20, lineHeight: 28 }),
  category_sub: FONT({ weight: 500, size: 20, lineHeight: 28 }),
  option_content: FONT({ weight: 500, size: 13, lineHeight: 13 }),
  user: FONT({ weight: 500, size: 18, lineHeight: 18 }),
  PretendardMedium: css`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    letter-spacing: 20;
  `,
  PretendardBold: css`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 900;
    letter-spacing: 20;
  `
};

export const theme = {
  colors,
  fonts
};
export default colors;