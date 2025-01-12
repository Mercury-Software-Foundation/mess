import { Breakpoints, Styles, Theme } from "./types/mess.d";

import { clx } from "@medusajs/ui";
import { loadConfig } from "./utils";
import { generateFormattedCssString, generateStyles } from "./messUtils";

export const Mess = (
  styles: Styles | string,
  customeclasses?: string
): string => {
  // console.log(customeclasses, "customeclass");
  const config = loadConfig();
  const breakpoints: Breakpoints = config.breakpoints || {};
  const theme: Theme = config.theme;
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

  // Replace tokens in base styles
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

  return cssString;
};

export const Clx = (
  baseStyles: Styles | string,
  overrides: Styles | string
) => {
  const config = loadConfig();
  // Handle case when baseStyles is a string
  let resolvedBaseStyles: Styles = generateFormattedCssString(
    baseStyles,
    config
  );
  // Handle case when overrides is a string
  let resolvedOverrides: Styles = generateFormattedCssString(overrides, config);
  // Start merging the resolved base styles with overrides
  const mergedStyles: Styles = { ...resolvedBaseStyles };
  // Merge styles
  for (const key in resolvedOverrides) {
    if (resolvedBaseStyles[key]) {
      const existingStyles = mergedStyles[key]?.split(";") || [];
      const newStyles = resolvedOverrides[key]?.split(";") || [];
      mergedStyles[key] = [...new Set([...existingStyles, ...newStyles])].join(
        ";"
      );
    } else {
      mergedStyles[key] = resolvedOverrides[key];
    }
  }
  return mergedStyles;
};
