export const cssClassMapping = {
    // Box model properties
    h: "height",
    w: "width",
    minH: "min-height",
    maxH: "max-height",
    minW: "min-width",
    maxW: "max-width",
    p: "padding",
    px: ["padding-left", "padding-right"],
  py: ["padding-top", "padding-bottom"],
    pt: "padding-top",
    pr: "padding-right",
    pb: "padding-bottom",
    pl: "padding-left",
    m: "margin",
    mx: ["margin-left", "margin-right"],
  my: ["margin-top", "margin-bottom"],
    mt: "margin-top",
    mr: "margin-right",
    mb: "margin-bottom",
    ml: "margin-left",

    // Background and borders
    bg: "background",
    bgColor: "background-color",
    bgImage: "background-image",
    bgSize: "background-size",
    bgPosition: "background-position",
    bgRepeat: "background-repeat",
    rounded: "border-radius",
    borderWidth: "border-width",
    borderColor: "border-color",
    borderStyle: "border-style",

    // Typography
    color: "color",
    font: "font",
    fontSize: "font-size",
    fontWeight: "font-weight",
    fontStyle: "font-style",
    fontFamily: "font-family",
    lineHeight: "line-height",
    letterSpacing: "letter-spacing",
    text: "text-align",
    textDecoration: "text-decoration",
    textTransform: "text-transform",
    whiteSpace: "white-space",
    wordBreak: "word-break",
    overflowWrap: "overflow-wrap",

    // Flexbox and grid
    flex: "flex",
    grow: "flex-grow",
    shrink: "flex-shrink",
    basis: "flex-basis",
    gap: "gap",
    justify: "justify-content",
    items: "align-items",
    content: "align-content",
    self: "align-self",
    order: "order",
    grid: "grid",
    gridCols: "grid-template-columns",
    gridRows: "grid-template-rows",
    gridGap: "grid-gap",

    // Positioning
    pos: "position",
    z: "z-index",
    top: "top",
    right: "right",
    bottom: "bottom",
    left: "left",

    // Transitions and animations
    transition: "transition",
    transitionDuration: "transition-duration",
    transitionTiming: "transition-timing-function",
    transitionDelay: "transition-delay",
    animation: "animation",
    animationName: "animation-name",
    animationDuration: "animation-duration",
    animationTiming: "animation-timing-function",
    animationDelay: "animation-delay",
    animationIteration: "animation-iteration-count",
    animationDirection: "animation-direction",
    animationFillMode: "animation-fill-mode",
    animationPlayState: "animation-play-state",

    // Box shadow and opacity
    shadow: "box-shadow",
    opacity: "opacity",

    // Keyframes
    // keyframes: `@keyframes ${value} { /* Add keyframe rules here */ }`,

    // Cursor and pointer events
    cursor: "cursor",
    pointerEvents: "pointer-events",

    // Other CSS properties
    clipPath: "clip-path",
    filter: "filter",
    transform: "transform",
    transformOrigin: "transform-origin",
    visibility: "visibility",
    overflow: "overflow",
    overflowX: "overflow-x",
    overflowY: "overflow-y",

    // Advanced properties
    backdropFilter: "backdrop-filter",
    mixBlendMode: "mix-blend-mode",
    isolation: "isolation",
    perspective: "perspective",
    perspectiveOrigin: "perspective-origin",
    scrollBehavior: "scroll-behavior",
    resize: "resize",
    userSelect: "user-select",

    // Media queries shorthand

    // Custom mappings for shorthand properties
    transitionAll: "transition: all",
    animationAll: "animation: all",
    roundedFull: "border-radius: 50%;",
  }