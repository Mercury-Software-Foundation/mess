/* eslint-disable @typescript-eslint/no-explicit-any */
 
import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/react";
import theme from "../../../../theme";

type TextProps = {
  size?: any ;
  weight?: any

  padding?: string;
  margin?: string;
  color?: string;
  css?: SerializedStyles;
  width?: string;
  height?: string;
  textAlign?: string;
  pl?:number;
  pr?:number;
  pb?:number;
  pt?:number;
  mr?: number;
  mt?: number;
  ml?: number;
  mb?: number;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  flexWrap?: string;
  gap?:string;
  item?:string;

};

export const Text = styled.span<TextProps>`
color: ${(props) => props.color};

  ${(props) => props.size && `font-size:${theme.typography.size[props.size]}px;`}
  ${(props) => props.weight && `font-weight: ${theme.typography.weight[props.weight]};`}
  ${(props) =>
    props.display &&
    ` display : ${props.display};
      flex-wrap: ${props.flexWrap};
      flex-direction: ${props.flexDirection};
      justify-content: ${props.justifyContent};
      gap: ${props.gap};
    `}
  ${(props) => props.css}
  
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  heigth: ${(props) => props.height};
  padding-left:${(props) => props.pl}px;
  padding-right:${(props) => props.pr}px;
  padding-top:${(props) => props.pt}px;
  padding-bottom:${(props) => props.pb}px;
  margin-left:${(props) => props.ml}px;
  margin-right:${(props) => props.mr}px;
  margin-top:${(props) => props.mt}px;
  margin-bottom:${(props) => props.mb}px;
  align-item:${(props) => props.item}


  `;
  // font-family: "tondo, sans-serif";

Text.defaultProps = {
  size: "PS",
  padding: "2px",
  color: "black",
};
