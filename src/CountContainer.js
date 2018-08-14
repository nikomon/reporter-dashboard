import React, { Component } from 'react';

class CountContainer extends Component{
    render(){
        return <div className="container">
            <div className="content panel panel-default">
                <div className="panel-body">
                <h1>{this.props.total_conversation_count}</h1>
                <h4>total_conversation_count</h4>
                </div>
            </div>
            <div className="content panel panel-default">
                <div className="panel-body">
                <h1>{this.props.total_user_message_count}</h1>
                <h4>total_user_message_count</h4>
                </div>
            </div>
            <div className="content panel panel-default">
                <div className="panel-body">
                <h1>{this.props.total_visitor_message_count}</h1>
                <h4>total_visitor_message_count</h4>
                </div>
            </div>
        </div>
        
    }
}

export default CountContainer;