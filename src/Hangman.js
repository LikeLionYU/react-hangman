import React, { useEffect, useState } from 'react';
import LetterGrid from './LetterGrid';
import ButtonGrid from './ButtonGrid';

const Hangman = ({puzzle, maxError}) => {
    const [guessedLetters, setGuessedLetters ] = useState([]);
    const [errorCount, setErrorCount] = useState(0);
    const [correctLetters, setCorrectLetters] = useState([]);

    const guessedLetterHandler = (letter) => {
        let val = letter.toLowerCase();
        setGuessedLetters(prev => [...prev, val]);

        if(puzzle.toLowerCase().indexOf(val) === -1){
            setErrorCount(errorCount + 1);
        }
        else{
            setCorrectLetters(prev => [...prev, val]);
        }

    }

    const checkAnswer = () => {
        let flag = true;

        const match = puzzle.toLowerCase().split("").map((val)=>{
            if(correctLetters.indexOf(val) !== -1){
                return true;
            }
            else{
                return false;
            }
        });

        match.forEach((val)=>{
            if(val === false) flag = false;

        })

        return flag;
    }

    checkAnswer();



    return (
        <>
            <LetterGrid puzzle={puzzle} guessedLetters={guessedLetters} />
            <div id='left'>
                LEFT : {maxError - errorCount}
            </div>
            <ButtonGrid guessedButton={guessedLetterHandler} isClickable={errorCount !== maxError} answer={checkAnswer()}/>
        </>
    );
};

export default Hangman;