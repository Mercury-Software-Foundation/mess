---
sidebar_position: 4
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
        base: "padding: $medium;  background-color: yellow;",
        sm: "font-size: 10px; padding:50px; ",
        lg: "color: black; background-color: green; border-radius:50px;",
      },
    },
  },
};
```
## Configuration Details ##
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
    "base": "padding: $medium; background-color: yellow;",
    "sm": "font-size: 10px; padding:50px;",
    "lg": "color: black; background-color: green; border-radius:50px;",
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
      styles={{
        base: `$buttonStyles.base`,
        sm: `$buttonStyles.sm`,
        lg: `$buttonStyles.lg`,
      }}
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
      styles={{
        base: `${theme.classes.buttonStyles.base}`,
        sm: `${theme.classes.buttonStyles.sm}`,
        lg: `${theme.classes.buttonStyles.lg}`,
      }}
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