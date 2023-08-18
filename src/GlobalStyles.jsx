import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        background: radial-gradient(134.34% 134.34% at 50.00% 0%, #1F3757 0%, #131537 100%);
        font-family: "Barlow Semi Condensed";
    }
`;