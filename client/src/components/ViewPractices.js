import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { fetchPractices } from '../actions';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});

class ViewPractices extends Component {
  componentDidMount() {
    this.props.fetchPractices();
  }

  renderPractices() {
    return (
      <Paper className={styles.root}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell numeric>Instructor</TableCell>
              <TableCell numeric>Class Type</TableCell>
              <TableCell numeric>Rating</TableCell>
              <TableCell numeric>Edit</TableCell>
              <TableCell numeric>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.practices.map(practice => {
              return (
                <TableRow key={practice._id}>
                  <TableCell component="th" scope="row">
                    {practice.date}
                  </TableCell>
                  <TableCell numeric>{practice.instructor}</TableCell>
                  <TableCell numeric>{practice.classType}</TableCell>
                  <TableCell numeric>{practice.rating}</TableCell>
                  <TableCell numeric>
                    <button>Edit</button>
                  </TableCell>
                  <TableCell numeric>
                    <button>Delete</button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
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
