import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import * as S from "./style";

export function Header() {
    return(
        <S.HeaderWrapper>
            <S.SocialMediaContainer>
                <S.Link target="_blank" href="https://www.linkedin.com/in/alinecascaes/">
                    <LinkedInIcon /> Linkedin
                </S.Link>

                <span> | </span>

                <S.Link target="_blank" href="https://github.com/alinecascaes">
                    <GitHubIcon /> GitHub
                </S.Link>
            </S.SocialMediaContainer>

            <S.EmailContainer>
                <S.Link target="_blank" href="mailto:alinemcascaes@gmail.com">
                    <EmailIcon /> alinemcascaes@gmail.com
                </S.Link>
            </S.EmailContainer>
        </S.HeaderWrapper>
    );
}