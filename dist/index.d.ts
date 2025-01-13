import * as _emotion_styled from '@emotion/styled';
import * as react from 'react';
import * as _emotion_react from '@emotion/react';
import { CSSObject } from '@emotion/react';

type Breakpoint = {
  min: string;
  max?: string;
};

interface Breakpoints {
  [key: string]: Breakpoint;
}

interface Theme {
  colors?: Record<string, string>;
  fontSizes?: Record<string, string>;
  paddings?: Record<string, string>;
  classes?: Record<string, Record<string, Styles | StylesMessInternal> | Styles | StylesMessInternal>;
  utilityClasses?: any;

  // New theme keys
  accentColor?: Record<string, string>;
  animation?: Record<string, string>;
  aria?: Record<string, string>;
  aspectRatio?: Record<string, string>;
  backdropBlur?: Record<string, string>;
  backdropBrightness?: Record<string, string>;
  backdropContrast?: Record<string, string>;
  backdropGrayscale?: Record<string, string>;
  backdropHueRotate?: Record<string, string>;
  backdropInvert?: Record<string, string>;
  backdropOpacity?: Record<string, string>;
  backdropSaturate?: Record<string, string>;
  backdropSepia?: Record<string, string>;
  backgroundColor?: Record<string, string>;
  backgroundImage?: Record<string, string>;
  backgroundOpacity?: Record<string, string>;
  backgroundPosition?: Record<string, string>;
  backgroundSize?: Record<string, string>;
  blur?: Record<string, string>;
  borderColor?: Record<string, string>;
  borderOpacity?: Record<string, string>;
  borderRadius?: Record<string, string>;
  borderSpacing?: Record<string, string>;
  borderWidth?: Record<string, string>;
  boxShadow?: Record<string, string>;
  boxShadowColor?: Record<string, string>;
  brightness?: Record<string, string>;
  caretColor?: Record<string, string>;
  columns?: Record<string, string>;
  container?: Record<string, string>;
  content?: Record<string, string>;
  contrast?: Record<string, string>;
  cursor?: Record<string, string>;
  divideColor?: Record<string, string>;
  divideOpacity?: Record<string, string>;
  divideWidth?: Record<string, string>;
  dropShadow?: Record<string, string>;
  fill?: Record<string, string>;
  flex?: Record<string, string>;
  flexBasis?: Record<string, string>;
  flexGrow?: Record<string, string>;
  flexShrink?: Record<string, string>;
  fontFamily?: Record<string, string>;
  fontSize?: Record<string, string>;
  fontWeight?: Record<string, string>;
  gap?: Record<string, string>;
  gradientColorStops?: Record<string, string>;
  gradientColorStopPositions?: Record<string, string>;
  grayscale?: Record<string, string>;
  gridAutoColumns?: Record<string, string>;
  gridAutoRows?: Record<string, string>;
  gridColumn?: Record<string, string>;
  gridColumnEnd?: Record<string, string>;
  gridColumnStart?: Record<string, string>;
  gridRow?: Record<string, string>;
  gridRowEnd?: Record<string, string>;
  gridRowStart?: Record<string, string>;
  gridTemplateColumns?: Record<string, string>;
  gridTemplateRows?: Record<string, string>;
  height?: Record<string, string>;
  hueRotate?: Record<string, string>;
  inset?: Record<string, string>;
  invert?: Record<string, string>;
  keyframes?: Record<string, string>;
  letterSpacing?: Record<string, string>;
  lineHeight?: Record<string, string>;
  listStyleType?: Record<string, string>;
  listStyleImage?: Record<string, string>;
  margin?: Record<string, string>;
  lineClamp?: Record<string, string>;
  maxHeight?: Record<string, string>;
  maxWidth?: Record<string, string>;
  minHeight?: Record<string, string>;
  minWidth?: Record<string, string>;
  objectPosition?: Record<string, string>;
  opacity?: Record<string, string>;
  order?: Record<string, string>;
  outlineColor?: Record<string, string>;
  outlineOffset?: Record<string, string>;
  outlineWidth?: Record<string, string>;
  padding?: Record<string, string>;
  placeholderColor?: Record<string, string>;
  placeholderOpacity?: Record<string, string>;
  ringColor?: Record<string, string>;
  ringOffsetColor?: Record<string, string>;
  ringOffsetWidth?: Record<string, string>;
  ringOpacity?: Record<string, string>;
  ringWidth?: Record<string, string>;
  rotate?: Record<string, string>;
  saturate?: Record<string, string>;
  scale?: Record<string, string>;
  screens?: Record<string, string>;
  scrollMargin?: Record<string, string>;
  scrollPadding?: Record<string, string>;
  sepia?: Record<string, string>;
  skew?: Record<string, string>;
  space?: Record<string, string>;
  spacing?: Record<string, string>;
  stroke?: Record<string, string>;
  strokeWidth?: Record<string, string>;
  supports?: Record<string, string>;
  data?: Record<string, string>;
  textColor?: Record<string, string>;
  textDecorationColor?: Record<string, string>;
  textDecorationThickness?: Record<string, string>;
  textIndent?: Record<string, string>;
  textOpacity?: Record<string, string>;
  textUnderlineOffset?: Record<string, string>;
  transformOrigin?: Record<string, string>;
  transitionDelay?: Record<string, string>;
  transitionDuration?: Record<string, string>;
  transitionProperty?: Record<string, string>;
  transitionTimingFunction?: Record<string, string>;
  translate?: Record<string, string>;
  size?: Record<string, string>;
  width?: Record<string, string>;
  willChange?: Record<string, string>;
  zIndex?: Record<string, string>;
}

