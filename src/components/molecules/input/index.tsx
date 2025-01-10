import { loadConfig } from "../../../loadConfig";
import { clx } from "@medusajs/ui";

interface Breakpoint {
  min: string;
  max: string;
}

interface Breakpoints {
  [key: string]: Breakpoint;
}

interface Theme {
  colors: Record<string, string>;
  fontSizes: Record<string, string>;
  paddings: Record<string, string>;
  classes: Record<string, Record<string, Record<string, string>>>;
  utilityClasses: any;

  // New theme keys
  accentColor: Record<string, string>;
  animation: Record<string, string>;
  aria: Record<string, string>;
  aspectRatio: Record<string, string>;
  backdropBlur: Record<string, string>;
  backdropBrightness: Record<string, string>;
  backdropContrast: Record<string, string>;
  backdropGrayscale: Record<string, string>;
  backdropHueRotate: Record<string, string>;
  backdropInvert: Record<string, string>;
  backdropOpacity: Record<string, string>;
  backdropSaturate: Record<string, string>;
  backdropSepia: Record<string, string>;
  backgroundColor: Record<string, string>;
  backgroundImage: Record<string, string>;
  backgroundOpacity: Record<string, string>;
  backgroundPosition: Record<string, string>;
  backgroundSize: Record<string, string>;
  blur: Record<string, string>;
  borderColor: Record<string, string>;
  borderOpacity: Record<string, string>;
  borderRadius: Record<string, string>;
  borderSpacing: Record<string, string>;
  borderWidth: Record<string, string>;
  boxShadow: Record<string, string>;
  boxShadowColor: Record<string, string>;
  brightness: Record<string, string>;
  caretColor: Record<string, string>;
  columns: Record<string, string>;
  container: Record<string, string>;
  content: Record<string, string>;
  contrast: Record<string, string>;
  cursor: Record<string, string>;
  divideColor: Record<string, string>;
  divideOpacity: Record<string, string>;
  divideWidth: Record<string, string>;
  dropShadow: Record<string, string>;
  fill: Record<string, string>;
  flex: Record<string, string>;
  flexBasis: Record<string, string>;
  flexGrow: Record<string, string>;
  flexShrink: Record<string, string>;
  fontFamily: Record<string, string>;
  fontSize: Record<string, string>;
  fontWeight: Record<string, string>;
  gap: Record<string, string>;
  gradientColorStops: Record<string, string>;
  gradientColorStopPositions: Record<string, string>;
  grayscale: Record<string, string>;
  gridAutoColumns: Record<string, string>;
  gridAutoRows: Record<string, string>;
  gridColumn: Record<string, string>;
  gridColumnEnd: Record<string, string>;
  gridColumnStart: Record<string, string>;
  gridRow: Record<string, string>;
  gridRowEnd: Record<string, string>;
  gridRowStart: Record<string, string>;
  gridTemplateColumns: Record<string, string>;
  gridTemplateRows: Record<string, string>;
  height: Record<string, string>;
  hueRotate: Record<string, string>;
  inset: Record<string, string>;
  invert: Record<string, string>;
  keyframes: Record<string, string>;
  letterSpacing: Record<string, string>;
  lineHeight: Record<string, string>;
  listStyleType: Record<string, string>;
  listStyleImage: Record<string, string>;
  margin: Record<string, string>;
  lineClamp: Record<string, string>;
  maxHeight: Record<string, string>;
  maxWidth: Record<string, string>;
  minHeight: Record<string, string>;
  minWidth: Record<string, string>;
  objectPosition: Record<string, string>;
  opacity: Record<string, string>;
  order: Record<string, string>;
  outlineColor: Record<string, string>;
  outlineOffset: Record<string, string>;
  outlineWidth: Record<string, string>;
  padding: Record<string, string>;
  placeholderColor: Record<string, string>;
  placeholderOpacity: Record<string, string>;
  ringColor: Record<string, string>;
  ringOffsetColor: Record<string, string>;
  ringOffsetWidth: Record<string, string>;
  ringOpacity: Record<string, string>;
  ringWidth: Record<string, string>;
  rotate: Record<string, string>;
  saturate: Record<string, string>;
  scale: Record<string, string>;
  screens: Record<string, string>;
  scrollMargin: Record<string, string>;
  scrollPadding: Record<string, string>;
  sepia: Record<string, string>;
  skew: Record<string, string>;
  space: Record<string, string>;
  spacing: Record<string, string>;
  stroke: Record<string, string>;
  strokeWidth: Record<string, string>;
  supports: Record<string, string>;
  data: Record<string, string>;
  textColor: Record<string, string>;
  textDecorationColor: Record<string, string>;
  textDecorationThickness: Record<string, string>;
  textIndent: Record<string, string>;
  textOpacity: Record<string, string>;
  textUnderlineOffset: Record<string, string>;
  transformOrigin: Record<string, string>;
  transitionDelay: Record<string, string>;
  transitionDuration: Record<string, string>;
  transitionProperty: Record<string, string>;
  transitionTimingFunction: Record<string, string>;
  translate: Record<string, string>;
  size: Record<string, string>;
  width: Record<string, string>;
  willChange: Record<string, string>;
  zIndex: Record<string, string>;
}


