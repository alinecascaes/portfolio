import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
    * {
        box-sizing: border-box; 
        margin: 0;
        padding: 0;
    }

    :focus {
        box-shadow: 0 0 0 2px ${({ theme }) => theme.color["lime-900"]};
        outline: transparent;
    }

    body {
        background: ${({ theme }) => theme.color["gray-900"]};
        color: ${({ theme }) => theme.color["gray-300"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: "DM Sans", serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;