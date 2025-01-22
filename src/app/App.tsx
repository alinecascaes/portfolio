import { ThemeProvider } from "styled-components";
import { themes } from "../styles/Theme";
import { GlobalStyles } from "../styles/Globals";
import { ProfileCard } from "../components/ProfileCard";
import { Header } from "../components/Header";
import avatar from  "../assets/img/avatar.jpeg";

import * as S from "./App.styles";

export function App() {
  return (
    <ThemeProvider theme={themes}>
      <S.PageWrapper>
        <Header />

        <S.AboutInfoContainer>
          <ProfileCard avatar={avatar} />
        </S.AboutInfoContainer>
        <GlobalStyles />
      </S.PageWrapper>
    </ThemeProvider>
  );
}