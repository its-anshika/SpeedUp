import React from 'react'
import Test from './Test.js'

function Challenge({ para,words,characters,wpm,timeleft,timerstarted }) {
    return (
        <div data-aos="fade-down" className="challenge">
            <h1 className="heading">
                Take a speed test now!
            </h1>
            <Test words={words} characters={characters} wpm= {wpm} timeleft={timeleft} timerstarted={timerstarted} para={para}/>
        </div>
    )
}

export default Challenge

