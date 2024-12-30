export const defaultBreakpoints = {
    sm: { min: '320px', max: '640px' },  
    md: { min: '768px', max: '1024px' }, 
    lg: { min: '1024px', max: '1440px' }, 
    xl: { min: '1280px', max: '1920px' }, 
    xxl: { min: '1536px', max: '2560px' },
  };


  export const defaultTheme = {
    colors: { primary: "#1e90ff", secondary: "#ffa500" },
    fontSizes: { small: "30px", medium: "16px", large: "20px" },
    paddings: { small: "80px", medium: "12px", large: "16px" },
    classes: {
      buttonStyles: {
        contained:{
          base: "padding: $medium;  background-color: yellow;",
          sm: "font-size: 10px; padding:50px; ",
          lg: "color: black; background-color: green; border-radius:50px;",
        },
        containedSmall:{
          base: "padding: $medium;  background-color: yellow;",
          sm: "font-size: 10px; padding:50px; ",
          lg: "color: black; background-color: green; border-radius:50px; padding: $small",
        },
        outlined:{
          base: "padding: $medium;  ",
          sm: "font-size: 10px; padding:10px 20px; ",
          lg: "color: black; border :2px solid green; background-color:transparent; border-radius:50px; color:black;",
        }
      },

    },
  };