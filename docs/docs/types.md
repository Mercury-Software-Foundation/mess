---
sidebar_position: 5
title: "Types"
---


# Theme Configuration

The **Mess** package offers a dynamic and efficient way to style HTML elements and components using a combination of custom styles, breakpoints, and theme configurations. This document explains its core types, configuration, and usage with practical examples.

---

## 1. Breakpoints

Breakpoints define responsive ranges for styling elements across different screen sizes.

### Type Definition

```typescript
export type Breakpoint = {
  min: string;
  max?: string;
};

export interface Breakpoints {
  [key: string]: Breakpoint;
}
```

### Example

```typescript
const breakpoints = {
  sm: { min: "480px" },
  lg: { min: "1024px", max: "1440px" },
};
```

---

## 2. Theme

Themes allow you to define reusable design tokens for colors, spacing, typography, and utility classes.

### Type Definition

```typescript
export interface Theme {
  colors?: Record<string, string>;
  fontSizes?: Record<string, string>;
  paddings?: Record<string, string>;
  classes?: Record<
    string,
    Record<string, Styles | StylesMessInternal> | Styles | StylesMessInternal
  >;
  utilityClasses?: any;
  /* Additional properties like animations, sizes, and effects can be added */
}
```

### Example

```typescript
const theme = {
  colors: {
    primary: "#27A5C9",
    secondary: "#FFA726",
  },
  fontSizes: {
    sm: "12px",
    lg: "18px",
  },
  classes: {
    button: {
      base: {
        padding: "10px 20px",
        background: "$colors.primary",
        color: "white",
        borderRadius: "8px",
      },
    },
  },
};
```

---

## 3. Styles

Styles can be specified using either raw CSS objects or theme references.

### Type Definition

```typescript
export interface Styles {
  base?: CSSObject;
  [key: string]: CSSObject | undefined;
}

export interface StylesMessInternal {
  base?: string;
  [key: string]: string | undefined;
}
```

### Examples

#### Using CSSObject

```typescript
const styles = {
  base: {
    padding: "8px 10px",
    background: "#27A5C9",
    color: "white",
  },
  lg: {
    padding: "12px 16px",
  },
};
```

#### Using Theme References

```typescript
const stylesInternal = {
  base: "$classes.button.base",
  lg: "$classes.button.lg",
};
```

---

## 4. MessConfig

The MessConfig object combines breakpoints and themes for customization.

### Type Definition

```typescript
export interface MessConfig extends Record<string, any> {
  breakpoints?: Breakpoints;
  theme: Theme;
}
```

### Example

```typescript
const config = {
  breakpoints: {
    sm: { min: "480px" },
    lg: { min: "1024px", max: "1440px" },
  },
  theme: {
    colors: {
      primary: "#27A5C9",
      secondary: "#FFA726",
    },
    fontSizes: {
      sm: "12px",
      lg: "18px",
    },
  },
};
```

---

## 5. Practical Examples

### Example 1: Styling with CSSObject

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
  Button
</button>
```

### Example 2: Using Theme Reference

```jsx
<button className={Mess({ styles: "$classes.button.base" })}>
  Button
</button>
```

### Example 3: Combining Styles with Clx

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
        lg: { color: "yellow" },
      },
      "$classes.button",
      "lg:color-[black]"
    ),
  })}
>
  Button
</button>
```

### Example 4: Using Custom Classes

```jsx
<button
  className={Mess({
    customeclasses: "lg:color-[gray] bg-[red]",
  })}
>
  Button
</button>
```

## Theme Keys

