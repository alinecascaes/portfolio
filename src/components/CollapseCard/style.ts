import styled from "styled-components";

interface CollapseContentProps {
    isOpen: boolean;
}

export const CollapseCardWrapper = styled.div `
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Title = styled.p `
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 16px;

    @media (min-width: 668px) {
        font-size: 18px;
    }
    
    @media (min-width: 1024px) {
        font-size: 20px;
        cursor: pointer;
    }
`;

export const Content = styled.div<CollapseContentProps>`
    max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  
    overflow: hidden;
    transition: max-height 0.4s ease-in-out;
`;