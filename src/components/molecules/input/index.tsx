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
}

export interface Styles {
  base?: string;
  [key: string]: string | undefined;
}

export const Mess = (styles: Styles): string => {
  const config = loadConfig();
  const breakpoints: Breakpoints = config.breakpoints;
  const theme = config.theme;
console.log(breakpoints,theme,"mess")
  let cssString = styles?.base ?? '';

  if (breakpoints && styles) {
    Object.entries(breakpoints).forEach(([key, value]) => {
      const styleForKey = styles[key];
      if (styleForKey && value.min) {
        cssString += `
          @media (min-width: ${value.min}){
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

export const Clx = (baseStyles: Styles, overrides: Styles) => {
  const mergedStyles: Styles = { ...baseStyles };
  console.log(baseStyles,overrides,"in package")
  // Iterate over the overrides and merge them
  for (const key in overrides) {
    if (baseStyles[key]) {
      // Only add to the merged style if it's not already present
      const newStyle = clx(baseStyles[key], overrides[key]);
      if (!mergedStyles[key]) {
        mergedStyles[key] = newStyle;
      } else {
        // Avoid duplicates by merging only the new styles
        const existingStyles = mergedStyles[key].split(';');
        const newStyles = newStyle.split(';');
        mergedStyles[key] = [...new Set([...existingStyles, ...newStyles])].join(';');
      }
    } else {
      mergedStyles[key] = overrides[key];
    }
  }
  console.log(mergedStyles,"mergedStyles")
  return mergedStyles;
};
