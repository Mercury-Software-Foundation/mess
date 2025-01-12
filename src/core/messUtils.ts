import { cssClassMapping } from "./constant";
import { Breakpoints, MessConfig, StylesMessInternal, Theme } from "./types/mess";

type CssClassKeys = keyof typeof cssClassMapping;

export const generateStyles = (
  customClasses: string,
  breakpoints: Breakpoints,
  theme: Theme
) => {
  let styles: StylesMessInternal = { base: "" };

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
      const cssProperty = cssClassMapping[property as CssClassKeys];

      if (cssProperty) {
        styles.base += getCssPropertyValue(cssProperty, value);
      }
    }

    // Handle breakpoint-based dynamic classes (e.g., lg:h-[20px])
    const breakpointMatch = cls.match(/^(\w+):(\w+)-\[(.+)\]$/);
    if (breakpointMatch) {
      const [_, breakpoint, property, value] = breakpointMatch;
      const cssProperty = cssClassMapping[property as CssClassKeys];
      const breakpointMedia = breakpoints[breakpoint];
      if (cssProperty && breakpointMedia) {
        //   styles[breakpoint] += `
        //   @media (min-width: ${breakpointMedia.min}) {
        //     ${cssProperty}: ${value};
        //   }
        // `;
        if (!styles[breakpoint]) {
          styles[breakpoint] = "";
        }
        styles.base += getCssPropertyValue(cssProperty, value);
      }
    }
  }
  return styles;
};

const getCssPropertyValue = (cssProperty: string | string[], value: string) => {
  return typeof cssProperty === "string"
    ? `${cssProperty}: ${value}; `
    : (() => {
        let arrayClassesResolved = "";
        cssProperty.forEach(
          (item) => (arrayClassesResolved += `${item}: ${value}; `)
        );
        return arrayClassesResolved;
      })();
};

export const generateFormattedCssString = (
  userStyles: StylesMessInternal | string,
  config: MessConfig
) => {
  let resolvedBaseStyles;
  if (typeof userStyles === "string") {
    if (userStyles.startsWith("$")) {
      const themeClasses = config.theme.classes;

      // Remove the `$` and resolve the style path
      const stylePath = userStyles.replace(/^\$|\s+/g, "").split(".");
      let currentLevel: any = themeClasses;

      for (const key of stylePath) {
        if (currentLevel && currentLevel[key]) {
          currentLevel = currentLevel[key];
        } else {
          console.error(
            `Invalid style path: '${userStyles}'. Key '${key}' not found.`
          );
          currentLevel = {}; // Fallback to empty object
          break;
        }
      }

      resolvedBaseStyles = currentLevel as StylesMessInternal;
    } else {
      resolvedBaseStyles = generateStyles(
        userStyles,
        config.breakpoints || {},
        config.theme
      );
    }
  } else {
    resolvedBaseStyles = userStyles;
  }
  return resolvedBaseStyles;
};
