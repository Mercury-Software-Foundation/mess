"use client"
import styled from "@emotion/styled";
import theme from "../../../../theme";
type ButtonProps = {
    typea?: "outlined" | "filled" | "textonly";
    size?: string;
    color?: string;
    width?: string;
    height?: string;
    m?: string;
    mt?: string;
    mb?: string;
    ml?: string;
    mr?: string;
    p?: string;
    pl?: string;
    pr?: string;
    display?: string;
    gap?: string;
    weight?: string;
    position?: string;
    top?: string;
    bottom?: string;
    hover?: string;
    borderradius?: string;
    background?: string
    minHeight?: string
    minWidth?: string
    disable?:boolean
};




export const Button = styled.button<ButtonProps>`

color: ${(props) =>
    props.typea === "filled"
        ? theme.colors.white[0]
        :  props.background
};

  margin:${(props) => props.m ? props.m : "10px"};
  width: ${(props) => props.width ? props.width : ""};
  height: ${(props) => props.height ? props.height : ""};
  margin-left: ${(props) => props.ml ? props.ml : ""};
  margin-top: ${(props) => props.mt ? props.mt : ""};

  margin-right: ${(props) => props.mr ? props.mr : ""};
  padding: ${(props) => props.p ? props.p : "10px"};
  padding-left: ${(props) => props.pl ? props.pl : ""};
  padding-right: ${(props) => props.pr ? props.pr : ""};
  border: ${(props) =>
        props.typea === "outlined"
            ? `1px solid ${props.background}`:props.typea==="textonly"?"none"
            : "none"};
  display: ${(props) => props.display};
  gap: ${(props) => props.gap};
  weight: ${(props) => `${props.weight}`};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  background-color: ${(props) =>
    props.disable ?theme.colors.gray[7]:
        props.typea === "outlined"
            ? theme.colors.white[0]
            :props.typea==="textonly"?"transparent"
            : props.background ? props.background : "none"};
  border-radius:${(props) => props.borderradius ? props.borderradius : "5px"};

  font-size:${(props) => props.size ? props.size : "12px"};
  cursor: ${(props) => props.disable? "not-allowed" : "pointer"};
`;
Button.defaultProps = {
    typea: "filled",
    size: "medium",
    minHeight: "30px",
    minWidth: "300px",
    background:`${theme.colors.primary[0]}`
    
};