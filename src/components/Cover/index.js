import React from 'react';
import { CoverContainer, CoverContent, CoverTitle } from './CoverElements';

const Cover = props => {
    return (
        <CoverContainer>
            <CoverContent>
                <CoverTitle>{props.title}</CoverTitle>
            </CoverContent>
        </CoverContainer>
    );
};

export default Cover;