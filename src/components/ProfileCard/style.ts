import styled from "styled-components";

export const ProfileCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.color["gray-300"]};
    gap: 0.375rem;
`;

export const ProfileImage = styled.img`
    border-radius: 100%;
    width: 6.25rem;
    height: 6.25rem;
    margin-bottom: 0.625rem;

    @media (min-width: 668px) {
     width: 7.5rem;
     height: 7.5rem;
    }

    @media (min-width: 1024px) {
        width: 7.5rem;
        height: 7.5rem;
    }
`;

export const ProfileParagraph = styled.p`
    color: ${({ theme }) => theme.color["gray-300"]};

    & span {
        color: ${({ theme }) => theme.color["lime-900"]};
        font-weight: 400;
    }

    @media (min-width: 668px) {
     font-size: 1.125rem;
    }

    @media (min-width: 1024px) {
     font-size: 1.25rem;
    }
`;

export const Divider = styled.hr`
    border: none;
    width: 50%;
    height: 0.125rem;
    background: linear-gradient(to right, transparent, ${({ theme }) => theme.color["lime-900"]}, transparent);
    margin-top: 2.5rem;

    @media (min-width: 668px) {
        max-width: calc(100% - 10px);
    }
    
    @media (min-width: 1024px) {
        max-width: calc(100% - 10px);
    }
`;