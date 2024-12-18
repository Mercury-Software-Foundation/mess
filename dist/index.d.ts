import * as _emotion_styled from '@emotion/styled';
import * as react from 'react';

interface Styles {
    base?: string;
    [key: string]: string | undefined;
}
declare const Mess: (styles: Styles) => string;
/**
 * Dynamically merge styles for specific breakpoints.
 * @param baseStyles - The base styles object (e.g., theme styles).
 * @param overrides - The overrides object with custom styles.
 * @returns Merged styles object.
 */
declare const Clx: (baseStyles: Styles, overrides: Styles) => Styles;

/** @jsxImportSource @emotion/react */
declare const Button: _emotion_styled.StyledComponent<any, react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
declare const Text: _emotion_styled.StyledComponent<any, react.DetailedHTMLProps<react.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, {}>;
declare const Image: _emotion_styled.StyledComponent<any, react.DetailedHTMLProps<react.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, {}>;
declare const Box: _emotion_styled.StyledComponent<any, react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const Input: _emotion_styled.StyledComponent<any, react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {}>;
declare const Label: _emotion_styled.StyledComponent<any, react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {}>;
declare const Ul: _emotion_styled.StyledComponent<any, react.DetailedHTMLProps<react.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, {}>;
declare const Li: _emotion_styled.StyledComponent<any, react.DetailedHTMLProps<react.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, {}>;
declare const Footer: _emotion_styled.StyledComponent<any, react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
declare const Form: _emotion_styled.StyledComponent<any, react.DetailedHTMLProps<react.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, {}>;
declare const Span: _emotion_styled.StyledComponent<any, react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;

export { Box, Button, Clx, Footer, Form, Image, Input, Label, Li, Span, Text, Ul, Mess as default };
