import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./Styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.tsx";
import { ColorModeScript } from "@chakra-ui/react";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found!");
}
