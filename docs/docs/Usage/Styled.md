
# Mess Styled Function

The `styled` function in the **mess** package provides a powerful and flexible way to style your components. It supports three key props:

- `styles`: Define styles using objects, theme strings from the configuration file, or a combination of both.
- `customClasses`: Pass custom utility classes directly.
- `Clx`: Combine multiple styles, theme strings, and utility classes dynamically.

## Props Overview

### 1. `styles`
This prop accepts styles in three forms:

#### **a. Object-Based Styles**
You can pass styles as an object, with support for responsive breakpoints like `lg`, `md`, `sm`:

```jsx
<Button
  styles={{
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
  }}
>
  Button
</Button>
```

#### **b. Theme String-Based Styles**
You can reference styles from the configuration file using a theme string:

```jsx
<Button styles={"$buttonStyles"}>Button</Button>
```

#### **c. Combined Styles with `Clx` Function**
The `Clx` function allows combining:
- Object-based styles
- Theme strings from the config
- Utility classes

Example:

```jsx
<Button
  styles={Clx(
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
  )}
>
  Button
</Button>
```

### 2. `customClasses`
The `customClasses` prop accepts custom utility classes for styling. This allows fine-grained control over the appearance of your component:

```jsx
<Button customeclasses="px-[10px] py-[8px] color-[white] bg-[blue]">
  Button
</Button>
```

## Example Scenarios

### **Using Only Object-Based Styles**
```jsx
<Button
  styles={{
    base: {
      padding: "8px",
      background: "#FF5733",
      color: "white",
    },
    lg: {
      padding: "12px",
    },
  }}
>
  Button
</Button>
```

### **Using Theme Strings**
```jsx
<Button styles="$buttonPrimary">Button</Button>
```

### **Combining Styles with `Clx`**
```jsx
<Button
  styles={Clx(
    { base: { margin: "8px", padding: "12px" } },
    "$themeStyle", // Reference from config
    "lg:bg-[red]", // Utility classes
  )}
>
  Button
</Button>
```

### **Using Custom Utility Classes**
```jsx
<Button customeclasses="px-[12px] py-[6px] bg-[green] text-[white]">
  Custom Styled Button
</Button>
```

## Styled Components Tags

Below is a table listing the custom tags provided by the Mess library and their corresponding HTML tags:

| Custom Tag     | HTML Tag       |
| -------------- | -------------- |
| `<Button>`     | `<button>`     |
| `<Text>`       | `<p>`          |
| `<Image>`      | `<img>`        |
| `<Box>`        | `<div>`        |
| `<Input>`      | `<input>`      |
| `<Label>`      | `<label>`      |
| `<Ul>`         | `<ul>`         |
| `<Li>`         | `<li>`         |
| `<Footer>`     | `<footer>`     |
| `<Form>`       | `<form>`       |
| `<Span>`       | `<span>`       |
| `<A>`          | `<a>`          |
| `<Select>`     | `<select>`     |
| `<Option>`     | `<option>`     |
| `<Header>`     | `<header>`     |
| `<Main>`       | `<main>`       |
| `<Article>`    | `<article>`    |
| `<Section>`    | `<section>`    |
| `<Aside>`      | `<aside>`      |
| `<Nav>`        | `<nav>`        |
| `<H1>`         | `<h1>`         |
| `<H2>`         | `<h2>`         |
| `<H3>`         | `<h3>`         |
| `<H4>`         | `<h4>`         |
| `<H5>`         | `<h5>`         |
| `<H6>`         | `<h6>`         |
| `<Table>`      | `<table>`      |
| `<Thead>`      | `<thead>`      |
| `<Tbody>`      | `<tbody>`      |
| `<Tr>`         | `<tr>`         |
| `<Th>`         | `<th>`         |
| `<Td>`         | `<td>`         |
| `<Pre>`        | `<pre>`        |
| `<Code>`       | `<code>`       |
| `<Blockquote>` | `<blockquote>` |
| `<Hr>`         | `<hr>`         |
| `<Br>`         | `<br>`         |
| `<Progress>`   | `<progress>`   |
| `<Iframe>`     | `<iframe>`     |
| `<Canvas>`     | `<canvas>`     |
| `<Video>`      | `<video>`      |
| `<Audio>`      | `<audio>`      |
| `<Figure>`     | `<figure>`     |
| `<Figcaption>` | `<figcaption>` |
| `<Details>`    | `<details>`    |
| `<Summary>`    | `<summary>`    |
| `<Mark>`       | `<mark>`       |
| `<Time>`       | `<time>`       |
| `<Meter>`      | `<meter>`      |
| `<B>`          | `<b>`          |
| `<I>`          | `<i>`          |
| `<Small>`      | `<small>`      |
| `<Strong>`     | `<strong>`     |
| `<Abbr>`       | `<abbr>`       |
| `<Sub>`        | `<sub>`        |
| `<Sup>`        | `<sup>`        |


## Notes
- **Responsive Breakpoints:** The styles can target specific breakpoints (e.g., `lg`, `md`, `sm`) for responsive designs.
- **Configurable Themes:** Ensure the theme strings used in `styles` or `Clx` are defined in your configuration file.
- **Utility Classes:** Tailwind-like utility classes can be passed through `customClasses` or directly in `Clx`.

## Conclusion
The `styled` function in **mess** makes it easy to create highly customizable components using a mix of object-based styles, theme references, and utility classes. Experiment with different combinations to achieve your desired look and feel.
