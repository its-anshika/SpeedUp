import React from 'react';
import Nav from './components/Nav.js';
import Landing from './components/Landing.js';
import Challenge from './components/Challenge.js';
import './index.css';

const time = 60;

class App extends React.Component {
  state={
    para: "Hello", timerstarted:false, timeleft: time, words:0, characters:0, wpm:0,
  };
  render(){
  return (
    <div className="App">
      <Nav />
     <Landing />
     <Challenge para={this.state.para} words={this.state.words} characters={this.state.characters} wpm={this.state.wpm} timeleft={this.state.timeleft} timerstarted={this.state.timerstarted} />
    </div>
  );
}
}

export default App;
