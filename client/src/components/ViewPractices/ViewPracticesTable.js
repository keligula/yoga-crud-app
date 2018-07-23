import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';
import { fetchPractices } from './../../actions';
import ViewPracticesTableRow from './ViewPracticesTableRow';

class ViewPracticesTable extends Component {
  componentDidMount() {
    this.props.fetchPractices();
  }

  render() {
    return (
      <div>
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
          <ViewPracticesTableRow />
        </Table>
      </div>
    );
  }
}

function mapStateToProps({ practices }) {
  return { practices };
}

export default connect(
  mapStateToProps,
  { fetchPractices }
)(ViewPracticesTable);
