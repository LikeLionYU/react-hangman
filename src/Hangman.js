import React, { useState } from 'react';
import LetterGrid from './LetterGrid';
import ButtonGrid from './ButtonGrid';

const Hangman = ({puzzle, maxError}) => {
    const [guessedLetters, setGuessedLetters ] = useState([]);
    const [errorCount, setErrorCount] = useState(0);

    const guessedLetterHandler = (letter) => {
        let val = letter.toLowerCase();
        setGuessedLetters(prev => [...prev, val]);

        if(puzzle.toLowerCase().indexOf(val) === -1){
            setErrorCount(errorCount + 1);
        }
    }


    return (
        <>
            <LetterGrid puzzle={puzzle} guessedLetters={guessedLetters} />
            <div id='left'>
                LEFT : {maxError - errorCount}
            </div>
            <ButtonGrid guessedButton={guessedLetterHandler} isClickable={errorCount !== maxError}/>
        </>
    );
};

export default Hangman;