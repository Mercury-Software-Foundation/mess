---
sidebar_position: 4
title: "Mess Config"
---

The `mess.config.js` file is used to define custom configurations for your `mess` package. This file must be placed in the root directory of your project. It allows users to define reusable styles, paddings, and other utilities, enabling consistent styling across the application.

---

## **File Structure**
The basic structure of the `mess.config.js` file looks like this:

```javascript
module.exports = {
  theme: {
    colors: { primary: "#1e90ff", secondary: "#ffa500" },
    fontSizes: { small: "30px", medium: "16px", large: "20px" },
    paddings: { sm: "80px", md: "12px", lg: "16px" },

    classes: {
      buttonStyles: {
        base: {
      padding: "8px 10px",
      background: "#27A5C9",
      color: "white",
      borderRadius: "8px",
      border: "none",
    },
    lg: {
      padding: "10px 20px",
    },
      },
    },
  },
};
```
## Configuration Details ##
### Breakpoints

The `breakpoints` configuration allows users to define responsive design breakpoints for their project. These breakpoints can be customized through the configuration file provided to the `mess` package.

#### Default Breakpoints

The package ships with the following default breakpoints:

| Key   | Min Width  | Description                                  |
|-------|------------|----------------------------------------------|
| `sm`  | `320px`    | Small screens, typically for mobile devices. |
| `md`  | `768px`    | Medium screens, typically for tablets.       |
| `lg`  | `1024px`   | Large screens, typically for desktops.       |
| `xl`  | `1280px`   | Extra large screens, typically for larger monitors. |
| `xxl` | `1536px`   | Extra extra large screens, typically for very wide displays. |

#### Customizing Breakpoints

you can override the default breakpoints by specifying their own values in the configuration file. This allows flexibility to match the design requirements of any project.

#### Example Configuration

Here is an example of customizing breakpoints in the `mess` configuration file:

```javascript
module.exports = {
    breakpoints: {
    sm: { min: "360px" }, // Customized small breakpoint
    md: { min: "800px" }, // Customized medium breakpoint
    lg: { min: "1080px" }, // Customized large breakpoint
    xl: { min: "1440px" }, // Customized extra-large breakpoint
    xxl: { min: "1920px" }, // Customized extra-extra-large breakpoint
    //you can add more breakpoints according to the requirement
  },
  theme:{}
};
```
### Theme Configuration ###


The `theme` object is the main configuration section for styling. It allows you to define reusable utilities like custom `paddings` and other style classes.

**Structure**

```json
{
  "theme": {
    "paddings": {
      "small": "8px",
      "medium": "16px",
      "large": "24px"
    }
  }
}

```
* `small`: Represents small padding (10px).
* `medium`: Represents medium padding (42px).
* `large`: Represents large padding (40px).

**Usage**
```
base: "padding: $medium;"
```
### Classes ###
The `classes` key is used to define reusable styles for specific components, such as buttons, boxes, etc.

```json
{
"classes": {
  "buttonStyles": {
    "base":{
      padding: "8px 10px",
      background: "#27A5C9",
      color: "white",
      borderRadius: "8px",
      border: "none",
    },
    lg: {
      padding: "10px 20px",
    },
  }
}
}

```
Here’s what each key in buttonStyles does:

* `base`: Default styles for the button (applied across all screen sizes).
* `sm`: Styles for small screens (e.g., font size 10px, padding 50px).
* `lg`: Styles for large screens (e.g., text color black, background color green, border radius 50px).

## How to Use ` mess.config.js ` ##

Once the `mess.config.js` file is set up, the defined paddings and classes can be directly referenced in your components.
```javascript
import { Button } from 'mess';

const MyButton = () => {
  return (
    <Button
      styles={"$buttonStyles"}
    >
      Custom Button
    </Button>
  );
};

export default MyButton;
```
If in case an issue use `theme` from config

```javascript
import { Button } from 'mess';

const MyButton = () => {
  return (
    <Button
      styles={theme.classes.buttonStyles}
    >
      Custom Button
    </Button>
  );
};

export default MyButton;
```
## Benefits of Using `mess.config.js` ##

1. Consistency: Centralized configuration ensures consistent styling across the application.
2. Reusability: Define styles once and reuse them in multiple components.
3. Scalability: Easily manage and update your styles as your project grows.

## Important Notes ##
1. Place the `mess.config.js` file in the root directory of your project.
2. Use $ to reference custom utilities like paddings or classes in your styles.
3. Restart your development server after making changes to the mess.config.js file to apply updates.
By utilizing `mess.config.js` , you can streamline your development process and maintain a clean, maintainable codebase.