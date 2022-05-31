import React from 'react';
import Button from './Button';

const ButtonGrid = (guessedLetterHandler, isClickable) => {

    let letters = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'
    ];

    let className = 'buttons';
    

    return (
        <div className={className}>

        </div>
    );
};

export default ButtonGrid;