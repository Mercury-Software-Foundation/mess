import { Breakpoints, MessConfig, Theme } from "./types/mess.d";

const defaultBreakpoints: Breakpoints = {
  sm: { min: "320px", max: "640px" },
  md: { min: "768px", max: "1024px" },
  lg: { min: "1024px", max: "1440px" },
  xl: { min: "1280px", max: "1920px" },
  xxl: { min: "1536px", max: "2560px" },
};

const defaultTheme: Theme = {
  colors: { primary: "#1e90ff", secondary: "#ffa500" },
  fontSizes: { small: "30px", medium: "16px", large: "20px" },
  paddings: { "1": "80px", "2": "12px", "3": "16px", xl: "80px" },
  classes: {
    buttonStyles: {
      contained: {
        base: ` background:#1174BC;
          padding:10px 20px;
          border-radius: 8px;
          color:white;
          font-weight:600;
          border:none;
          font-size: 16px;
           &:hover {
          background:#1E90FF;`,
        sm: "font-size: 10px; padding:10px 20px; ",
        lg: ` background:#1174BC;
          padding:10px 20px;
          border-radius: 8px;
          color:white;
          font-weight:600;
          font-size: 16px;
          border:none;
           &:hover {
          background:#1E90FF;`,
      },

      outlined: {
        base: ` background:none;
          padding:10px 20px;
          border-radius: 8px;
          color:#1174BC;
          font-weight:600;
          border:2px;
                    border:2px solid #1174BC;

          font-size: 16px;
           &:hover {
          background:#1E90FF;}`,
        sm: "font-size: 10px; padding:10px 20px; ",
        lg: ` background:none;
          padding:10px 20px;
          border-radius: 8px;
          color:#1174BC;
          font-weight:600;
          border:2px solid #1174BC;
          font-size: 16px;
           &:hover {
          background:#1E90FF;
          border:2px solid #1E90FF;

                    color:white;}
`,
      },
      text: {
        base: ` background:none;
          padding:10px 20px;
          border-radius: 8px;
          color:#1174BC;
          font-weight:600;
          border:none;

          font-size: 16px;
           &:hover {
          background:#1E90FF;}`,
        sm: "font-size: 10px; padding:10px 20px; ",
        lg: ` background:none;
          padding:10px 20px;
          border-radius: 8px;
          color:#1174BC;
          font-weight:600;
          border:none;
          font-size: 16px;
           &:hover {
          background:#1E90FF;
                    color:white;}
`,
      },
      containedSmall: {
        base: ` background:#1174BC;
                    padding:8px 15px;
          border-radius: 8px;
          color:white;
          font-weight:600;
          border:none;
          font-size: 12px;
           &:hover {
          background:#1E90FF;`,
        sm: "font-size: 10px; padding:8px 15px; ",
        lg: ` background:#1174BC;
          padding:8px 15px;
          border-radius: 8px;
          color:white;
          font-weight:600;
          font-size: 12px;
          border:none;
           &:hover {
          background:#1E90FF;`,
      },
      outLinedSmall: {
        base: ` background:none;
                    padding:8px 15px;
          border-radius: 8px;
          color:#1174BC;
          font-weight:600;
           border:2px solid #1174BC;
          font-size: 12px;
           &:hover {
          background:#1E90FF;
          border:2px solid #1E90FF;
          color:white;}`,
        sm: "font-size: 10px; padding:8px 15px; ",
        lg: ` background:none;
          padding:8px 15px;
          border-radius: 8px;
          color:#1174BC;
          font-weight:600;
          font-size: 12px;
          border:2px solid #1174BC;
           &:hover {
          background:#1E90FF;
          border:2px solid #1E90FF;
          color:white;}`,
      },
      textSmall: {
        base: ` background:none;
          padding:8px 15px;
          border-radius: 8px;
          color:#1174BC;
          font-weight:600;
          border:none;

          font-size: 12px;
           &:hover {
          background:#1E90FF;}`,
        sm: "font-size: 10px;  padding:8px 15px; ",
        lg: ` background:none;
          padding:8px 15px;
          border-radius: 8px;
          color:#1174BC;
          font-weight:600;
          border:none;
          font-size: 12px;
           &:hover {
          background:#1E90FF;
                    color:white;}
`,
      },
      containedMedium: {
        base: ` background:#1174BC;
                    padding:9px 18px;
          border-radius: 8px;
          color:white;
          font-weight:600;
          border:none;
          font-size: 14px;
           &:hover {
          background:#1E90FF;`,
        sm: "font-size: 10px; padding:9px 18px; ",
        lg: ` background:#1174BC;
          padding:9px 18px;
          border-radius: 8px;
          color:white;
          font-weight:600;
          font-size: 14px;
          border:none;
           &:hover {
          background:#1E90FF;`,
      },
      outLinedMedium: {
        base: ` background:none;
                    padding:9px 18px;
          border-radius: 8px;
          color:#1174BC;
          font-weight:600;
           border:2px solid #1174BC;
          font-size: 14px;
           &:hover {
          background:#1E90FF;
          border:2px solid #1E90FF;
          color:white;}`,
        sm: "font-size: 10px; padding:9px 18px; ",
        lg: ` background:none;
          padding:9px 18px;
          border-radius: 8px;
          color:#1174BC;
          font-weight:600;
          font-size: 14px;
          border:2px solid #1174BC;
           &:hover {
          background:#1E90FF;
          border:2px solid #1E90FF;
          color:white;}`,
      },
      textMedium: {
        base: ` background:none;
          padding:9px 18px;
          border-radius: 8px;
          color:#1174BC;
          font-weight:600;
          border:none;

          font-size: 14px;
           &:hover {
          background:#1E90FF;}`,
        sm: "font-size: 10px;  padding:9px 18px; ",
        lg: ` background:none;
          padding:9px 18px;
          border-radius: 8px;
          color:#1174BC;
          font-weight:600;
          border:none;
          font-size: 14px;
           &:hover {
          background:#1E90FF;
                    color:white;}
`,
      },
    },
  },
  utilityClasses: {
    flex: "display: flex;",
    "text-center": "text-align: center;",
    "flex-col": "flex-direction:column",
  },
  accentColor: {},
  animation: {},
  aria: {},
  aspectRatio: {},
  backdropBlur: {},
  backdropBrightness: {},
  backdropContrast: {},
  backdropGrayscale: {},
  backdropHueRotate: {},
  backdropInvert: {},
  backdropOpacity: {},
  backdropSaturate: {},
  backdropSepia: {},
  backgroundColor: {},
  backgroundImage: {},
  backgroundOpacity: {},
  backgroundPosition: {},
  backgroundSize: {},
  blur: {},
  borderColor: {},
  borderOpacity: {},
  borderRadius: {},
  borderSpacing: {},
  borderWidth: {},
  boxShadow: {},
  boxShadowColor: {},
  brightness: {},
  caretColor: {},
  columns: {},
  container: {},
  content: {},
  contrast: {},
  cursor: {},
  divideColor: {},
  divideOpacity: {},
  divideWidth: {},
  dropShadow: {},
  fill: {},
  flex: {},
  flexBasis: {},
  flexGrow: {},
  flexShrink: {},
  fontFamily: {},
  fontSize: {},
  fontWeight: {},
  gap: {},
  gradientColorStops: {},
  gradientColorStopPositions: {},
  grayscale: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridColumn: {},
  gridColumnEnd: {},
  gridColumnStart: {},
  gridRow: {},
  gridRowEnd: {},
  gridRowStart: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  height: {},
  hueRotate: {},
  inset: {},
  invert: {},
  keyframes: {},
  letterSpacing: {},
  lineHeight: {},
  listStyleType: {},
  listStyleImage: {},
  margin: {},
  lineClamp: {},
  maxHeight: {},
  maxWidth: {},
  minHeight: {},
  minWidth: {},
  objectPosition: {},
  opacity: {},
  order: {},
  outlineColor: {},
  outlineOffset: {},
  outlineWidth: {},
  padding: {},
  placeholderColor: {},
  placeholderOpacity: {},
  ringColor: {},
  ringOffsetColor: {},
  ringOffsetWidth: {},
  ringOpacity: {},
  ringWidth: {},
  rotate: {},
  saturate: {},
  scale: {},
  screens: {},
  scrollMargin: {},
  scrollPadding: {},
  sepia: {},
  skew: {},
  space: {},
  spacing: {},
  stroke: {},
  strokeWidth: {},
  supports: {},
  data: {},
  textColor: {},
  textDecorationColor: {},
  textDecorationThickness: {},
  textIndent: {},
  textOpacity: {},
  textUnderlineOffset: {},
  transformOrigin: {},
  transitionDelay: {},
  transitionDuration: {},
  transitionProperty: {},
  transitionTimingFunction: {},
  translate: {},
  size: {},
  width: {},
  willChange: {},
  zIndex: {},
};

const defaultMessConfig: MessConfig = {
  breakpoints: defaultBreakpoints,
  theme: defaultTheme,
};

export default defaultMessConfig;


