import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { fetchPractices } from '../actions';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
    flexGrow: 1,
    display: 'flex'
  },
  table: {
    minWidth: 400
  }
};

class ViewPractices extends Component {
  componentDidMount() {
    this.props.fetchPractices();
  }

  renderPractices() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell numeric>Instructor</TableCell>
            <TableCell numeric>Class Type</TableCell>
            <TableCell numeric>Rating</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.practices.map(practice => {
            return (
              <TableRow key={practice._id}>
                <TableCell>{practice.date}</TableCell>
                <TableCell numeric>{practice.instructor}</TableCell>
                <TableCell numeric>{practice.classType}</TableCell>
                <TableCell numeric>{practice.rating}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary">
                    EDIT
                  </Button>
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary">
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }

  render() {
    return <div className={styles.root}>{this.renderPractices()}</div>;
  }
}

function mapStateToProps({ practices }) {
  return { practices };
}

export default connect(
  mapStateToProps,
  { fetchPractices }
)(ViewPractices);
