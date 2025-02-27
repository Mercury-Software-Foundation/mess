---
title: "Custome Classes Properties"
---
Below is the full list of CSS properties 

### **Dimensions**

| **Class Name** | **Mapped Property** | **Description**               | **Example Usage** |
| -------------- | ------------------- | ----------------------------- | ----------------- |
| `h`            | `height`            | Sets the height of an element | `h-[200px]`       |
| `w`            | `width`             | Sets the width of an element  | `w-[100%]`        |
| `minH`         | `min-height`        | Sets the minimum height       | `minH-[50px]`     |
| `maxH`         | `max-height`        | Sets the maximum height       | `maxH-[300px]`    |
| `minW`         | `min-width`         | Sets the minimum width        | `minW-[100px]`    |
| `maxW`         | `max-width`         | Sets the maximum width        | `maxW-[400px]`    |

### **Spacing**

| **Class Name** | **Mapped Property**             | **Description**            | **Example Usage** |
| -------------- | ------------------------------- | -------------------------- | ----------------- |
| `p`            | `padding`                       | Sets padding for all sides | `p-[20px]`        |
| `px`           | `padding-left`, `padding-right` | Sets horizontal padding    | `px-[10px]`       |
| `py`           | `padding-top`, `padding-bottom` | Sets vertical padding      | `py-[15px]`       |
| `pt`           | `padding-top`                   | Sets top padding           | `pt-[10px]`       |
| `pr`           | `padding-right`                 | Sets right padding         | `pr-[5px]`        |
| `pb`           | `padding-bottom`                | Sets bottom padding        | `pb-[20px]`       |
| `pl`           | `padding-left`                  | Sets left padding          | `pl-[8px]`        |
| `m`            | `margin`                        | Sets margin for all sides  | `m-[10px]`        |
| `mx`           | `margin-left`, `margin-right`   | Sets horizontal margin     | `mx-[auto]`       |
| `my`           | `margin-top`, `margin-bottom`   | Sets vertical margin       | `my-[20px]`       |
| `mt`           | `margin-top`                    | Sets top margin            | `mt-[5px]`        |
| `mr`           | `margin-right`                  | Sets right margin          | `mr-[8px]`        |
| `mb`           | `margin-bottom`                 | Sets bottom margin         | `mb-[12px]`       |
| `ml`           | `margin-left`                   | Sets left margin           | `ml-[10px]`       |

### **Background and Borders**

| **Class Name** | **Mapped Property**   | **Description**                     | **Example Usage**           |
| -------------- | --------------------- | ----------------------------------- | --------------------------- |
| `bg`           | `background`          | Sets the background                 | `bg-[url('image.png')]`     |
| `bgColor`      | `background-color`    | Sets the background color           | `bgColor-[red]`             |
| `bgImage`      | `background-image`    | Sets the background image           | `bgImage-[linear-gradient]` |
| `bgSize`       | `background-size`     | Sets the background size            | `bgSize-[cover]`            |
| `bgPosition`   | `background-position` | Sets the background position        | `bgPosition-[center]`       |
| `bgRepeat`     | `background-repeat`   | Sets the background repeat behavior | `bgRepeat-[no-repeat]`      |
| `rounded`      | `border-radius`       | Sets the border radius              | `rounded-[10px]`            |
| `borderWidth`  | `border-width`        | Sets the border width               | `borderWidth-[2px]`         |
| `borderColor`  | `border-color`        | Sets the border color               | `borderColor-[black]`       |
| `borderStyle`  | `border-style`        | Sets the border style               | `borderStyle-[solid]`       |

### **Typography**

| **Class Name**   | **Mapped Property** | **Description**                 | **Example Usage**                      |
| ---------------- | ------------------- | ------------------------------- | -------------------------------------- |
| `color`          | `color`             | Sets text color                 | `color-[blue]`                         |
| `font`           | `font`              | Applies font shorthand          | `font-[italic bold 12px/30px Georgia]` |
| `fontSize`       | `font-size`         | Sets font size                  | `fontSize-[16px]`                      |
| `fontWeight`     | `font-weight`       | Sets font weight                | `fontWeight-[700]`                     |
| `fontStyle`      | `font-style`        | Sets font style                 | `fontStyle-[italic]`                   |
| `fontFamily`     | `font-family`       | Sets font family                | `fontFamily-[Arial]`                   |
| `lineHeight`     | `line-height`       | Sets line height                | `lineHeight-[1.5]`                     |
| `letterSpacing`  | `letter-spacing`    | Sets letter spacing             | `letterSpacing-[0.1em]`                |
| `text`           | `text-align`        | Aligns text                     | `text-[center]`                        |
| `textDecoration` | `text-decoration`   | Adds text decoration            | `textDecoration-[underline]`           |
| `textTransform`  | `text-transform`    | Modifies text casing            | `textTransform-[uppercase]`            |
| `whiteSpace`     | `white-space`       | Controls text wrapping          | `whiteSpace-[nowrap]`                  |
| `wordBreak`      | `word-break`        | Controls word breaking          | `wordBreak-[break-word]`               |
| `overflowWrap`   | `overflow-wrap`     | Controls text overflow wrapping | `overflowWrap-[break-word]`            |

