import React from 'react';
import { Button } from './styles';

const index = ({onClick, text, width, margin}) => {
    return (
        <Button type="button" style={{width: `${width}px`, margin: `${margin}px`}} onClick={onClick}>
            {text}
        </Button>
    );
};

export default index;