export interface Styles {
  base?: string;
  [key: string]: string | undefined;
}


export const Mess = (
  styles: Styles | string,
  customeclasses?: string
): string => {
  // console.log(customeclasses, "customeclass");
  const config = loadConfig();
  const breakpoints: Breakpoints = config.breakpoints;
  const theme: Theme = config.theme;
  // console.log(
  //   breakpoints,
  //   theme,
  //   styles,
  //   customeclasses,
  //   typeof styles,
  //   "mess"
  // );
  let resolvedStyles: Styles = {};

  // If styles is a string, resolve it from config.theme.classes
  if (typeof styles === "string") {
    const stylePath = styles.replace(/^\$|\s+/g, "").split(".");
    let currentLevel: any = theme.classes;
    // console.log(stylePath,currentLevel,"stylepath,currentLevel")
    for (const key of stylePath) {
      // console.log(currentLevel,currentLevel[key],"stylepath,currentLevel")

      if (currentLevel && currentLevel[key]) {
        currentLevel = currentLevel[key];
      } else {
        console.error(
          `Invalid style path: '${styles}'. Key '${key}' not found.`
        );
        currentLevel = {};
        break;
      }
    }

    resolvedStyles = currentLevel as Styles;
  } else if (typeof styles === "object") {
    resolvedStyles = styles;
  }

  let cssString = resolvedStyles?.base ?? "";
///
const generateStyles = (customClasses: string, breakpoints: Breakpoints) => {
  let styles: Styles = { base: '' };

  const classes = customClasses.split(" ");

  for (const cls of classes) {
    // Handle static utility classes (like padding, background, etc.)
    if (theme.utilityClasses[cls]) {
      styles.base += theme.utilityClasses[cls];
    }

    // Handle dynamic utility classes (e.g., h-[20px], p-[10px])
    const dynamicMatch = cls.match(/^(\w+)-\[(.+)\]$/);
    if (dynamicMatch) {
      const [_, property, value] = dynamicMatch;
      const cssProperty = {
              // Box model properties
              h: "height",
              w: "width",
              minH: "min-height",
              maxH: "max-height",
              minW: "min-width",
              maxW: "max-width",
              p: "padding",
              px: `padding-left: ${value}; padding-right`,
            py: `padding-top: ${value}; padding-bottom`,
              pt: "padding-top",
              pr: "padding-right",
              pb: "padding-bottom",
              pl: "padding-left",
              m: "margin",
              mx: `margin-left: ${value}; margin-right`,
            my: `margin-top: ${value}; margin-bottom`,
              mt: "margin-top",
              mr: "margin-right",
              mb: "margin-bottom",
              ml: "margin-left",
    
              // Background and borders
              bg: "background",
              bgColor: "background-color",
              bgImage: "background-image",
              bgSize: "background-size",
              bgPosition: "background-position",
              bgRepeat: "background-repeat",
              rounded: "border-radius",
              borderWidth: "border-width",
              borderColor: "border-color",
              borderStyle: "border-style",
    
              // Typography
              color: "color",
              font: "font",
              fontSize: "font-size",
              fontWeight: "font-weight",
              fontStyle: "font-style",
              fontFamily: "font-family",
              lineHeight: "line-height",
              letterSpacing: "letter-spacing",
              text: "text-align",
              textDecoration: "text-decoration",
              textTransform: "text-transform",
              whiteSpace: "white-space",
              wordBreak: "word-break",
              overflowWrap: "overflow-wrap",
    
              // Flexbox and grid
              flex: "flex",
              grow: "flex-grow",
              shrink: "flex-shrink",
              basis: "flex-basis",
              gap: "gap",
              justify: "justify-content",
              items: "align-items",
              content: "align-content",
              self: "align-self",
              order: "order",
              grid: "grid",
              gridCols: "grid-template-columns",
              gridRows: "grid-template-rows",
              gridGap: "grid-gap",
    
              // Positioning
              pos: "position",
              z: "z-index",
              top: "top",
              right: "right",
              bottom: "bottom",
              left: "left",
    
              // Transitions and animations
              transition: "transition",
              transitionDuration: "transition-duration",
              transitionTiming: "transition-timing-function",
              transitionDelay: "transition-delay",
              animation: "animation",
              animationName: "animation-name",
              animationDuration: "animation-duration",
              animationTiming: "animation-timing-function",
              animationDelay: "animation-delay",
              animationIteration: "animation-iteration-count",
              animationDirection: "animation-direction",
              animationFillMode: "animation-fill-mode",
              animationPlayState: "animation-play-state",
    
              // Box shadow and opacity
              shadow: "box-shadow",
              opacity: "opacity",
    
              // Keyframes
              keyframes: `@keyframes ${value} { /* Add keyframe rules here */ }`,
    
              // Cursor and pointer events
              cursor: "cursor",
              pointerEvents: "pointer-events",
    
              // Other CSS properties
              clipPath: "clip-path",
              filter: "filter",
              transform: "transform",
              transformOrigin: "transform-origin",
              visibility: "visibility",
              overflow: "overflow",
              overflowX: "overflow-x",
              overflowY: "overflow-y",
    
              // Advanced properties
              backdropFilter: "backdrop-filter",
              mixBlendMode: "mix-blend-mode",
              isolation: "isolation",
              perspective: "perspective",
              perspectiveOrigin: "perspective-origin",
              scrollBehavior: "scroll-behavior",
              resize: "resize",
              userSelect: "user-select",
    
              // Media queries shorthand
    
              // Custom mappings for shorthand properties
              transitionAll: "transition: all",
              animationAll: "animation: all",
              roundedFull: "border-radius: 50%;",
            }[property];
    

      if (cssProperty) {
        styles.base += `${cssProperty}: ${value}; `;
      }
    }

    // Handle breakpoint-based dynamic classes (e.g., lg:h-[20px])
    const breakpointMatch = cls.match(/^(\w+):(\w+)-\[(.+)\]$/);
    if (breakpointMatch) {
      const [_, breakpoint, property, value] = breakpointMatch;
      const cssProperty = {
        // Box model properties
        h: "height",
        w: "width",
        minH: "min-height",
        maxH: "max-height",
        minW: "min-width",
        maxW: "max-width",
        p: "padding",
        px: `padding-left: ${value}; padding-right`,
      py: `padding-top: ${value}; padding-bottom`,
        pt: "padding-top",
        pr: "padding-right",
        pb: "padding-bottom",
        pl: "padding-left",
        m: "margin",
        mx: `margin-left: ${value}; margin-right`,
      my: `margin-top: ${value}; margin-bottom`,
        mt: "margin-top",
        mr: "margin-right",
        mb: "margin-bottom",
        ml: "margin-left",

        // Background and borders
        bg: "background",
        bgColor: "background-color",
        bgImage: "background-image",
        bgSize: "background-size",
        bgPosition: "background-position",
        bgRepeat: "background-repeat",
        rounded: "border-radius",
        borderWidth: "border-width",
        borderColor: "border-color",
        borderStyle: "border-style",

        // Typography
        color: "color",
        font: "font",
        fontSize: "font-size",
        fontWeight: "font-weight",
        fontStyle: "font-style",
        fontFamily: "font-family",
        lineHeight: "line-height",
        letterSpacing: "letter-spacing",
        text: "text-align",
        textDecoration: "text-decoration",
        textTransform: "text-transform",
        whiteSpace: "white-space",
        wordBreak: "word-break",
        overflowWrap: "overflow-wrap",

        // Flexbox and grid
        flex: "flex",
        grow: "flex-grow",
        shrink: "flex-shrink",
        basis: "flex-basis",
        gap: "gap",
        justify: "justify-content",
        items: "align-items",
        content: "align-content",
        self: "align-self",
        order: "order",
        grid: "grid",
        gridCols: "grid-template-columns",
        gridRows: "grid-template-rows",
        gridGap: "grid-gap",

        // Positioning
        pos: "position",
        z: "z-index",
        top: "top",
        right: "right",
        bottom: "bottom",
        left: "left",

        // Transitions and animations
        transition: "transition",
        transitionDuration: "transition-duration",
        transitionTiming: "transition-timing-function",
        transitionDelay: "transition-delay",
        animation: "animation",
        animationName: "animation-name",
        animationDuration: "animation-duration",
        animationTiming: "animation-timing-function",
        animationDelay: "animation-delay",
        animationIteration: "animation-iteration-count",
        animationDirection: "animation-direction",
        animationFillMode: "animation-fill-mode",
        animationPlayState: "animation-play-state",

        // Box shadow and opacity
        shadow: "box-shadow",
        opacity: "opacity",

        // Keyframes
        keyframes: `@keyframes ${value} { /* Add keyframe rules here */ }`,

        // Cursor and pointer events
        cursor: "cursor",
        pointerEvents: "pointer-events",

        // Other CSS properties
        clipPath: "clip-path",
        filter: "filter",
        transform: "transform",
        transformOrigin: "transform-origin",
        visibility: "visibility",
        overflow: "overflow",
        overflowX: "overflow-x",
        overflowY: "overflow-y",

        // Advanced properties
        backdropFilter: "backdrop-filter",
        mixBlendMode: "mix-blend-mode",
        isolation: "isolation",
        perspective: "perspective",
        perspectiveOrigin: "perspective-origin",
        scrollBehavior: "scroll-behavior",
        resize: "resize",
        userSelect: "user-select",

        // Media queries shorthand

        // Custom mappings for shorthand properties
        transitionAll: "transition: all",
        animationAll: "animation: all",
        roundedFull: "border-radius: 50%;",
      }[property];

      const breakpointMedia = breakpoints[breakpoint];
      // console.log(breakpointMedia,cssProperty)
      if (cssProperty && breakpointMedia) {
      //   styles[breakpoint] += `
      //   @media (min-width: ${breakpointMedia.min}) {
      //     ${cssProperty}: ${value};
      //   }
      // `;
        if (!styles[breakpoint]) {
          styles[breakpoint] = '';
        }
        styles[breakpoint] += `${cssProperty}: ${value}; `;
      }
    }
  }
// console.log(styles,"styles")
  return styles;
};
///
  if (customeclasses) {
    resolvedStyles= generateStyles(customeclasses,breakpoints)
    cssString =resolvedStyles?.base ?? ""

    // const classes = customeclasses.split(" ");

    // for (const cls of classes) {
    //   // Handle static utility classes
    //   if (theme.utilityClasses[cls]) {
    //     cssString += theme.utilityClasses[cls];
    //   }

    //   // Handle dynamic utility classes like h-[20px], p-[10px]
    //   const dynamicMatch = cls.match(/^(\w+)-\[(.+)\]$/); // Matches "property-[value]"
    //   if (dynamicMatch) {
    //     const [_, property, value] = dynamicMatch;
    //     const cssProperty = {
    //       // Box model properties
    //       h: "height",
    //       w: "width",
    //       minH: "min-height",
    //       maxH: "max-height",
    //       minW: "min-width",
    //       maxW: "max-width",
    //       p: "padding",
    //       px: `padding-left: ${value}; padding-right`,
    //     py: `padding-top: ${value}; padding-bottom`,
    //       pt: "padding-top",
    //       pr: "padding-right",
    //       pb: "padding-bottom",
    //       pl: "padding-left",
    //       m: "margin",
    //       mx: `margin-left: ${value}; margin-right`,
    //     my: `margin-top: ${value}; margin-bottom`,
    //       mt: "margin-top",
    //       mr: "margin-right",
    //       mb: "margin-bottom",
    //       ml: "margin-left",

    //       // Background and borders
    //       bg: "background",
    //       bgColor: "background-color",
    //       bgImage: "background-image",
    //       bgSize: "background-size",
    //       bgPosition: "background-position",
    //       bgRepeat: "background-repeat",
    //       rounded: "border-radius",
    //       borderWidth: "border-width",
    //       borderColor: "border-color",
    //       borderStyle: "border-style",

    //       // Typography
    //       color: "color",
    //       font: "font",
    //       fontSize: "font-size",
    //       fontWeight: "font-weight",
    //       fontStyle: "font-style",
    //       fontFamily: "font-family",
    //       lineHeight: "line-height",
    //       letterSpacing: "letter-spacing",
    //       text: "text-align",
    //       textDecoration: "text-decoration",
    //       textTransform: "text-transform",
    //       whiteSpace: "white-space",
    //       wordBreak: "word-break",
    //       overflowWrap: "overflow-wrap",

    //       // Flexbox and grid
    //       flex: "flex",
    //       grow: "flex-grow",
    //       shrink: "flex-shrink",
    //       basis: "flex-basis",
    //       gap: "gap",
    //       justify: "justify-content",
    //       items: "align-items",
    //       content: "align-content",
    //       self: "align-self",
    //       order: "order",
    //       grid: "grid",
    //       gridCols: "grid-template-columns",
    //       gridRows: "grid-template-rows",
    //       gridGap: "grid-gap",

    //       // Positioning
    //       pos: "position",
    //       z: "z-index",
    //       top: "top",
    //       right: "right",
    //       bottom: "bottom",
    //       left: "left",

    //       // Transitions and animations
    //       transition: "transition",
    //       transitionDuration: "transition-duration",
    //       transitionTiming: "transition-timing-function",
    //       transitionDelay: "transition-delay",
    //       animation: "animation",
    //       animationName: "animation-name",
    //       animationDuration: "animation-duration",
    //       animationTiming: "animation-timing-function",
    //       animationDelay: "animation-delay",
    //       animationIteration: "animation-iteration-count",
    //       animationDirection: "animation-direction",
    //       animationFillMode: "animation-fill-mode",
    //       animationPlayState: "animation-play-state",

    //       // Box shadow and opacity
    //       shadow: "box-shadow",
    //       opacity: "opacity",

    //       // Keyframes
    //       keyframes: `@keyframes ${value} { /* Add keyframe rules here */ }`,

    //       // Cursor and pointer events
    //       cursor: "cursor",
    //       pointerEvents: "pointer-events",

    //       // Other CSS properties
    //       clipPath: "clip-path",
    //       filter: "filter",
    //       transform: "transform",
    //       transformOrigin: "transform-origin",
    //       visibility: "visibility",
    //       overflow: "overflow",
    //       overflowX: "overflow-x",
    //       overflowY: "overflow-y",

    //       // Advanced properties
    //       backdropFilter: "backdrop-filter",
    //       mixBlendMode: "mix-blend-mode",
    //       isolation: "isolation",
    //       perspective: "perspective",
    //       perspectiveOrigin: "perspective-origin",
    //       scrollBehavior: "scroll-behavior",
    //       resize: "resize",
    //       userSelect: "user-select",

    //       // Media queries shorthand

    //       // Custom mappings for shorthand properties
    //       transitionAll: "transition: all",
    //       animationAll: "animation: all",
    //       roundedFull: "border-radius: 50%;",
    //     }[property];

    //     if (cssProperty) {
    //       cssString += `${cssProperty}: ${value}; `;
    //     }
    //   }

    //   // Handle breakpoint-based classes like md:h-[20px]
    //   const breakpointMatch = cls.match(/^(\w+):(\w+)-\[(.+)\]$/); // Matches "breakpoint:property-[value]"
    //   if (breakpointMatch) {
    //     const [_, breakpoint, property, value] = breakpointMatch;
    //     const cssProperty = {
    //       // Box model properties
    //       h: "height",
    //       w: "width",
    //       minH: "min-height",
    //       maxH: "max-height",
    //       minW: "min-width",
    //       maxW: "max-width",
    //       p: "padding",
    //       px: `padding-left: ${value}; padding-right`,
    //     py: `padding-top: ${value}; padding-bottom`,
    //       pt: "padding-top",
    //       pr: "padding-right",
    //       pb: "padding-bottom",
    //       pl: "padding-left",
    //       m: "margin",
    //       mx: `margin-left: ${value}; margin-right`,
    //     my: `margin-top: ${value}; margin-bottom`,
    //       mt: "margin-top",
    //       mr: "margin-right",
    //       mb: "margin-bottom",
    //       ml: "margin-left",

    //       // Background and borders
    //       bg: "background",
    //       bgColor: "background-color",
    //       bgImage: "background-image",
    //       bgSize: "background-size",
    //       bgPosition: "background-position",
    //       bgRepeat: "background-repeat",
    //       rounded: "border-radius",
    //       borderWidth: "border-width",
    //       borderColor: "border-color",
    //       borderStyle: "border-style",

    //       // Typography
    //       color: "color",
    //       font: "font",
    //       fontSize: "font-size",
    //       fontWeight: "font-weight",
    //       fontStyle: "font-style",
    //       fontFamily: "font-family",
    //       lineHeight: "line-height",
    //       letterSpacing: "letter-spacing",
    //       text: "text-align",
    //       textDecoration: "text-decoration",
    //       textTransform: "text-transform",
    //       whiteSpace: "white-space",
    //       wordBreak: "word-break",
    //       overflowWrap: "overflow-wrap",

    //       // Flexbox and grid
    //       flex: "flex",
    //       grow: "flex-grow",
    //       shrink: "flex-shrink",
    //       basis: "flex-basis",
    //       gap: "gap",
    //       justify: "justify-content",
    //       items: "align-items",
    //       content: "align-content",
    //       self: "align-self",
    //       order: "order",
    //       grid: "grid",
    //       gridCols: "grid-template-columns",
    //       gridRows: "grid-template-rows",
    //       gridGap: "grid-gap",

    //       // Positioning
    //       pos: "position",
    //       z: "z-index",
    //       top: "top",
    //       right: "right",
    //       bottom: "bottom",
    //       left: "left",

    //       // Transitions and animations
    //       transition: "transition",
    //       transitionDuration: "transition-duration",
    //       transitionTiming: "transition-timing-function",
    //       transitionDelay: "transition-delay",
    //       animation: "animation",
    //       animationName: "animation-name",
    //       animationDuration: "animation-duration",
    //       animationTiming: "animation-timing-function",
    //       animationDelay: "animation-delay",
    //       animationIteration: "animation-iteration-count",
    //       animationDirection: "animation-direction",
    //       animationFillMode: "animation-fill-mode",
    //       animationPlayState: "animation-play-state",

    //       // Box shadow and opacity
    //       shadow: "box-shadow",
    //       opacity: "opacity",

    //       // Keyframes
    //       keyframes: `@keyframes ${value} { /* Add keyframe rules here */ }`,

    //       // Cursor and pointer events
    //       cursor: "cursor",
    //       pointerEvents: "pointer-events",

    //       // Other CSS properties
    //       clipPath: "clip-path",
    //       filter: "filter",
    //       transform: "transform",
    //       transformOrigin: "transform-origin",
    //       visibility: "visibility",
    //       overflow: "overflow",
    //       overflowX: "overflow-x",
    //       overflowY: "overflow-y",

    //       // Advanced properties
    //       backdropFilter: "backdrop-filter",
    //       mixBlendMode: "mix-blend-mode",
    //       isolation: "isolation",
    //       perspective: "perspective",
    //       perspectiveOrigin: "perspective-origin",
    //       scrollBehavior: "scroll-behavior",
    //       resize: "resize",
    //       userSelect: "user-select",

    //       // Media queries shorthand

    //       // Custom mappings for shorthand properties
    //       transitionAll: "transition: all",
    //       animationAll: "animation: all",
    //       roundedFull: "border-radius: 50%;",
    //     }[property];

    //     const breakpointMedia = breakpoints[breakpoint];
    //     if (cssProperty && breakpointMedia) {
    //       cssString += `
    //       @media (min-width: ${breakpointMedia.min}) {
    //         ${cssProperty}: ${value};
    //       }
    //     `;
    //     }
    //   }
    // }
  }
  // console.log("cssString final", cssString);
  ////

////

////


  if (breakpoints && resolvedStyles) {
    Object.entries(breakpoints).forEach(([key, value]) => {
      const styleForKey = resolvedStyles[key];
      if (styleForKey && value.min) {
        cssString += `
          @media (min-width: ${value.min}) {
            ${styleForKey.replace(
              /\$([a-zA-Z]+)/g,
              (_, token) => {
                // Iterate over all theme keys to find the token in any of the theme properties
                for (const key in theme) {
                  //@ts-ignore
                  if (theme[key]?.[token]) {
                  //@ts-ignore
          
                    return theme[key][token];
                  }
                }
                return token; // Return the token itself if no match is found
              }
            )}
          }
        `;
      }
    });
  }
  if (resolvedStyles.dark) {
    Object.entries(resolvedStyles.dark).forEach(([key, style]) => {
      if (key === "base") {
        cssString += `
          @media (prefers-color-scheme: dark) {
            ${style.replace(
              /\$([a-zA-Z]+)/g,
              (_, token) => {
                // Iterate over all theme keys to find the token in any of the theme properties
                for (const key in theme) {
                  //@ts-ignore
                  if (theme[key]?.[token]) {
                  //@ts-ignore
          
                    return theme[key][token];
                  }
                }
                return token; // Return the token itself if no match is found
              }
            )}
          }
        `;
      } else if (breakpoints[key]) {
        cssString += `
          @media (prefers-color-scheme: dark) and (min-width: ${
            breakpoints[key].min
          }) {
            ${style.replace(
              /\$([a-zA-Z]+)/g,
              (_, token) => {
                // Iterate over all theme keys to find the token in any of the theme properties
                for (const key in theme) {
                  //@ts-ignore
                  if (theme[key]?.[token]) {
                  //@ts-ignore
          
                    return theme[key][token];
                  }
                }
                return token; // Return the token itself if no match is found
              }
            )}
          }
        `;
      }
    });
  }

  // Replace tokens in base styles
  cssString = cssString.replace(
    /\$([a-zA-Z]+)/g,
    (_, token) => {
      // Iterate over all theme keys to find the token in any of the theme properties
      for (const key in theme) {
        // console.log(key,token,"key token")
        //@ts-ignore
        if (theme[key]?.[token]) {
        //@ts-ignore

          // console.log(theme[key]?.[token],"theme token")
        //@ts-ignore

          return theme[key][token];
        }
      }
      // console.log(token,"token")
      return token; // Return the token itself if no match is found
    }
  );

  return cssString;
};

