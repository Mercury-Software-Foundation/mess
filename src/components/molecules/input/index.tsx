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
}

export interface Styles {
  base?: string;
  [key: string]: string | undefined;
}

export const Mess = (styles: Styles | string): string => {
  const config = loadConfig();
  const breakpoints: Breakpoints = config.breakpoints;
  const theme: Theme = config.theme;
console.log(breakpoints,theme,styles,typeof(styles),"mess")
  let resolvedStyles: Styles = {};

  // If styles is a string, resolve it from config.theme.classes
  if (typeof styles === "string") {
    const stylePath = styles.replace(/^\$|\s+/g, "").split(".");
    let currentLevel: any = theme.classes;
  console.log(stylePath,currentLevel,"stylepath,currentLevel")
    for (const key of stylePath) {
  console.log(currentLevel,currentLevel[key],"stylepath,currentLevel")
      
      if (currentLevel && currentLevel[key]) {
        currentLevel = currentLevel[key];
      } else {
        console.error(`Invalid style path: '${styles}'. Key '${key}' not found.`);
        currentLevel = {};
        break;
      }
    }
  
    resolvedStyles = currentLevel as Styles;
  }
   else if (typeof styles === "object") {
    resolvedStyles = styles;
  }

  let cssString = resolvedStyles?.base ?? "";

  if (breakpoints && resolvedStyles) {
    Object.entries(breakpoints).forEach(([key, value]) => {
      const styleForKey = resolvedStyles[key];
      if (styleForKey && value.min) {
        cssString += `
          @media (min-width: ${value.min}) {
            ${styleForKey.replace(
              /\$([a-zA-Z]+)/g,
              (_, token) =>
                theme.colors?.[token] || // Resolve colors
                theme.fontSizes?.[token] || // Resolve font sizes
                theme.paddings?.[token] || // Resolve paddings
                token // Fallback to token if not found
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
              (_, token) =>
                theme.colors?.[token] || theme.fontSizes?.[token] || theme.paddings?.[token] || token
            )}
          }
        `;
      } else if (breakpoints[key]) {
        cssString += `
          @media (prefers-color-scheme: dark) and (min-width: ${breakpoints[key].min}) {
            ${style.replace(
              /\$([a-zA-Z]+)/g,
              (_, token) =>
                theme.colors?.[token] || theme.fontSizes?.[token] || theme.paddings?.[token] || token
            )}
          }
        `;
      }
    });
  }
  
  // Replace tokens in base styles
  cssString = cssString.replace(
    /\$([a-zA-Z]+)/g,
    (_, token) =>
      theme.colors?.[token] || theme.fontSizes?.[token] || theme.paddings?.[token] || token
  );

  return cssString;
};


/**
 * Dynamically merge styles for specific breakpoints.
 * @param baseStyles - The base styles object (e.g., theme styles).
 * @param overrides - The overrides object with custom styles.
 * @returns Merged styles object.
 */
export const Clx = (baseStyles: Styles | string, overrides: Styles) => {
  let resolvedBaseStyles: Styles;

  // Handle case when baseStyles is a string
  if (typeof baseStyles === "string") {
    const config = loadConfig();
    const themeClasses = config.theme.classes;

    // Remove the `$` and resolve the style path
    const stylePath = baseStyles.replace(/^\$|\s+/g, "").split(".");
    let currentLevel: any = themeClasses;

    for (const key of stylePath) {
      if (currentLevel && currentLevel[key]) {
        currentLevel = currentLevel[key];
      } else {
        console.error(`Invalid style path: '${baseStyles}'. Key '${key}' not found.`);
        currentLevel = {};
        break;
      }
    }

    resolvedBaseStyles = currentLevel as Styles;
  } else {
    resolvedBaseStyles = baseStyles;
  }

  // Start merging the resolved base styles with overrides
  const mergedStyles: Styles = { ...resolvedBaseStyles };
  console.log(resolvedBaseStyles, overrides, "Resolved BaseStyles and Overrides");

  for (const key in overrides) {
    if (resolvedBaseStyles[key]) {
      // Merge styles using clx and avoid duplicates
      const newStyle = clx(resolvedBaseStyles[key], overrides[key]);
      if (!mergedStyles[key]) {
        mergedStyles[key] = newStyle;
      } else {
        const existingStyles = mergedStyles[key].split(";");
        const newStyles = newStyle.split(";");
        mergedStyles[key] = [...new Set([...existingStyles, ...newStyles])].join(";");
      }
    } else {
      mergedStyles[key] = overrides[key];
    }
  }

  console.log(mergedStyles, "Final Merged Styles");
  return mergedStyles;
};