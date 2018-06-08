import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav style={{ backgroundColor: '#024F7A' }}>
        <div className="nav-wrapper" style={{ paddingLeft: '10px' }}>
          <a href="/" className="brand-logo">
            Yoga Calculator
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/practice/add">Log Practice</a>
            </li>
            <li>
              <a href="/practice/list">View All</a>
            </li>
            <li>
              <a href="/practice/calculate">Calculate</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
