---
sidebar_position: 2
---
## Button Component Usage Example

This example demonstrates how to use the `Button` component with styles defined in the default configuration.

```javascript
<Button styles={"$buttonStyles.contained"}>
  Click Me
</Button>
```

## Configuration Details

### Default Breakpoints
```javascript
{
  sm: { min: '320px', max: '640px' },
  md: { min: '768px', max: '1024px' },
  lg: { min: '1024px', max: '1440px' },
  xl: { min: '1280px', max: '1920px' },
  xxl: { min: '1536px', max: '2560px' },
};
```

### Default Theme
```javascript
  {
  colors: { primary: "#1e90ff", secondary: "#ffa500" },
  fontSizes: { small: "30px", medium: "16px", large: "20px" },
  paddings: { small: "80px", medium: "12px", large: "16px" },
  classes: {
    buttonStyles: {
      contained: {
        base: "padding: $medium;  background-color: yellow;",
        sm: "font-size: 10px; padding:50px; ",
        lg: "color: black; background-color: green; border-radius:50px;",
      },
      containedSmall: {
        base: "padding: $medium;  background-color: yellow;",
        sm: "font-size: 10px; padding:50px; ",
        lg: "color: black; background-color: green; border-radius:50px; padding: $small",
      },
      outlined: {
        base: "padding: $medium;  ",
        sm: "font-size: 10px; padding:10px 20px; ",
        lg: "color: black; border :2px solid green; background-color:transparent; border-radius:50px; color:black;",
      },
    },
  },
};
```

> 💡 **Note:** The `styles` prop in the `Button` component references the `buttonStyles.contained` class defined in the `defaultTheme` configuration.


This example demonstrates how to use the `Button` component with styles defined in the default configuration and dynamically override or add new styles using `clx`.

```javascript
<Button
  styles={Clx("$buttonStyles.contained", {
    base: "padding: $medium;",
    sm: "font-size: 10px; padding:10px 20px;",
    lg: "color: black; border: 2px solid green; background-color: transparent; border-radius: 50px; color: black;",
  })}
>
  Dynamic Click Me
</Button>
```