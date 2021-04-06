import React, { useState } from "react";


function EightBall(props) {
    let initalQuestion = { msg: "Think of a Question.", color: "black" }


    const [answer, setAnswer] = useState(initalQuestion);
    const [tracker, setTracker] = useState(props.colTracker);
    

    function getRandIndex() {
        let randIndex = Math.floor(Math.random() * props.answers.length)
        return randIndex
    }

    function handleClick() {
        let randIndex = getRandIndex()
        setAnswer(props.answers[randIndex])
        keepCount(props.answers[randIndex]);
    }

    function handleReset() {
        setAnswer(initalQuestion);
        setTracker(props.colTracker);
    }

    function keepCount(answer){
        console.log({...tracker,[answer.color]: tracker[answer.color]+1});
        setTracker(oldTracker => ({...oldTracker,[answer.color]: oldTracker[answer.color]+1}));
       
    }


    return (
        <div>
            {answer.msg}
            {answer.color}
            {JSON.stringify(tracker)}
            <button onClick={handleClick}>Click Me!</button> 
            
            <button onClick={handleReset}>Reset</button>

        </div>
    )

}


export default EightBall;