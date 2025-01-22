import { useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import * as S from "./style";

interface CollapseCardProps {
    title: string;
    content: React.ReactNode;
}

export function CollapseCard({ title, content }: CollapseCardProps) {
    const [isCollapseOpen, setIsCollapseOpen] = useState(false);
    
    function handleOpenCollapseCard() {
        setIsCollapseOpen((prev) => !prev);
    }
    
    return (
        <S.CollapseCardWrapper>
            <S.Title onClick={handleOpenCollapseCard}>
                {title}
                {isCollapseOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </S.Title>

            <S.Content isOpen={isCollapseOpen}>
                {content}
            </S.Content>

        </S.CollapseCardWrapper>
    );
}