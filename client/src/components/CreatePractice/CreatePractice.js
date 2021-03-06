// import _ from 'lodash';
import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    alignItems: 'center',
    fullWidth: true,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center'
  },
  textField: {
    width: 400,
    paddingRight: 15
  }
};

class CreatePractice extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
      instructor: '',
      classType: '',
      rating: '',
      isEditing: false
    };
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState({
      [name]: value
    });

  onSubmit = e => {
    e.preventDefault();

    axios
      .post('/api/practices', this.state)
      .then(res => {
        console.log(res);
        this.setState({ date: '', instructor: '', classType: '', rating: '' });
        this.props.history.push('/practices');
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  render() {
    const { date, instructor, classType, rating } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.container} onSubmit={this.onSubmit}>
          <TextField
            name="date"
            label="Date"
            className={classes.textField}
            value={date}
            onChange={this.handleChange}
            type="text"
          />
          <TextField
            name="instructor"
            label="Instructor"
            className={classes.textField}
            value={instructor}
            onChange={this.handleChange}
          />
          <TextField
            name="classType"
            label="Class Type"
            className={classes.textField}
            value={classType}
            onChange={this.handleChange}
          />
          <TextField
            name="rating"
            label="Rating"
            className={classes.textField}
            value={rating}
            onChange={this.handleChange}
          />
          <div className={classes.container}>
            <Button variant="contained" color="primary" type="submit">
              LOG PRACTICE
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// TextField.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(CreatePractice);
