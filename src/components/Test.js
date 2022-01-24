import React from 'react'
import Tryagain from './Tryagain.js'
import Typing from './Typing.js'


function Test({ para,words,characters,wpm,timeleft,timerstarted }) {
    const time = 10;
    return (
        <div className="test">
            { time>0 ? ( <div className="typing"> <Typing data-aos="fade-down" className="challenge" para={para} words={words} characters={characters} wpm={wpm} timeleft={timeleft} timerstarted={timerstarted} /> </div>) : (
                <div className="try"> <Tryagain words={words} characters={characters} wpm= {wpm}/>       </div> ) }
        </div>
    )
}

export default Test

