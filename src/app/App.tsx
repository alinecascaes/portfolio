import { ThemeProvider } from "styled-components";
import { themes } from "../styles/Theme";
import { GlobalStyles } from "../styles/Globals";


export function App() {

  return (
    <ThemeProvider theme={themes}>
     <h1>portfolio</h1>
     <GlobalStyles />
    </ThemeProvider>
  );
}

