import React, { Component } from 'react';

class StartEndDate extends Component{
    handleChange(e){
        this.props.changeHandler(e.target.id, e.target.value);
    }
    render(){
        return <div>
            <span><input onChange={this.handleChange.bind(this)} id="startDate" type="date" name="startDate" placeholder="Start date"/></span>
            <span><input onChange={this.handleChange.bind(this)} id="endDate" type="date" name="endDate" placeholder="End date"/></span>
        </div>
    }
}

export default StartEndDate;