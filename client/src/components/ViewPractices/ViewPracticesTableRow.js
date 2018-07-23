import React, { Component } from 'react';
import axios from 'axios';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { fetchPractices } from './../../actions';

class ViewPracticesTableRow extends Component {
  deletePractice(practiceId) {
    axios
      .delete('/api/practices/' + practiceId)
      .then(res => {
        console.log(res);
        this.props.fetchPractices();
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  editPractice(practiceId) {
    //axios.put('/api/practices/' + practiceId).then(res => {
    console.log('this id is ready for editing:', practiceId);
    //});
  }

  render() {
    return (
      <TableBody>
        {this.props.practices.map(practice => {
          return (
            <TableRow key={practice._id}>
              <TableCell>{practice.date}</TableCell>
              <TableCell numeric>{practice.instructor}</TableCell>
              <TableCell numeric>{practice.classType}</TableCell>
              <TableCell numeric>{practice.rating}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.editPractice.bind(this, practice._id)}
                >
                  EDIT
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.deletePractice.bind(this, practice._id)}
                >
                  DELETE
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    );
  }
}

function mapStateToProps({ practices }) {
  return { practices };
}

export default connect(
  mapStateToProps,
  { fetchPractices }
)(ViewPracticesTableRow);
