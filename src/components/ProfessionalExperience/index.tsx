import { CollapseCard } from "../CollapseCard";
import { experiences } from "../../data/experience";

import * as S from "./style";

export function ProfessionalExperience() {
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
