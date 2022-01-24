import React from 'react';
import pic from './images/typing.gif';
import Typewriter from 'typewriter-effect';

function Landing() {
    return (
      <div  className="Landing">
        <div data-aos="fade-right" className="left">
            Can you type <br/>
              { <Typewriter
                options={{
                  strings: ['fast?', 'correct?', 'quick?'],
                  autoStart: true,
                  loop: true 
                }} /> 
              }
        </div>
        <div className="right">
            <img data-aos="fade-left" src={pic} alt="typing" className="type"/>
        </div>
     
      </div>
    );
  }
  
export default Landing;