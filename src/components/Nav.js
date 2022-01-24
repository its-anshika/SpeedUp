import React from 'react';
import logo from './images/logoit.png'
function Nav() {
    return (
      <div className="Nav">
        <img src={logo} className="logo" alt="logo" />
          <h1>SpeedUp</h1>
      </div>
    );
  }

export default Nav;