| Key                     | Description                                          |
|-------------------------|------------------------------------------------------|
| `accentColor`           | Values for the `accent-color` property              |
| `animation`             | Values for the `animation` property                 |
| `aria`                  | Values for the `aria` property                      |
| `aspectRatio`           | Values for the `aspect-ratio` property              |
| `backdropBlur`          | Values for the `backdropBlur` plugin                |
| `backdropBrightness`    | Values for the `backdropBrightness` plugin          |
| `backdropContrast`      | Values for the `backdropContrast` plugin            |
| `backdropGrayscale`     | Values for the `backdropGrayscale` plugin           |
| `backdropHueRotate`     | Values for the `backdropHueRotate` plugin           |
| `backdropInvert`        | Values for the `backdropInvert` plugin              |
| `backdropOpacity`       | Values for the `backdropOpacity` plugin             |
| `backdropSaturate`      | Values for the `backdropSaturate` plugin            |
| `backdropSepia`         | Values for the `backdropSepia` plugin               |
| `backgroundColor`       | Values for the `background-color` property          |
| `backgroundImage`       | Values for the `background-image` property          |
| `backgroundOpacity`     | Values for the `background-opacity` property        |
| `backgroundPosition`    | Values for the `background-position` property       |
| `backgroundSize`        | Values for the `background-size` property           |
| `blur`                  | Values for the `blur` plugin                        |
| `borderColor`           | Values for the `border-color` property              |
| `borderOpacity`         | Values for the `borderOpacity` plugin               |
| `borderRadius`          | Values for the `border-radius` property             |
| `borderSpacing`         | Values for the `border-spacing` property            |
| `borderWidth`           | Values for the `borderWidth` plugin                 |
| `boxShadow`             | Values for the `box-shadow` property                |
| `boxShadowColor`        | Values for the `boxShadowColor` plugin              |
| `brightness`            | Values for the `brightness` plugin                  |
| `caretColor`            | Values for the `caret-color` property               |
| `columns`               | Values for the `columns` property                   |
| `classes`            | Values for the `custome-classes`               |
| `container`             | Configuration for the `container` plugin            |
| `content`               | Values for the `content` property                   |
| `contrast`              | Values for the `contrast` plugin                    |
| `cursor`                | Values for the `cursor` property                    |
| `divideColor`           | Values for the `divideColor` plugin                 |
| `divideOpacity`         | Values for the `divideOpacity` plugin               |
| `divideWidth`           | Values for the `divideWidth` plugin                 |
| `dropShadow`            | Values for the `dropShadow` plugin                  |
| `fill`                  | Values for the `fill` plugin                        |
| `flex`                  | Values for the `flex` property                      |
| `flexBasis`             | Values for the `flex-basis` property                |
| `flexGrow`              | Values for the `flex-grow` property                 |
| `flexShrink`            | Values for the `flex-shrink` property               |
| `fontFamily`            | Values for the `font-family` property               |
| `fontSize`              | Values for the `font-size` property                 |
| `fontWeight`            | Values for the `font-weight` property               |
| `gap`                   | Values for the `gap` property                       |
| `gradientColorStops`    | Values for the `gradientColorStops` plugin          |
| `gradientColorStopPositions` | Values for the `gradient-color-stop-positions` property |
| `grayscale`             | Values for the `grayscale` plugin                   |
| `gridAutoColumns`       | Values for the `grid-auto-columns` property         |
| `gridAutoRows`          | Values for the `grid-auto-rows` property            |
| `gridColumn`            | Values for the `grid-column` property               |
| `gridColumnEnd`         | Values for the `grid-column-end` property           |
| `gridColumnStart`       | Values for the `grid-column-start` property         |
| `gridRow`               | Values for the `grid-row` property                  |
| `gridRowEnd`            | Values for the `grid-row-end` property              |
| `gridRowStart`          | Values for the `grid-row-start` property            |
| `gridTemplateColumns`   | Values for the `grid-template-columns` property     |
| `gridTemplateRows`      | Values for the `grid-template-rows` property        |
| `height`                | Values for the `height` property                    |
| `hueRotate`             | Values for the `hueRotate` plugin                   |
| `inset`                 | Values for the `top`, `right`, `bottom`, and `left` properties |
| `invert`                | Values for the `invert` plugin                      |
| `keyframes`             | Keyframe values used in the `animation` plugin      |
| `letterSpacing`         | Values for the `letter-spacing` property            |
| `lineHeight`            | Values for the `line-height` property               |
| `listStyleType`         | Values for the `list-style-type` property           |
| `listStyleImage`        | Values for the `list-style-image` property          |
| `margin`                | Values for the `margin` property                    |
| `lineClamp`             | Values for the `line-clamp` property                |
| `maxHeight`             | Values for the `max-height` property                |
| `maxWidth`              | Values for the `max-width` property                 |
| `minHeight`             | Values for the `min-height` property                |
| `minWidth`              | Values for the `min-width` property                 |
| `objectPosition`        | Values for the `object-position` property           |
| `opacity`               | Values for the `opacity` property                   |
| `order`                 | Values for the `order` property                     |
| `outlineColor`          | Values for the `outline-color` property             |
| `outlineOffset`         | Values for the `outline-offset` property            |
| `outlineWidth`          | Values for the `outline-width` property             |
| `padding`               | Values for the `padding` property                   |
| `placeholderColor`      | Values for the `placeholderColor` plugin            |
| `placeholderOpacity`    | Values for the `placeholderOpacity` plugin          |
| `ringColor`             | Values for the `ringColor` plugin                   |
| `ringOffsetColor`       | Values for the `ringOffsetColor` plugin             |
| `ringOffsetWidth`       | Values for the `ringOffsetWidth` plugin             |
| `ringOpacity`           | Values for the `ringOpacity` plugin                 |
| `ringWidth`             | Values for the `ringWidth` plugin                   |
| `rotate`                | Values for the `rotate` plugin                      |
| `saturate`              | Values for the `saturate` plugin                    |
| `scale`                 | Values for the `scale` plugin                       |
| `screens`               | Your project's responsive breakpoints               |
| `scrollMargin`          | Values for the `scroll-margin` property             |
| `scrollPadding`         | Values for the `scroll-padding` property            |
| `sepia`                 | Values for the `sepia` plugin                       |
| `skew`                  | Values for the `skew` plugin                        |
| `space`                 | Values for the `space` plugin                       |
| `spacing`               | Your project's spacing scale                        |
| `stroke`                | Values for the `stroke` property                    |
| `strokeWidth`           | Values for the `stroke-width` property              |
| `supports`              | Values for the `supports` property                  |
| `data`                  | Values for the `data` property                      |
| `textColor`             | Values for the `color` property                     |
| `textDecorationColor`   | Values for the `text-decoration-color` property     |
| `textDecorationThickness` | Values for the `text-decoration-thickness` property |
| `textIndent`            | Values for the `text-indent` property               |
| `textOpacity`           | Values for the `textOpacity` plugin                 |
| `textUnderlineOffset`   | Values for the `text-underline-offset` property     |
| `transformOrigin`       | Values for the `transform-origin` property          |
| `transitionDelay`       | Values for the `transition |
| `maxHeight`               | Values for the max-height property                         |
| `maxWidth`                | Values for the max-width property                          |
| `minHeight`               | Values for the min-height property                         |
| `minWidth`                | Values for the min-width property                          |
| `objectPosition`          | Values for the object-position property                    |
| `opacity`                 | Values for the opacity property                            |
| `order`                   | Values for the order property                              |
| `outlineColor`            | Values for the outline-color property                      |
| `outlineOffset`           | Values for the outline-offset property                     |
| `outlineWidth`            | Values for the outline-width property                      |
| `padding`                 | Values for the padding property                            |
| `placeholderColor`        | Values for the placeholder-color property                  |
| `placeholderOpacity`      | Values for the placeholder-opacity property                |
| `ringColor`               | Values for the ring-color property                         |
| `ringOffsetColor`         | Values for the ring-offset-color property                  |
| `ringOffsetWidth`         | Values for the ring-offset-width property                  |
| `ringOpacity`             | Values for the ring-opacity property                       |
| `ringWidth`               | Values for the ring-width property                         |
| `rotate`                  | Values for the rotate property                             |
| `saturate`                | Values for the saturate property                           |
| `scale`                   | Values for the scale property                              |
| `screens`                 | Your project's responsive breakpoints                      |
| `scrollMargin`            | Values for the scroll-margin property                      |
| `scrollPadding`           | Values for the scroll-padding property                     |
| `sepia`                   | Values for the sepia property                              |
| `skew`                    | Values for the skew property                               |
| `space`                   | Values for the space property                              |
| `spacing`                 | Your project's spacing scale                               |
| `stroke`                  | Values for the stroke property                             |
| `strokeWidth`             | Values for the stroke-width property                       |
| `supports`                | Values for the supports property                           |
| `data`                    | Values for the data property                               |
| `textColor`               | Values for the text-color property                         |
| `textDecorationColor`     | Values for the text-decoration-color property              |
| `textDecorationThickness` | Values for the text-decoration-thickness property          |
| `textIndent`              | Values for the text-indent property                        |
| `textOpacity`             | Values for the text-opacity property                       |
| `textUnderlineOffset`     | Values for the text-underline-offset property              |
| `transformOrigin`         | Values for the transform-origin property                   |
| `transitionDelay`         | Values for the transition-delay property                   |
| `transitionDuration`      | Values for the transition-duration property                |
| `transitionProperty`      | Values for the transition-property property                |
| `transitionTimingFunction`| Values for the transition-timing-function property         |
| `translate`               | Values for the translate property                          |
| `utilityClasses`               | Values for the custome css property eg:(flex: "display: flex;") |
| `size`                    | Values for the size property                               |
| `width`                   | Values for the width property                              |
| `willChange`              | Values for the will-change property                        |
| `zIndex`                  | Values for the z-index property                            |

