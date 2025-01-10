import { defaultBreakpoints, defaultTheme } from "./defaultConfig";
import * as path from "path";

export const loadConfig = (): any => {
  const configPath = path.resolve(process.cwd(), "mess.config.js");
  // console.log(configPath, "Config Path");

  try {
    // Clear the require cache to ensure the latest changes are picked up
    delete require.cache[require.resolve(configPath)];
    const userConfig = require(configPath);

    // Merge user-defined configurations with defaults
    return {
      breakpoints: { ...defaultBreakpoints, ...userConfig.breakpoints },
      theme: {
        colors: { ...defaultTheme?.colors, ...userConfig.theme?.colors },
        fontSizes: {
          ...defaultTheme?.fontSizes,
          ...userConfig.theme?.fontSizes,
        },
        paddings: { ...defaultTheme?.paddings, ...userConfig.theme?.paddings },
        classes: { ...defaultTheme?.classes, ...userConfig.theme?.classes },
        utilityClasses: {
          ...defaultTheme?.utilityClasses,
          ...userConfig.theme?.utilityClasses,
        },
        accentColor: {
          ...defaultTheme?.accentColor,
          ...userConfig.theme?.accentColor,
        },
        animation: {
          ...defaultTheme?.animation,
          ...userConfig.theme?.animation,
        },
        aria: { ...defaultTheme?.aria, ...userConfig.theme?.aria },
        aspectRatio: {
          ...defaultTheme?.aspectRatio,
          ...userConfig.theme?.aspectRatio,
        },
        backdropBlur: {
          ...defaultTheme?.backdropBlur,
          ...userConfig.theme?.backdropBlur,
        },
        backdropBrightness: {
          ...defaultTheme?.backdropBrightness,
          ...userConfig.theme?.backdropBrightness,
        },
        backdropContrast: {
          ...defaultTheme?.backdropContrast,
          ...userConfig.theme?.backdropContrast,
        },
        backdropGrayscale: {
          ...defaultTheme?.backdropGrayscale,
          ...userConfig.theme?.backdropGrayscale,
        },
        backdropHueRotate: {
          ...defaultTheme?.backdropHueRotate,
          ...userConfig.theme?.backdropHueRotate,
        },
        backdropInvert: {
          ...defaultTheme?.backdropInvert,
          ...userConfig.theme?.backdropInvert,
        },
        backdropOpacity: {
          ...defaultTheme?.backdropOpacity,
          ...userConfig.theme?.backdropOpacity,
        },
        backdropSaturate: {
          ...defaultTheme?.backdropSaturate,
          ...userConfig.theme?.backdropSaturate,
        },
        backdropSepia: {
          ...defaultTheme?.backdropSepia,
          ...userConfig.theme?.backdropSepia,
        },
        backgroundColor: {
          ...defaultTheme?.backgroundColor,
          ...userConfig.theme?.backgroundColor,
        },
        backgroundImage: {
          ...defaultTheme?.backgroundImage,
          ...userConfig.theme?.backgroundImage,
        },
        backgroundOpacity: {
          ...defaultTheme?.backgroundOpacity,
          ...userConfig.theme?.backgroundOpacity,
        },
        backgroundPosition: {
          ...defaultTheme?.backgroundPosition,
          ...userConfig.theme?.backgroundPosition,
        },
        backgroundSize: {
          ...defaultTheme?.backgroundSize,
          ...userConfig.theme?.backgroundSize,
        },
        blur: { ...defaultTheme?.blur, ...userConfig.theme?.blur },
        borderColor: {
          ...defaultTheme?.borderColor,
          ...userConfig.theme?.borderColor,
        },
        borderOpacity: {
          ...defaultTheme?.borderOpacity,
          ...userConfig.theme?.borderOpacity,
        },
        borderRadius: {
          ...defaultTheme?.borderRadius,
          ...userConfig.theme?.borderRadius,
        },
        borderSpacing: {
          ...defaultTheme?.borderSpacing,
          ...userConfig.theme?.borderSpacing,
        },
        borderWidth: {
          ...defaultTheme?.borderWidth,
          ...userConfig.theme?.borderWidth,
        },
        boxShadow: {
          ...defaultTheme?.boxShadow,
          ...userConfig.theme?.boxShadow,
        },
        boxShadowColor: {
          ...defaultTheme?.boxShadowColor,
          ...userConfig.theme?.boxShadowColor,
        },
        brightness: {
          ...defaultTheme?.brightness,
          ...userConfig.theme?.brightness,
        },
        caretColor: {
          ...defaultTheme?.caretColor,
          ...userConfig.theme?.caretColor,
        },
        columns: { ...defaultTheme?.columns, ...userConfig.theme?.columns },
        container: {
          ...defaultTheme?.container,
          ...userConfig.theme?.container,
        },
        content: { ...defaultTheme?.content, ...userConfig.theme?.content },
        contrast: { ...defaultTheme?.contrast, ...userConfig.theme?.contrast },
        cursor: { ...defaultTheme?.cursor, ...userConfig.theme?.cursor },
        divideColor: {
          ...defaultTheme?.divideColor,
          ...userConfig.theme?.divideColor,
        },
        divideOpacity: {
          ...defaultTheme?.divideOpacity,
          ...userConfig.theme?.divideOpacity,
        },
        divideWidth: {
          ...defaultTheme?.divideWidth,
          ...userConfig.theme?.divideWidth,
        },
        dropShadow: {
          ...defaultTheme?.dropShadow,
          ...userConfig.theme?.dropShadow,
        },
        fill: { ...defaultTheme?.fill, ...userConfig.theme?.fill },
        flex: { ...defaultTheme?.flex, ...userConfig.theme?.flex },
        flexBasis: {
          ...defaultTheme?.flexBasis,
          ...userConfig.theme?.flexBasis,
        },
        flexGrow: { ...defaultTheme?.flexGrow, ...userConfig.theme?.flexGrow },
        flexShrink: {
          ...defaultTheme?.flexShrink,
          ...userConfig.theme?.flexShrink,
        },
        fontFamily: {
          ...defaultTheme?.fontFamily,
          ...userConfig.theme?.fontFamily,
        },
        fontSize: { ...defaultTheme?.fontSize, ...userConfig.theme?.fontSize },
        fontWeight: {
          ...defaultTheme?.fontWeight,
          ...userConfig.theme?.fontWeight,
        },
        gap: { ...defaultTheme?.gap, ...userConfig.theme?.gap },
        gradientColorStops: {
          ...defaultTheme?.gradientColorStops,
          ...userConfig.theme?.gradientColorStops,
        },
        gradientColorStopPositions: {
          ...defaultTheme?.gradientColorStopPositions,
          ...userConfig.theme?.gradientColorStopPositions,
        },
        grayscale: {
          ...defaultTheme?.grayscale,
          ...userConfig.theme?.grayscale,
        },
        gridAutoColumns: {
          ...defaultTheme?.gridAutoColumns,
          ...userConfig.theme?.gridAutoColumns,
        },
        gridAutoRows: {
          ...defaultTheme?.gridAutoRows,
          ...userConfig.theme?.gridAutoRows,
        },
        gridColumn: {
          ...defaultTheme?.gridColumn,
          ...userConfig.theme?.gridColumn,
        },
        gridColumnEnd: {
          ...defaultTheme?.gridColumnEnd,
          ...userConfig.theme?.gridColumnEnd,
        },
        gridColumnStart: {
          ...defaultTheme?.gridColumnStart,
          ...userConfig.theme?.gridColumnStart,
        },
        gridRow: { ...defaultTheme?.gridRow, ...userConfig.theme?.gridRow },
        gridRowEnd: {
          ...defaultTheme?.gridRowEnd,
          ...userConfig.theme?.gridRowEnd,
        },
        gridRowStart: {
          ...defaultTheme?.gridRowStart,
          ...userConfig.theme?.gridRowStart,
        },
        gridTemplateColumns: {
          ...defaultTheme?.gridTemplateColumns,
          ...userConfig.theme?.gridTemplateColumns,
        },
        gridTemplateRows: {
          ...defaultTheme?.gridTemplateRows,
          ...userConfig.theme?.gridTemplateRows,
        },
        height: { ...defaultTheme?.height, ...userConfig.theme?.height },
        hueRotate: {
          ...defaultTheme?.hueRotate,
          ...userConfig.theme?.hueRotate,
        },
        inset: { ...defaultTheme?.inset, ...userConfig.theme?.inset },
        invert: { ...defaultTheme?.invert, ...userConfig.theme?.invert },
        keyframes: {
          ...defaultTheme?.keyframes,
          ...userConfig.theme?.keyframes,
        },
        letterSpacing: {
          ...defaultTheme?.letterSpacing,
          ...userConfig.theme?.letterSpacing,
        },
        lineHeight: {
          ...defaultTheme?.lineHeight,
          ...userConfig.theme?.lineHeight,
        },
        listStyleType: {
          ...defaultTheme?.listStyleType,
          ...userConfig.theme?.listStyleType,
        },
        listStyleImage: {
          ...defaultTheme?.listStyleImage,
          ...userConfig.theme?.listStyleImage,
        },
        margin: { ...defaultTheme?.margin, ...userConfig.theme?.margin },
        lineClamp: {
          ...defaultTheme?.lineClamp,
          ...userConfig.theme?.lineClamp,
        },
        maxHeight: {
          ...defaultTheme?.maxHeight,
          ...userConfig.theme?.maxHeight,
        },
        maxWidth: { ...defaultTheme?.maxWidth, ...userConfig.theme?.maxWidth },
        minHeight: {
          ...defaultTheme?.minHeight,
          ...userConfig.theme?.minHeight,
        },
        minWidth: { ...defaultTheme?.minWidth, ...userConfig.theme?.minWidth },
        objectPosition: {
          ...defaultTheme?.objectPosition,
          ...userConfig.theme?.objectPosition,
        },
        opacity: { ...defaultTheme?.opacity, ...userConfig.theme?.opacity },
        order: { ...defaultTheme?.order, ...userConfig.theme?.order },
        outlineColor: {
          ...defaultTheme?.outlineColor,
          ...userConfig.theme?.outlineColor,
        },
        outlineOffset: {
          ...defaultTheme?.outlineOffset,
          ...userConfig.theme?.outlineOffset,
        },
        outlineWidth: {
          ...defaultTheme?.outlineWidth,
          ...userConfig.theme?.outlineWidth,
        },
        padding: { ...defaultTheme?.padding, ...userConfig.theme?.padding },
        placeholderColor: {
          ...defaultTheme?.placeholderColor,
          ...userConfig.theme?.placeholderColor,
        },
        placeholderOpacity: {
          ...defaultTheme?.placeholderOpacity,
          ...userConfig.theme?.placeholderOpacity,
        },
        ringColor: {
          ...defaultTheme?.ringColor,
          ...userConfig.theme?.ringColor,
        },
        ringOffsetColor: {
          ...defaultTheme?.ringOffsetColor,
          ...userConfig.theme?.ringOffsetColor,
        },
        ringOffsetWidth: {
          ...defaultTheme?.ringOffsetWidth,
          ...userConfig.theme?.ringOffsetWidth,
        },
        ringOpacity: {
          ...defaultTheme?.ringOpacity,
          ...userConfig.theme?.ringOpacity,
        },
        ringWidth: {
          ...defaultTheme?.ringWidth,
          ...userConfig.theme?.ringWidth,
        },
        rotate: { ...defaultTheme?.rotate, ...userConfig.theme?.rotate },
        saturate: { ...defaultTheme?.saturate, ...userConfig.theme?.saturate },
        scale: { ...defaultTheme?.scale, ...userConfig.theme?.scale },
        screens: { ...defaultTheme?.screens, ...userConfig.theme?.screens },
        scrollMargin: {
          ...defaultTheme?.scrollMargin,
          ...userConfig.theme?.scrollMargin,
        },
        scrollPadding: {
          ...defaultTheme?.scrollPadding,
          ...userConfig.theme?.scrollPadding,
        },
        sepia: { ...defaultTheme?.sepia, ...userConfig.theme?.sepia },
        skew: { ...defaultTheme?.skew, ...userConfig.theme?.skew },
        space: { ...defaultTheme?.space, ...userConfig.theme?.space },
        spacing: { ...defaultTheme?.spacing, ...userConfig.theme?.spacing },
        stroke: { ...defaultTheme?.stroke, ...userConfig.theme?.stroke },
        strokeWidth: {
          ...defaultTheme?.strokeWidth,
          ...userConfig.theme?.strokeWidth,
        },
        supports: { ...defaultTheme?.supports, ...userConfig.theme?.supports },
        data: { ...defaultTheme?.data, ...userConfig.theme?.data },
        textColor: {
          ...defaultTheme?.textColor,
          ...userConfig.theme?.textColor,
        },
        textDecorationColor: {
          ...defaultTheme?.textDecorationColor,
          ...userConfig.theme?.textDecorationColor,
        },
        textDecorationThickness: {
          ...defaultTheme?.textDecorationThickness,
          ...userConfig.theme?.textDecorationThickness,
        },
        textIndent: {
          ...defaultTheme?.textIndent,
          ...userConfig.theme?.textIndent,
        },
        textOpacity: {
          ...defaultTheme?.textOpacity,
          ...userConfig.theme?.textOpacity,
        },
        textUnderlineOffset: {
          ...defaultTheme?.textUnderlineOffset,
          ...userConfig.theme?.textUnderlineOffset,
        },
        transformOrigin: {
          ...defaultTheme?.transformOrigin,
          ...userConfig.theme?.transformOrigin,
        },
        transitionDelay: {
          ...defaultTheme?.transitionDelay,
          ...userConfig.theme?.transitionDelay,
        },
        transitionDuration: {
          ...defaultTheme?.transitionDuration,
          ...userConfig.theme?.transitionDuration,
        },
        transitionProperty: {
          ...defaultTheme?.transitionProperty,
          ...userConfig.theme?.transitionProperty,
        },
        transitionTimingFunction: {
          ...defaultTheme?.transitionTimingFunction,
          ...userConfig.theme?.transitionTimingFunction,
        },
        translate: {
          ...defaultTheme?.translate,
          ...userConfig.theme?.translate,
        },
        size: { ...defaultTheme?.size, ...userConfig.theme?.size },
        width: { ...defaultTheme?.width, ...userConfig.theme?.width },
        willChange: {
          ...defaultTheme?.willChange,
          ...userConfig.theme?.willChange,
        },
        zIndex: { ...defaultTheme?.zIndex, ...userConfig.theme?.zIndex },
        // Add more theme properties here if needed
      },
    };
  } catch (error) {
    // console.warn(`Config file not found or invalid. Using default configurations.`, error);

    // Return defaults if config file is not found or invalid
    return {
      breakpoints: defaultBreakpoints,
      theme: defaultTheme,
    };
  }
};
