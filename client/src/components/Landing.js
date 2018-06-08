import React from 'react';
import yogaCat from '../images/meow-yoga.jpg';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Yoga Practice App</h2>
      <p>
        Log a practice, view all, or calculate to see if you're getting your money's worth. Namaste!
      </p>
      <img src={yogaCat} style={{ height: '250px' }} alt="meow-maste" />
    </div>
  );
};

export default Landing;
