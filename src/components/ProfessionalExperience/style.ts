import styled from "styled-components";

export const ExperienceWrapper = styled.div `
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 100px;
`;

export const Title = styled.h2 `
    font-size: 20px;

    @media (min-width: 668px) {
        font-size: 24px;
    }
    
    @media (min-width: 1024px) {
        font-size: 30px;
    }
`;

export const ExperienceContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
    font-size: 16px;

    @media (min-width: 668px) {
        text-align: justify;
        font-size: 18px;
    }

    @media (min-width: 1024px) {
        text-align: justify;
        font-size: 20px;
    }
`;

export const ExperienceList = styled.ul `
    margin-left: 20px;  
`;

export const ExperienceListItem = styled.li `
`;