/**
 * Dynamically merge styles for specific breakpoints.
 * @param baseStyles - The base styles object (e.g., theme styles).
 * @param overrides - The overrides object with custom styles.
 * @returns Merged styles object.
 */
export const Clx = (baseStyles: Styles | string, overrides: Styles | string) => {
  let resolvedBaseStyles: Styles;
  const config = loadConfig();
  const themeClasses = config.theme.classes;
  const breakpoints: Breakpoints = config.breakpoints;
  const theme: Theme = config.theme;

//
const generateStyles = (customClasses: string, breakpoints: Breakpoints) => {
  let styles: Styles = { base: '' };

  const classes = customClasses.split(" ");

  for (const cls of classes) {
    // Handle static utility classes (like padding, background, etc.)
    if (theme.utilityClasses[cls]) {
      styles.base += theme.utilityClasses[cls];
    }

    // Handle dynamic utility classes (e.g., h-[20px], p-[10px])
    const dynamicMatch = cls.match(/^(\w+)-\[(.+)\]$/);
    if (dynamicMatch) {
      const [_, property, value] = dynamicMatch;
      const cssProperty = {
              // Box model properties
              h: "height",
              w: "width",
              minH: "min-height",
              maxH: "max-height",
              minW: "min-width",
              maxW: "max-width",
              p: "padding",
              px: `padding-left: ${value}; padding-right`,
            py: `padding-top: ${value}; padding-bottom`,
              pt: "padding-top",
              pr: "padding-right",
              pb: "padding-bottom",
              pl: "padding-left",
              m: "margin",
              mx: `margin-left: ${value}; margin-right`,
            my: `margin-top: ${value}; margin-bottom`,
              mt: "margin-top",
              mr: "margin-right",
              mb: "margin-bottom",
              ml: "margin-left",
    
              // Background and borders
              bg: "background",
              bgColor: "background-color",
              bgImage: "background-image",
              bgSize: "background-size",
              bgPosition: "background-position",
              bgRepeat: "background-repeat",
              rounded: "border-radius",
              borderWidth: "border-width",
              borderColor: "border-color",
              borderStyle: "border-style",
    
              // Typography
              color: "color",
              font: "font",
              fontSize: "font-size",
              fontWeight: "font-weight",
              fontStyle: "font-style",
              fontFamily: "font-family",
              lineHeight: "line-height",
              letterSpacing: "letter-spacing",
              text: "text-align",
              textDecoration: "text-decoration",
              textTransform: "text-transform",
              whiteSpace: "white-space",
              wordBreak: "word-break",
              overflowWrap: "overflow-wrap",
    
              // Flexbox and grid
              flex: "flex",
              grow: "flex-grow",
              shrink: "flex-shrink",
              basis: "flex-basis",
              gap: "gap",
              justify: "justify-content",
              items: "align-items",
              content: "align-content",
              self: "align-self",
              order: "order",
              grid: "grid",
              gridCols: "grid-template-columns",
              gridRows: "grid-template-rows",
              gridGap: "grid-gap",
    
              // Positioning
              pos: "position",
              z: "z-index",
              top: "top",
              right: "right",
              bottom: "bottom",
              left: "left",
    
              // Transitions and animations
              transition: "transition",
              transitionDuration: "transition-duration",
              transitionTiming: "transition-timing-function",
              transitionDelay: "transition-delay",
              animation: "animation",
              animationName: "animation-name",
              animationDuration: "animation-duration",
              animationTiming: "animation-timing-function",
              animationDelay: "animation-delay",
              animationIteration: "animation-iteration-count",
              animationDirection: "animation-direction",
              animationFillMode: "animation-fill-mode",
              animationPlayState: "animation-play-state",
    
              // Box shadow and opacity
              shadow: "box-shadow",
              opacity: "opacity",
    
              // Keyframes
              keyframes: `@keyframes ${value} { /* Add keyframe rules here */ }`,
    
              // Cursor and pointer events
              cursor: "cursor",
              pointerEvents: "pointer-events",
    
              // Other CSS properties
              clipPath: "clip-path",
              filter: "filter",
              transform: "transform",
              transformOrigin: "transform-origin",
              visibility: "visibility",
              overflow: "overflow",
              overflowX: "overflow-x",
              overflowY: "overflow-y",
    
              // Advanced properties
              backdropFilter: "backdrop-filter",
              mixBlendMode: "mix-blend-mode",
              isolation: "isolation",
              perspective: "perspective",
              perspectiveOrigin: "perspective-origin",
              scrollBehavior: "scroll-behavior",
              resize: "resize",
              userSelect: "user-select",
    
              // Media queries shorthand
    
              // Custom mappings for shorthand properties
              transitionAll: "transition: all",
              animationAll: "animation: all",
              roundedFull: "border-radius: 50%;",
            }[property];
    

      if (cssProperty) {
        styles.base += `${cssProperty}: ${value}; `;
      }
    }

    // Handle breakpoint-based dynamic classes (e.g., lg:h-[20px])
    const breakpointMatch = cls.match(/^(\w+):(\w+)-\[(.+)\]$/);
    if (breakpointMatch) {
      const [_, breakpoint, property, value] = breakpointMatch;
      const cssProperty = {
        // Box model properties
        h: "height",
        w: "width",
        minH: "min-height",
        maxH: "max-height",
        minW: "min-width",
        maxW: "max-width",
        p: "padding",
        px: `padding-left: ${value}; padding-right`,
      py: `padding-top: ${value}; padding-bottom`,
        pt: "padding-top",
        pr: "padding-right",
        pb: "padding-bottom",
        pl: "padding-left",
        m: "margin",
        mx: `margin-left: ${value}; margin-right`,
      my: `margin-top: ${value}; margin-bottom`,
        mt: "margin-top",
        mr: "margin-right",
        mb: "margin-bottom",
        ml: "margin-left",

        // Background and borders
        bg: "background",
        bgColor: "background-color",
        bgImage: "background-image",
        bgSize: "background-size",
        bgPosition: "background-position",
        bgRepeat: "background-repeat",
        rounded: "border-radius",
        borderWidth: "border-width",
        borderColor: "border-color",
        borderStyle: "border-style",

        // Typography
        color: "color",
        font: "font",
        fontSize: "font-size",
        fontWeight: "font-weight",
        fontStyle: "font-style",
        fontFamily: "font-family",
        lineHeight: "line-height",
        letterSpacing: "letter-spacing",
        text: "text-align",
        textDecoration: "text-decoration",
        textTransform: "text-transform",
        whiteSpace: "white-space",
        wordBreak: "word-break",
        overflowWrap: "overflow-wrap",

        // Flexbox and grid
        flex: "flex",
        grow: "flex-grow",
        shrink: "flex-shrink",
        basis: "flex-basis",
        gap: "gap",
        justify: "justify-content",
        items: "align-items",
        content: "align-content",
        self: "align-self",
        order: "order",
        grid: "grid",
        gridCols: "grid-template-columns",
        gridRows: "grid-template-rows",
        gridGap: "grid-gap",

        // Positioning
        pos: "position",
        z: "z-index",
        top: "top",
        right: "right",
        bottom: "bottom",
        left: "left",

        // Transitions and animations
        transition: "transition",
        transitionDuration: "transition-duration",
        transitionTiming: "transition-timing-function",
        transitionDelay: "transition-delay",
        animation: "animation",
        animationName: "animation-name",
        animationDuration: "animation-duration",
        animationTiming: "animation-timing-function",
        animationDelay: "animation-delay",
        animationIteration: "animation-iteration-count",
        animationDirection: "animation-direction",
        animationFillMode: "animation-fill-mode",
        animationPlayState: "animation-play-state",

        // Box shadow and opacity
        shadow: "box-shadow",
        opacity: "opacity",

        // Keyframes
        keyframes: `@keyframes ${value} { /* Add keyframe rules here */ }`,

        // Cursor and pointer events
        cursor: "cursor",
        pointerEvents: "pointer-events",

        // Other CSS properties
        clipPath: "clip-path",
        filter: "filter",
        transform: "transform",
        transformOrigin: "transform-origin",
        visibility: "visibility",
        overflow: "overflow",
        overflowX: "overflow-x",
        overflowY: "overflow-y",

        // Advanced properties
        backdropFilter: "backdrop-filter",
        mixBlendMode: "mix-blend-mode",
        isolation: "isolation",
        perspective: "perspective",
        perspectiveOrigin: "perspective-origin",
        scrollBehavior: "scroll-behavior",
        resize: "resize",
        userSelect: "user-select",

        // Media queries shorthand

        // Custom mappings for shorthand properties
        transitionAll: "transition: all",
        animationAll: "animation: all",
        roundedFull: "border-radius: 50%;",
      }[property];

      const breakpointMedia = breakpoints[breakpoint];
      // console.log(breakpointMedia,cssProperty)
      if (cssProperty && breakpointMedia) {
      //   styles[breakpoint] += `
      //   @media (min-width: ${breakpointMedia.min}) {
      //     ${cssProperty}: ${value};
      //   }
      // `;
        if (!styles[breakpoint]) {
          styles[breakpoint] = '';
        }
        styles[breakpoint] += `${cssProperty}: ${value}; `;
      }
    }
  }
// console.log(styles,"styles")
  return styles;
};
//
  // Handle case when baseStyles is a string
  if (typeof baseStyles === "string") {
    if (baseStyles.startsWith("$")) {
    const config = loadConfig();
    const themeClasses = config.theme.classes;

    // Remove the `$` and resolve the style path
    const stylePath = baseStyles.replace(/^\$|\s+/g, "").split(".");
    let currentLevel: any = themeClasses;

    for (const key of stylePath) {
      if (currentLevel && currentLevel[key]) {
        currentLevel = currentLevel[key];
      } else {
        console.error(
          `Invalid style path: '${baseStyles}'. Key '${key}' not found.`
        );
        currentLevel = {}; // Fallback to empty object
        break;
      }
    }

    resolvedBaseStyles = currentLevel as Styles;
  } else {
    resolvedBaseStyles = generateStyles(baseStyles, breakpoints);
  }
  } else {
    resolvedBaseStyles = baseStyles;
  }

  // Handle case when overrides is a string
  let resolvedOverrides: Styles;
  if (typeof overrides === "string") {
    if (overrides.startsWith("$")) {

    // Remove the `$` and resolve the style path
    const stylePath = overrides.replace(/^\$|\s+/g, "").split(".");
    let currentLevel: any = themeClasses;

    for (const key of stylePath) {
      if (currentLevel && currentLevel[key]) {
        currentLevel = currentLevel[key];
      } else {
        console.error(
          `Invalid style path: '${overrides}'. Key '${key}' not found.`
        );
        currentLevel = {}; // Fallback to empty object
        break;
      }
    }

    resolvedOverrides = currentLevel as Styles;
  }else{
    resolvedOverrides = generateStyles(overrides, breakpoints);

  }
  } else {
    resolvedOverrides = overrides;
  }

  // Start merging the resolved base styles with overrides
  const mergedStyles: Styles = { ...resolvedBaseStyles };
// console.log(mergedStyles,resolvedOverrides,"before merging")
  // Merge styles
  for (const key in resolvedOverrides) {
    if (resolvedBaseStyles[key]) {
      // Merge styles using clx and avoid duplicates
      const newStyle = clx(resolvedBaseStyles[key], resolvedOverrides[key]);
      if (!mergedStyles[key]) {
        mergedStyles[key] = newStyle;
      } else {
        const existingStyles = mergedStyles[key].split(";");
        const newStyles = newStyle.split(";");
        mergedStyles[key] = [
          ...new Set([...existingStyles, ...newStyles]),
        ].join(";");
      }
    } else {
      mergedStyles[key] = resolvedOverrides[key];
    }
  }
// console.log(mergedStyles,"mergedStyles")
  return mergedStyles;
};
