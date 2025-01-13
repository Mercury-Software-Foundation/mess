import { Breakpoints, Styles, StylesMessInternal, Theme } from "./types/mess.d";
import { loadConfig } from "./utils";
import { generateFormattedCssString, generateStyles } from "./messUtils";
import { css } from "@emotion/react";
import { css as cssClassString } from "@emotion/css";

export interface MessObject {
  styles: Styles | string | StylesMessInternal;
  customeclasses?: string;
  usingClasses?: boolean;
}
export const Mess = ({
  styles,
  customeclasses = "",
  usingClasses = true,
}: MessObject): string => {

  const stylesCssObject: StylesMessInternal | string =
    typeof styles == "string"
      ? styles
      : Object.fromEntries(
          Object.keys(styles).map((item) => [item, css(styles[item]).styles])
        );
  const config = loadConfig();
  const breakpoints: Breakpoints = config.breakpoints || {};
  const theme: Theme = config.theme;
  let resolvedStyles: StylesMessInternal = {};
  // If styles is a string, resolve it from config.theme.classes
  if (typeof stylesCssObject === "string") {
    const stylePath = stylesCssObject.replace(/^\$|\s+/g, "").split(".");
    let currentLevel: any = theme.classes;
    // console.log(stylePath,currentLevel,"stylepath,currentLevel")
    for (const key of stylePath) {
      // console.log(currentLevel,currentLevel[key],"stylepath,currentLevel")

      if (currentLevel && currentLevel[key]) {
        currentLevel = currentLevel[key];
      } else {
        console.error(
          `Invalid style path: '${stylesCssObject}'. Key '${key}' not found.`
        );
        currentLevel = {};
        break;
      }
    }

    resolvedStyles = currentLevel as StylesMessInternal;
  } else if (typeof stylesCssObject === "object") {
    resolvedStyles = stylesCssObject;
  }

  let cssString = resolvedStyles?.base ?? "";

  if (customeclasses) {
    resolvedStyles = generateStyles(customeclasses, breakpoints, theme);
    cssString = resolvedStyles?.base ?? "";
  }
  if (breakpoints && resolvedStyles) {
    Object.entries(breakpoints).forEach(([key, value]) => {
      const styleForKey = resolvedStyles[key];
      if (styleForKey && value.min) {
        cssString += `
          @media (min-width: ${value.min}) {
            ${styleForKey.replace(/\$([a-zA-Z]+)/g, (_, token) => {
              // Iterate over all theme keys to find the token in any of the theme properties
              for (const key in theme) {
                //@ts-ignore
                if (theme[key]?.[token]) {
                  //@ts-ignore

                  return theme[key][token];
                }
              }
              return token; // Return the token itself if no match is found
            })}
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
            ${style.replace(/\$([a-zA-Z]+)/g, (_, token) => {
              // Iterate over all theme keys to find the token in any of the theme properties
              for (const key in theme) {
                //@ts-ignore
                if (theme[key]?.[token]) {
                  //@ts-ignore

                  return theme[key][token];
                }
              }
              return token; // Return the token itself if no match is found
            })}
          }
        `;
      } else if (breakpoints[key]) {
        cssString += `
          @media (prefers-color-scheme: dark) and (min-width: ${
            breakpoints[key].min
          }) {
            ${style.replace(/\$([a-zA-Z]+)/g, (_, token) => {
              // Iterate over all theme keys to find the token in any of the theme properties
              for (const key in theme) {
                //@ts-ignore
                if (theme[key]?.[token]) {
                  //@ts-ignore

                  return theme[key][token];
                }
              }
              return token; // Return the token itself if no match is found
            })}
          }
        `;
      }
    });
  }

  // Replace tokens in base stylesCssObject
  cssString = cssString.replace(/\$([a-zA-Z]+)/g, (_, token) => {
    // Iterate over all theme keys to find the token in any of the theme properties
    for (const key in theme) {
      // console.log(key,token,"key token")
      //@ts-ignore
      if (theme[key]?.[token]) {
        //@ts-ignore

        return theme[key][token];
      }
    }
    // console.log(token,"token")
    return token; // Return the token itself if no match is found
  });

  return !usingClasses ? cssString : cssClassString`${cssString}`;
};

export const Clx = (
  ...baseStyles: (Styles | string | StylesMessInternal)[]
) => {
  const config = loadConfig();
  const mergedStyles: StylesMessInternal = {};

  for (const baseStyleCssObj of baseStyles) {
    const baseStyle: StylesMessInternal | string =
      typeof baseStyleCssObj == "string"
        ? baseStyleCssObj
        : Object.fromEntries(
            Object.keys(baseStyleCssObj).map((item) => [
              item,
              css(baseStyleCssObj[item]).styles,
            ])
          );
    // Handle case when baseStyle is a string
    const resolvedBaseStyles: StylesMessInternal = generateFormattedCssString(
      baseStyle,
      config
    );


    // Merge stylesCssObject
    for (const key in resolvedBaseStyles) {
      const existingStyles = mergedStyles[key];
      const newStyles = resolvedBaseStyles[key];
      mergedStyles[key] = css(existingStyles, newStyles).styles;
    }
  }
  
  return mergedStyles;
};
