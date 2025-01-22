import { CollapseCard } from "../CollapseCard";
import * as S from "./style";

export function ProfessionalExperience() {
    const experiences = [
        {
            id: 1,
            title: "Desenvolvimento de interfaces de usuário",
            content: `
                Conhecimentos em diversas tecnologias como TypeScript, React, Styled Components, Next entre outras, 
                aplicadas para o desenvolvimento de de interfaces de usuário e componentes intuitivos, atraentes,
                dinâmicos e responsivos, sempre visando garantir uma experiência de usuário fluida. 
            `,
        },
        {
            id: 2,
            title: "Colaboração em projetos ágeis",
            content: `
                Participei ativamente em projetos ágeis,
                contribuindo com reuniões diárias, revisões de código e iterações de
                desenvolviment
            `,
        },
        {
            id: 3,
            title: "Storybook",
            content: `
                Criação de Storybooks para desenvolver, testar e documentar
                componentes de maneira isolada, possibilitando uma visualização rápida e
                interativa dos componentes em diferentes estados e variantes
            `,
        },
        {
            id: 4,
            title: "Internacionalização (i18n)",
            content: `
                Desenvolvi soluções de internacionalização (i18n)
                para adaptar sites e conteúdos a diferentes idiomas .
            `,
        },
        {
            id: 5,
            title: "SEO (Search Engine Optimization)",
            content: `
                Tenho experiência em otimização de sites
                para mecanismos de busca, utilizando práticas recomendadas para aumentar a
                visibilidade e o tráfego orgânico.
            `,
        },
        {
            id: 6,
            title: "WordPress",
            content: `
                Tenho experiência na personalização de temas e no
                desenvolvimento de funcionalidades para o WordPress.
            `,
        },
    ];

    return (
        <S.ExperienceWrapper>
            <S.Title>Experiência profissional</S.Title>

            <S.ExperienceContainer>
                {experiences.map((experience) => {
                    return (
                        <S.ExperienceList key={experience.id}>
                            <S.ExperienceListItem>
                                <CollapseCard
                                    title={experience.title}
                                    content={experience.content}
                                />
                            </S.ExperienceListItem>
                        </S.ExperienceList>
                    );
                })}
            </S.ExperienceContainer>
        </S.ExperienceWrapper>
    );
}