interface Styles {
  base?: CSSObject;
  [key: string]: CSSObject | undefined;
}

interface StylesMessInternal {
  base?: string;
  [key: string]: string | undefined;
}
interface MessConfig extends Record<string, any> {
  breakpoints?: Breakpoints;
  theme: Theme;
}

interface MessObject {
    styles: Styles | string | StylesMessInternal;
    customeclasses?: string;
    usingClasses?: boolean;
}
declare const Mess: ({ styles, customeclasses, usingClasses, }: MessObject) => string;
declare const Clx: (...baseStyles: (Styles | string | StylesMessInternal)[]) => StylesMessInternal;

declare const Button: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
declare const Text: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, {}>;
declare const Image: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, {}>;
declare const Box: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const Input: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {}>;
declare const Label: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {}>;
declare const Ul: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, {}>;
declare const Li: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, {}>;
declare const Footer: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
declare const Form: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, {}>;
declare const Span: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
declare const A: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, {}>;
declare const Select: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, {}>;
declare const Option: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, {}>;
declare const Header: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
declare const Main: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
declare const Article: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
declare const Section: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
declare const Aside: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
declare const Nav: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
declare const H1: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;
declare const H2: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;
declare const H3: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;
declare const H4: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;
declare const H5: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;
declare const H6: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;
declare const Table: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, {}>;
declare const Thead: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, {}>;
declare const Tbody: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, {}>;
declare const Tr: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, {}>;
declare const Th: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, {}>;
declare const Td: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, {}>;
declare const Pre: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLPreElement>, HTMLPreElement>, {}>;
declare const Code: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
declare const Blockquote: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, {}>;
declare const Hr: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLHRElement>, HTMLHRElement>, {}>;
declare const Br: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLBRElement>, HTMLBRElement>, {}>;
declare const Progress: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>, {}>;
declare const Iframe: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>, {}>;
declare const Canvas: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>, {}>;
declare const Video: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, {}>;
declare const Audio: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, {}>;
declare const Figure: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
declare const Figcaption: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
declare const Details: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>, {}>;
declare const Summary: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
declare const Mark: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
declare const Time: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>, {}>;
declare const Meter: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>, {}>;
declare const B: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
declare const I: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
declare const Small: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
declare const Strong: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
declare const Abbr: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
declare const Sub: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
declare const Sup: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme;
    as?: React.ElementType;
} & {
    styles: Styles | StylesMessInternal | string;
    customeclasses?: string;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;

export { A, Abbr, Article, Aside, Audio, B, Blockquote, Box, Br, type Breakpoint, type Breakpoints, Button, Canvas, Clx, Code, Details, Figcaption, Figure, Footer, Form, H1, H2, H3, H4, H5, H6, Header, Hr, I, Iframe, Image, Input, Label, Li, Main, Mark, type MessConfig, Meter, Nav, Option, Pre, Progress, Section, Select, Small, Span, Strong, type Styles, Sub, Summary, Sup, Table, Tbody, Td, Text, Th, Thead, type Theme, Time, Tr, Ul, Video, Mess as default };
