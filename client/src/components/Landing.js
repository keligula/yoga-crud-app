import React from 'react';
import yogaCat from '../images/meow-yoga.jpg';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  button: {
    background: 'linear-gradient(45deg, #0b0b94 20%, #00d4ff 90%)',
    borderRadius: 3,
    border: 0,
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
    margin: '20px'
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
};

const Landing = props => {
  return (
    <div style={{ textAlign: 'center', color: '#0b0b94', fontSize: '20px' }}>
      <img src={yogaCat} style={{ height: '250px', paddingTop: '50px' }} alt="meow-maste" />
      <p>
        Log a practice, view all, or calculate to see if you're getting your money's worth. Namaste!
      </p>
      <Button className={props.classes.button}>
        <a href="/practices/add" className={props.classes.link}>
          Log Practice
        </a>
      </Button>
      <Button className={props.classes.button}>
        <a href="/practices" className={props.classes.link}>
          View All
        </a>
      </Button>
      <Button className={props.classes.button}>
        <a href="/calculate" className={props.classes.link}>
          Calculate
        </a>
      </Button>
    </div>
  );
};

export default withStyles(styles)(Landing);
