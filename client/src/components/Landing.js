import React from 'react';
import yogaCat from '../images/meow-yoga.jpg';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center', color: 'hsl(180, 51%, 50%)', fontSize: '20px' }}>
      <img src={yogaCat} style={{ height: '250px', paddingTop: '50px' }} alt="meow-maste" />
      <p>
        Log a practice, view all, or calculate to see if you're getting your money's worth. Namaste!
      </p>
      <a
        href="/practice/add"
        className="waves-effect waves-light btn-large"
        style={{ margin: '20px' }}
      >
        <i className="material-icons left">add</i>Log Practice
      </a>
      <a
        href="/practice/list"
        className="waves-effect waves-light btn-large"
        style={{ margin: '20px' }}
      >
        <i className="material-icons left">view_list</i>View All
      </a>
      <a
        href="/practice/calculate"
        className="waves-effect waves-light btn-large"
        style={{ margin: '20px' }}
      >
        <i className="material-icons left">attach_money</i>Calculate
      </a>
    </div>
  );
};

export default Landing;
