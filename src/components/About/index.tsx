import * as S from "./style";

export function About() {
    return (
        <S.AboutWrapper>
            <S.AboutTitle>Sobre mim</S.AboutTitle>

            <S.AboutParagraph>
                Estudante de Engenharia de Software e <span>desenvolvedora FullStack</span>, desenvolvo soluções inovadoras e 
                melhorias através do uso de tecnologia. Tenho experiência de 2 anos na área de desenvolvimento 
                Front-end e conhecimentos sólidos em linguagens como <span>HTML, CSS, JavaScript, Typescript, React e Next.js</span>. Sou
                apaixonada por criar interfaces funcionais e otimizadas, sempre buscando unir a melhor experiência 
                do usuário com alto desempenho técnico. 
            </S.AboutParagraph>

            <S.AboutParagraph>
                Meu objetivo é continuar evoluindo como profissional de tecnologia, atuando em projetos 
                desafiadores que impactem positivamente a vida das pessoas. Acredito na importância da 
                criatividade e do trabalho em equipe como pilares para o desenvolvimento de produtos inovadores 
                e acessíveis.
            </S.AboutParagraph>
        </S.AboutWrapper>
    );
}