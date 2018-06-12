import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav style={{ backgroundColor: 'hsl(180, 51%, 50%)' }}>
        <div className="nav-wrapper" style={{ paddingLeft: '10px' }}>
          <a href="/" className="brand-logo">
            YOGA CALCULATOR
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="https://www.linkedin.com/in/keldonger/" target="_blank">
                LINKEDIN
              </a>
            </li>
            <li>
              <a href="https://github.com/keligula" target="_blank">
                GITHUB
              </a>
            </li>
            <li>
              <a href="mailto:keldonger@gmail.com">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
