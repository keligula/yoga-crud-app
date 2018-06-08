import React, { Component } from 'react';
import axios from 'axios';

class CreatePractice extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
      instructor: '',
      classType: '',
      rating: ''
    };
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();

    const { date, instructor, classType, rating } = this.state;

    axios
      .post('/api/practices', this.state)
      .then(result => {
        console.log(result);
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  render() {
    const { date, instructor, classType, rating } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Date</label>
          <input
            type="text"
            className="form-control"
            name="date"
            value={date}
            onChange={this.onChange}
          />
          <label>Instructor</label>
          <input
            type="text"
            className="form-control"
            name="instructor"
            value={instructor}
            onChange={this.onChange}
          />
          <label>Class Type</label>
          <input
            type="text"
            className="form-control"
            name="classType"
            value={classType}
            onChange={this.onChange}
          />
          <label>Rating</label>
          <input
            type="text"
            className="form-control"
            name="rating"
            value={rating}
            onChange={this.onChange}
          />
          <button type="submit">ENTER</button>
        </form>
      </div>
    );
  }
}

export default CreatePractice;