### **Flexbox and Grid**

| **Class Name** | **Mapped Property** | **Description**                           | **Example Usage**         |
| -------------- | ------------------- | ----------------------------------------- | ------------------------- |
| `flex`         | `flex`              | Sets flex shorthand                       | `flex-[1 1 auto]`         |
| `grow`         | `flex-grow`         | Sets flex grow                            | `grow-[1]`                |
| `shrink`       | `flex-shrink`       | Sets flex shrink                          | `shrink-[0]`              |
| `basis`        | `flex-basis`        | Sets flex basis                           | `basis-[200px]`           |
| `gap`          | `gap`               | Sets gap between flex/grid items          | `gap-[10px]`              |
| `justify`      | `justify-content`   | Aligns items along the main axis          | `justify-[center]`        |
| `items`        | `align-items`       | Aligns items along the cross axis         | `items-[stretch]`         |
| `content`      | `align-content`     | Aligns multiple lines in a flex container | `content-[space-between]` |
| `self`         | `align-self`        | Aligns an individual item                 | `self-[end]`              |

## Properties Table

| **Class Name** | **Mapped Property**     | **Description**                   | **Example Usage**      |
| -------------- | ----------------------- | --------------------------------- | ---------------------- |
| `order`        | `order`                 | Sets the order of flex/grid items | `order-[1]`            |
| `grid`         | `grid`                  | Enables grid layout               | `grid-[auto / auto]`   |
| `gridCols`     | `grid-template-columns` | Defines grid columns              | `gridCols-[1fr 2fr]`   |
| `gridRows`     | `grid-template-rows`    | Defines grid rows                 | `gridRows-[auto auto]` |
| `gridGap`      | `grid-gap`              | Defines gap between grid items    | `gridGap-[10px]`       |

### **Positioning**

| **Class Name** | **Mapped Property** | **Description**          | **Example Usage** |
| -------------- | ------------------- | ------------------------ | ----------------- |
| `pos`          | `position`          | Sets positioning mode    | `pos-[absolute]`  |
| `z`            | `z-index`           | Sets the stack order     | `z-[10]`          |
| `top`          | `top`               | Sets the top position    | `top-[20px]`      |
| `right`        | `right`             | Sets the right position  | `right-[15px]`    |
| `bottom`       | `bottom`            | Sets the bottom position | `bottom-[10px]`   |
| `left`         | `left`              | Sets the left position   | `left-[25px]`     |

### **Transitions and Animations**

| **Class Name**       | **Mapped Property**          | **Description**                      | **Example Usage**                            |
| -------------------- | ---------------------------- | ------------------------------------ | -------------------------------------------- |
| `transition`         | `transition`                 | Shorthand for CSS transitions        | `transition-[all 0.3s ease-in-out]`          |
| `transitionDuration` | `transition-duration`        | Sets transition duration             | `transitionDuration-[0.5s]`                  |
| `transitionTiming`   | `transition-timing-function` | Sets transition timing function      | `transitionTiming-[ease-in-out]`             |
| `transitionDelay`    | `transition-delay`           | Sets delay before transition starts  | `transitionDelay-[0.2s]`                     |
| `animation`          | `animation`                  | Shorthand for animations             | `animation-[fadeIn 2s ease-in-out infinite]` |
| `animationName`      | `animation-name`             | Names the animation                  | `animationName-[fadeIn]`                     |
| `animationDuration`  | `animation-duration`         | Sets animation duration              | `animationDuration-[2s]`                     |
| `animationTiming`    | `animation-timing-function`  | Sets animation timing function       | `animationTiming-[ease-in]`                  |
| `animationDelay`     | `animation-delay`            | Sets delay before animation starts   | `animationDelay-[0.5s]`                      |
| `animationIteration` | `animation-iteration-count`  | Sets animation repetition count      | `animationIteration-[infinite]`              |
| `animationDirection` | `animation-direction`        | Sets direction of animation playback | `animationDirection-[reverse]`               |
| `animationFillMode`  | `animation-fill-mode`        | Sets fill mode of animation          | `animationFillMode-[forwards]`               |
| `animationPlayState` | `animation-play-state`       | Controls animation playback state    | `animationPlayState-[paused]`                |

