---
title: "Mess Function for HTML Elements"
---

# Mess Function for HTML Elements

The `Mess` function enables seamless styling for standard HTML elements by combining:
- Object-based styles
- Theme strings from a configuration file
- Utility classes

This makes it easy to apply dynamic and responsive styles to HTML elements while leveraging the full power of the **mess** package.

## Props Overview

### 1. `styles`
You can define styles using objects, theme strings, or a combination of both. The `Mess` function dynamically converts these styles into appropriate class names.

#### **a. Object-Based Styles**
Pass styles as an object with responsive breakpoints like `lg`, `md`, `sm`:

```jsx
<button
  className={Mess({
    styles: {
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
  })}
>
  button
</button>
```

#### **b. Theme String-Based Styles**
Reference styles directly from your configuration file:

```jsx
<button className={Mess({ styles: "$buttonStyles" })}>button</button>
```

#### **c. Combined Styles with `Clx`**
Combine multiple style objects, theme strings, and utility classes using the `Clx` function:

```jsx
<button
  className={Mess({
    styles: Clx(
      {
        base: {
          padding: "8px 10px",
          background: "#27A5C9",
          color: "white",
          borderRadius: "8px",
          border: "none",
        },
        lg: {
          padding: "10px 20px",
          color: "gray",
        },
      },
      {
        lg: {
          color: "yellow",
        },
      },
      {
        lg: {
          color: "orange",
        },
      },
      "$testconfig555",
      "$testconfig55",
      "lg:color-[black]",
      "lg:color-[gray]"
    ),
  })}
>
  Button
</button>
```

### 2. `customClasses`
Pass custom utility classes directly through the `customeclasses` prop. This provides fine-grained control over the appearance:

```jsx
<button
  className={Mess({
    customeclasses: "lg:color-[gray] bg-[red]",
  })}
>
  button
</button>
```

## Example Scenarios

### **Using Only Object-Based Styles**
```jsx
<button
  className={Mess({
    styles: {
      base: {
        padding: "8px 10px",
        background: "#FF5733",
        color: "white",
        borderRadius: "4px",
      },
      lg: {
        padding: "12px 16px",
      },
    },
  })}
>
  button
</button>
```

### **Using Theme Strings**
```jsx
<button className={Mess({ styles: "$buttonPrimary" })}>button</button>
```

### **Combining Styles with `Clx`**
```jsx
<button
  className={Mess({
    styles: Clx(
      { base: { padding: "10px", background: "#333", color: "white" } },
      "$themeStyle",
      "lg:bg-[blue]"
    ),
  })}
>
  button
</button>
```

### **Using Custom Utility Classes**
```jsx
<button
  className={Mess({
    customeclasses: "px-[12px] py-[6px] bg-[green] text-[white]",
  })}
>
  button
</button>
```

## Notes
- **Responsive Breakpoints:** Target specific breakpoints (e.g., `lg`, `md`, `sm`) for responsive styling.
- **Theme Configurations:** Ensure theme strings used in `styles` or `Clx` are defined in your configuration file.
- **Utility Classes:** Tailwind-like utility classes can be passed through `customeclasses` or directly in `Clx`.

## Conclusion
The `Mess` function allows you to style HTML elements dynamically with minimal effort. By combining object-based styles, theme strings, and utility classes, you can create highly customizable and responsive components.
