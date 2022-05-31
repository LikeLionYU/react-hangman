import React from 'react';
import LetterGrid from './LetterGrid';
import ButtonGrid from './ButtonGrid';

const Hangman = ({puzzle, maxError}) => {


    return(
        <>
            <LetterGrid/>
            <ButtonGrid/>
        </>
    );
};

export default Hangman;