import { defaultBreakpoints, defaultTheme } from './defaultConfig';
import * as path from 'path';

export const loadConfig = (): any => {
  const configPath = path.resolve(process.cwd(), 'mess.config.js');
  console.log(configPath, "Config Path");

  try {
    // Clear the require cache to ensure the latest changes are picked up
    delete require.cache[require.resolve(configPath)];
    const userConfig = require(configPath);

    // Merge user-defined configurations with defaults
    return {
      breakpoints: { ...defaultBreakpoints, ...userConfig.breakpoints },
      theme: {
        colors: { ...defaultTheme?.colors, ...userConfig.theme?.colors },
        fontSizes: { ...defaultTheme?.fontSizes, ...userConfig.theme?.fontSizes },
        paddings: { ...defaultTheme?.paddings, ...userConfig.theme?.paddings },
        classes: {  ...userConfig.theme?.classes },

        // Add more theme properties here if needed
      },
    };
  } catch (error) {
    console.warn(`Config file not found or invalid. Using default configurations.`, error);

    // Return defaults if config file is not found or invalid
    return {
      breakpoints: defaultBreakpoints,
      theme: defaultTheme,
    };
  }
};
