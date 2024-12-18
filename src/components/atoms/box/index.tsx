/* eslint-disable @typescript-eslint/no-explicit-any */
 
import styled from "@emotion/styled";
import theme from "../../../../theme";

type BoxProps = {
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: string;
  gap?:string;
  placeItems?:string;
  backgroundColor?: string;
  width?: string;
  minWidth?:string;
  maxWidth?:string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  padding?: number;
  margin?: number;
  borderRadius?:number;
  textAlign?:string;
  overflowx?: string;
  overflowy?: string;
  position?: string; 
  top?: string; 
  left?: string; 
  right?: string;
  gridTemplateColumns?:string
  pl?:string;
  pr?:string;
  pb?:string;
  pt?:string;
  mr?: string;
  mt?: string;
  ml?: string;
  mb?: string;
  [x: string]: any;
  disabled?:true;
  bt?:boolean;
  bb?:boolean;
};

const Box = styled.div<BoxProps>`
  background: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  text-align: ${(props) => props.textAlign};
  padding-left : ${(props) => props.pl};
  padding-right : ${(props) => props.pr};
  padding-bottom : ${(props) => props.pb};
  padding-top : ${(props) => props.pt};
  margin-right: ${(props) => props.mr};
  margin-top: ${(props) => props.mt};
  margin-left: ${(props) => props.ml};
  margin-bottom: ${(props) => props.mb};
  overflow-x: ${(props)=>props.overflowx};
  overflow-y: ${(props)=>props.overflowy};
  border-radius: ${(props) => props.borderRadius}px;
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  z-index: ${(props) => props.zindex};
  opacity:${(props) => props.disabled ?"0.5":"" };
  border-top: ${(props) => props.bt ?`1px solid ${theme.colors.gray[7]}`:"" };
  border-bottom: ${(props) => props.bb ?`1px solid ${theme.colors.gray[7]}`:"" };


  ${(props) => props.padding && { padding: `${props.padding}px`}};
  ${(props) => props.margin && { margin: props.margin * props.theme.gutter }};
  
  ${(props) =>
    props.display &&
    ` display : ${props.display};
      flex-wrap: ${props.flexWrap};
      flex-direction: ${props.flexDirection};
      justify-content: ${props.justifyContent};
      justify-items:${props.justifyItems};
      place-items:${props.placeItems};
      align-items: ${props.alignItems};
      gap: ${props.gap};
      grid-template-columns:${props.gridTemplateColumns};
    `}
`;

// Box.defaultProps = {
//   backgroundColor:theme.colors.whiteA
// };

export default Box;

