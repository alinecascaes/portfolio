import { HtmlHTMLAttributes } from "react";

import * as S from "./style";

interface ProfileCardProps extends HtmlHTMLAttributes<HTMLImageElement> {
    avatar: string;
}

export function ProfileCard({ avatar, ...props }: ProfileCardProps) {
    return (
        <S.ProfileCardWrapper>
            <S.ProfileImage src={avatar} {...props}/>
            <S.ProfileParagraph><span>Aline Cascaes</span></S.ProfileParagraph>
            <S.ProfileParagraph>Desenvolvedora Fullstack</S.ProfileParagraph>
            <S.Divider />
        </S.ProfileCardWrapper>
    );
}