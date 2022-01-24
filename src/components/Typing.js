import React from 'react'
import Details from './Details.js'
import Typetest from './Typetest.js'

function Typing({ para,words,characters,wpm,timeleft,timerstarted }) {
    return (
            <div className="typing">
                <div data-aos="fade-down" className="details">
                    <Details className="detailscard" cardname = "Words" value={words} />
                    <Details className="detailscard" cardname = "Characters" value= {characters} />
                    <Details className="detailscard" cardname = "Words per Minute" value={ wpm} />
                </div>
                <div className="typetest">
                    <Typetest para={para} words={words} characters={characters} wpm={wpm} timeleft={timeleft} timerstarted={timerstarted} />
                </div>
            </div>
    )
}

export default Typing

