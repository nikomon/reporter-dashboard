import React, { Component } from 'react';
import ReactTable from 'react-table'

class DataTable extends Component{
    render(){
        const columns = [{
            Header: 'conversation_count',
            accessor: 'conversation_count'
          }, {
            Header: 'missed_chat_count',
            accessor: 'missed_chat_count'
          }, {
            Header: 'visitors_with_conversation_count',
            accessor: 'visitors_with_conversation_count',
          }, {
            Header: 'Date',
            accessor: 'date',
          }]
        return <ReactTable
        data={this.props.data.by_date}
        columns={columns}
        showPageSizeOptions={false}
        defaultPageSize={5}
      />
    }
}

export default DataTable;