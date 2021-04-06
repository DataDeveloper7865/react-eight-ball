import React, { useState } from "react";


function EightBall(props) {
    let initalQuestion = { msg: "Think of a Question.", color: "black" }
    const [answer, setAnswer] = useState(initalQuestion)

    function getRandIndex() {
        let randIndex = Math.floor(Math.random() * props.answers.length)
        return randIndex
    }

    function handleClick() {
        let randIndex = getRandIndex()
        setAnswer(props.answers[randIndex])
    }

    return (
        <div>
            {answer.msg}
            {answer.color}
            <button onClick={handleClick}>Click Me!</button> 
        </div>
    )

}


export default EightBall;