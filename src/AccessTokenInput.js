import React, { Component } from 'react';

class AccessTokenInput extends Component{
    handleChange(e){
        this.props.changeHandler(e.target.id, e.target.value);
    }
    render(){
        return <div>
            <span><input id="AccessTokenInput" onChange={this.handleChange.bind(this)} placeholder="Access token"/></span>
        </div>
    }
}

export default AccessTokenInput;