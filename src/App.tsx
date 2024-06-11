import { ThemeProvider } from "styled-components";
import defaultTheme from "@/styles/defaultTheme";
import { GlobalStyle } from "@/styles/global";
import { Router } from "@/router/Router";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}