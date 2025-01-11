import defaultMessConfig from "./defaultConfig";
import * as path from "path";
import { Breakpoints, MessConfig, Theme } from "./types/mess";

export const loadConfig = (): MessConfig => {
  const configPath = require(
    path.resolve(process.cwd(), "mess.config.ts")
  )
    ? path.resolve(process.cwd(), "mess.config.ts")
    : path.resolve(process.cwd(), "mess.config.js");

  const defaultBreakpoints = defaultMessConfig.breakpoints;
  const defaultTheme = defaultMessConfig.theme;
  try {
    // Clear the require cache to ensure the latest changes are picked up
    delete require.cache[require.resolve(configPath)];
    const userConfig: MessConfig = require(configPath);

    // Merge user-defined configurations with defaults
    return getMergedConfig(
      defaultBreakpoints,
      defaultTheme,
      userConfig.breakpoints,
      userConfig.theme
    );
  } catch (error) {
    // Return defaults if config file is not found or invalid
    return {
      breakpoints: defaultBreakpoints,
      theme: defaultTheme,
    };
  }
};
function getMergedConfig(
  defaultBreakpoints: Breakpoints | undefined,
  defaultTheme: Theme,
  breakpoints: Breakpoints | undefined,
  theme: Theme
): MessConfig {
  const mergedTheme: Theme = {};
  getThemeKeys().forEach((key: keyof Theme) => {
    mergedTheme[key] = { ...defaultTheme?.[key], ...theme?.[key] };
  });
  return {
    breakpoints: { ...defaultBreakpoints, ...breakpoints },
    theme: mergedTheme,
  };
}
export const getThemeKeys = (): (keyof Theme)[] => {
  return [
    "colors",
    "fontSizes",
    "paddings",
    "classes",
    "utilityClasses",
    "accentColor",
    "animation",
    "aria",
    "aspectRatio",
    "backdropBlur",
    "backdropBrightness",
    "backdropContrast",
    "backdropGrayscale",
    "backdropHueRotate",
    "backdropInvert",
    "backdropOpacity",
    "backdropSaturate",
    "backdropSepia",
    "backgroundColor",
    "backgroundImage",
    "backgroundOpacity",
    "backgroundPosition",
    "backgroundSize",
    "blur",
    "borderColor",
    "borderOpacity",
    "borderRadius",
    "borderSpacing",
    "borderWidth",
    "boxShadow",
    "boxShadowColor",
    "brightness",
    "caretColor",
    "columns",
    "container",
    "content",
    "contrast",
    "cursor",
    "divideColor",
    "divideOpacity",
    "divideWidth",
    "dropShadow",
    "fill",
    "flex",
    "flexBasis",
    "flexGrow",
    "flexShrink",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "gap",
    "gradientColorStops",
    "gradientColorStopPositions",
    "grayscale",
    "gridAutoColumns",
    "gridAutoRows",
    "gridColumn",
    "gridColumnEnd",
    "gridColumnStart",
    "gridRow",
    "gridRowEnd",
    "gridRowStart",
    "gridTemplateColumns",
    "gridTemplateRows",
    "height",
    "hueRotate",
    "inset",
    "invert",
    "keyframes",
    "letterSpacing",
    "lineHeight",
    "listStyleType",
    "listStyleImage",
    "margin",
    "lineClamp",
    "maxHeight",
    "maxWidth",
    "minHeight",
    "minWidth",
    "objectPosition",
    "opacity",
    "order",
    "outlineColor",
    "outlineOffset",
    "outlineWidth",
    "padding",
    "placeholderColor",
    "placeholderOpacity",
    "ringColor",
    "ringOffsetColor",
    "ringOffsetWidth",
    "ringOpacity",
    "ringWidth",
    "rotate",
    "saturate",
    "scale",
    "screens",
    "scrollMargin",
    "scrollPadding",
    "sepia",
    "skew",
    "space",
    "spacing",
    "stroke",
    "strokeWidth",
    "supports",
    "data",
    "textColor",
    "textDecorationColor",
    "textDecorationThickness",
    "textIndent",
    "textOpacity",
    "textUnderlineOffset",
    "transformOrigin",
    "transitionDelay",
    "transitionDuration",
    "transitionProperty",
    "transitionTimingFunction",
    "translate",
    "size",
    "width",
    "willChange",
    "zIndex",
  ];
};
