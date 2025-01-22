import { ThemeProvider } from "styled-components";
import { themes } from "../styles/Theme";
import { Header } from "../components/Header";

import * as S from "./App.styles";
import { GlobalStyles } from "../styles/Globals";

export function App() {
  return (
    <ThemeProvider theme={themes}>
      <S.PageWrapper>
        <Header />

        <S.AboutInfoContainer>
        </S.AboutInfoContainer>
        <GlobalStyles />
      </S.PageWrapper>
    </ThemeProvider>
  );
}