import { extendTheme } from "@chakra-ui/react";
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    primary: {
      header: "#000000",
      htext: "#ffffff",
      mainbg: "#808080",
      price: "#FFE104",
    },
  },
});

export default theme;
