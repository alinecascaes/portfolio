import styled from "styled-components";

export const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: justify;
    gap: 1.25rem;
    line-height: 1.5;
`;

export const AboutTitle = styled.h2`
    font-size: 1.25rem;

    @media (min-width: 668px) {
        font-size: 1.5rem;
    }

    @media (min-width: 1024px) {
        font-size: 1.875rem;
    }
`;

export const AboutParagraph = styled.p`
    font-size: 1rem; 

    & span {
        color: ${({ theme }) => theme.color["lime-900"]};
    }

    @media (min-width: 668px) {
        font-size: 1.125rem;
    }

    @media (min-width: 1024px) {
        font-size: 1.25rem;
    }
`;