### **Box Shadow and Opacity**

| **Class Name** | **Mapped Property** | **Description**      | **Example Usage**                    |
| -------------- | ------------------- | -------------------- | ------------------------------------ |
| `shadow`       | `box-shadow`        | Sets box shadow      | `shadow-[0 4px 8px rgba(0,0,0,0.2)]` |
| `opacity`      | `opacity`           | Sets element opacity | `opacity-[0.8]`                      |

### **Cursor and Pointer Events**

| **Class Name**  | **Mapped Property** | **Description**                   | **Example Usage**      |
| --------------- | ------------------- | --------------------------------- | ---------------------- |
| `cursor`        | `cursor`            | Defines mouse cursor style        | `cursor-[pointer]`     |
| `pointerEvents` | `pointer-events`    | Sets pointer interaction behavior | `pointerEvents-[none]` |

### **Other CSS Properties**

| **Class Name**    | **Mapped Property** | **Description**                                | **Example Usage**                   |
| ----------------- | ------------------- | ---------------------------------------------- | ----------------------------------- |
| `clipPath`        | `clip-path`         | Clips an element to a specific shape           | `clipPath-[circle(50% at 50% 50%)]` |
| `filter`          | `filter`            | Applies visual effects like blur or brightness | `filter-[blur(5px)]`                |
| `transform`       | `transform`         | Applies transformation (e.g., rotate, scale)   | `transform-[rotate(45deg)]`         |
| `transformOrigin` | `transform-origin`  | Sets transform origin                          | `transformOrigin-[center]`          |
| `visibility`      | `visibility`        | Toggles visibility of element                  | `visibility-[hidden]`               |
| `overflow`        | `overflow`          | Sets overflow behavior                         | `overflow-[auto]`                   |
| `overflowX`       | `overflow-x`        | Controls horizontal overflow                   | `overflowX-[scroll]`                |
| `overflowY`       | `overflow-y`        | Controls vertical overflow                     | `overflowY-[hidden]`                |

### **Advanced Properties**

| **Class Name**      | **Mapped Property**  | **Description**                                | **Example Usage**             |
| ------------------- | -------------------- | ---------------------------------------------- | ----------------------------- |
| `backdropFilter`    | `backdrop-filter`    | Applies backdrop visual effects                | `backdropFilter-[blur(10px)]` |
| `mixBlendMode`      | `mix-blend-mode`     | Specifies blending mode for overlapping layers | `mixBlendMode-[multiply]`     |
| `isolation`         | `isolation`          | Sets stacking context isolation                | `isolation-[auto]`            |
| `perspective`       | `perspective`        | Defines 3D perspective                         | `perspective-[1000px]`        |
| `perspectiveOrigin` | `perspective-origin` | Sets origin for perspective                    | `perspectiveOrigin-[center]`  |
| `scrollBehavior`    | `scroll-behavior`    | Sets scrolling behavior                        | `scrollBehavior-[smooth]`     |
| `resize`            | `resize`             | Controls element resizing behavior             | `resize-[both]`               |
| `userSelect`        | `user-select`        | Controls text selection behavior               | `userSelect-[none]`           |

### **Custom Mappings for Shorthand**

| **Class Name**  | **Mapped Property**   | **Description**                      | **Example Usage**               |
| --------------- | --------------------- | ------------------------------------ | ------------------------------- |
| `transitionAll` | `transition: all`     | Applies transition to all properties | `transitionAll-[0.3s ease]`     |
| `animationAll`  | `animation: all`      | Applies animation to all properties  | `animationAll-[2s ease-in-out]` |
| `roundedFull`   | `border-radius: 50%;` | Creates a fully rounded element      | `roundedFull`                   |

### **Example of using Custom Utility Classes**
```jsx
<Button customeclasses="px-[12px] py-[6px] bg-[green] text-[white]">
  Custom Styled Button
</Button>
```