import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPractices } from '../actions';

class ViewPractices extends Component {
  componentDidMount() {
    this.props.fetchPractices();
  }

  renderPractices() {
    return this.props.practices.map(practice => {
      return (
        <div key={practice._id}>
          <p>{practice.date}</p>
          <p>{practice.instructor}</p>
          <p>{practice.classType}</p>
          <p>{practice.rating}</p>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderPractices()}</div>;
  }
}

function mapStateToProps({ practices }) {
  return { practices };
}

export default connect(
  mapStateToProps,
  { fetchPractices }
)(ViewPractices);
