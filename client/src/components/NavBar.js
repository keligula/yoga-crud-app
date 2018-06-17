import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  link: {
    marginRight: 10,
    textDecoration: 'none',
    color: 'white'
  }
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" className={classes.flex}>
            <a href="/" className={classes.link}>
              YOGA MOTIVATOR
            </a>
          </Typography>
          <Typography>
            <a
              href="https://www.linkedin.com/in/keldonger/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              LINKEDIN
            </a>
          </Typography>
          <Typography>
            <a
              href="https://github.com/keligula"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              GITHUB
            </a>
          </Typography>
          <Typography>
            <a href="mailto:keldonger@gmail.com" className={classes.link}>
              CONTACT
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
