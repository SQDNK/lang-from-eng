'use client'

// skeleton source: https://github.com/chrisblakely01/quiz-app/blob/master/final/src/App.js
import React, { useState } from 'react';
import QArray from './questions';
// react-speech-kit: https://github.com/MikeyParton/react-speech-kit

const DoQuestions = () => {
    // states
    // can useState() take in variable - states should replace variables 
    // that you want to rerender whenever they are changed 
    let start = 0;
    const [currQIndex, setCurrQIndex] = useState(start);
    const [finished, setFinished] = useState(false);
    const [score, setScore] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    const [speakText, setSpeakText] = useState(QArray[currQIndex].questionText);

    const synth  = window.speechSynthesis;
    const [ speech, voices ] = [ new SpeechSynthesisUtterance(speakText), synth.getVoices() ];
    // to check voices array, render {console.log(window.speechSynthesis.getVoices())}
    // can find with voices[i].name == "lang"
    // korean is index 11
    speech.voice = voices[11];
    
    // setQ instead of setNextQ? states set start but this feels clunky
    const setNextQ = () => {
        setShowCorrectAnswer(false);
        let _finished = false;
        if (_finished) {
            setFinished(true);
        }

        // randomize question?

        setCurrQIndex(currQIndex+1);
        // currQIndex unchanged here even after calling setCurrQIndex
        setSpeakText(QArray[currQIndex+1].questionText); 
    };

    const handleInputChange = (event, answer) => {
        setUserInput(event.target.value);
        // check if correct
        if (userInput === answer) { // string comparison 
            setScore(score + 1);
            setShowCorrectAnswer(true); // put these as one fxn concludeQ ? 
            setNextQ();
        }
        // if incorrect, do nothing
    };

    const handleDoneClick = () => {
        setShowCorrectAnswer(true);
    };

    const handleNextClick = () => {
        setNextQ();
    };

    return (
        <div class="flex flex-row">
            <div class="basis-1/2"> Hello</div>
            <div class="basis-1/2"> Goodbye</div>
        </div>
        /*
        <div classname="flex border rounded-lg shadow-lg">
            <p classname="text-2xl font-semibold px-5 py-5">
                {QArray[currQIndex].questionText}
            </p>
            <button  
                // eventually want to play each phrase instead of whole thing
                onClick={() => synth.speak(speech)}>
                Play 
            </button>
            <p>
                {'Hints: ' + QArray[currQIndex].hints } 
            </p>

            <input // user answer... needs <form> 
                type="text"
                id="userInput"
                name="userInput" // field value submitted to server
                value={userInput} // defaultValue changes this to
                // uncontrolled component which doesn't use onChange
                onChange={(e) => handleInputChange(e, QArray[currQIndex].correctAnswer)}
                // https://bobbyhadz.com/blog/react-get-input-value
                >
            </input>
        </div> */
        
        /*
        finished ? (
            <div className='score'>
                Score: {score / QArray.length} 
            </div>
        ) : (
            <div className='q'>
                {QArray[currQIndex].questionText}
                <p
                    value={speakText}
                />
                <button  
                    // eventually want to play each phrase instead of whole thing
                    onClick={() => synth.speak(speech)}>
                    Play 
                </button>
                <br></br>
                <p>
                    {'Hints: ' + QArray[currQIndex].hints } 
                </p>

                <input // user answer... needs <form> 
                    type="text"
                    id="userInput"
                    name="userInput" // field value submitted to server
                    value={userInput} // defaultValue changes this to
                    // uncontrolled component which doesn't use onChange
                    onChange={(e) => handleInputChange(e, QArray[currQIndex].correctAnswer)}
                    // https://bobbyhadz.com/blog/react-get-input-value
                    >
                </input>

                {showCorrectAnswer ? ( // a ui issue here with button switching
                    <>
                        <div>
                            {QArray[currQIndex].correctAnswer}
                        </div>
                        <button
                            onClick={() => handleNextClick()} >
                            Next
                        </button>
                    </>
                ) : (
                    <button
                        onClick={() => handleDoneClick()} >
                        Done
                    </button>
                )}
            </div>    
   
        ) */
    );
};

export default DoQuestions;