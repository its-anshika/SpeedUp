import React from 'react'

function Typetest({ para,words,characters,wpm,timeleft,timerstarted }) {
    return (
    <div className="typetest">
            <div className="timer">
                <p className="time"> 00:{(timeleft >= 10) ? timeleft: `0${timeleft}`}</p>
                {/* template str used to inject some var in a str */}
                <p className="timer-info">{!timerstarted && "Speed up your typing skills!"}</p>
            </div>
            
                <div className="text-container">
                     <div className="t-left">
                        <div className="textarea para"> <p>{para}</p> </div>
                         </div> 
                     <div className="t-right">
                         <textarea className="textarea" placeholder=" Start typing here to start the test"></textarea>
                         </div> 
                </div>
            
    </div>            
    )
}

export default Typetest

