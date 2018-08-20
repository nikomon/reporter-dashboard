import React, { Component } from 'react';
import Header from './Header';
import StartEndDate from './StartEndDate';
import AccessTokenInput from './AccessTokenInput';
import CountContainer from './CountContainer';
import DataTable from './DataTable';
import table from './table.json';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            AccessToken: '',
            startDate: '',
            endDate: '',
            table: table
        }
    }
    fetchData(){
        const start = this.state.startDate,
              end = this.state.endDate,
              AccessToken = this.state.AccessTokenInput,
              url = `https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=${start}&end_date=${end}`;
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                'Authorization': `Token ${AccessToken}`
            }})
        .then(response => this.setState({table: response}));
  }
  validateField(id, value){
    switch(id){
        case 'AccessTokenInput':
            if(value.length === 40){
                this.setState({AccessToken: value})
                if(this.state.startDate && this.state.endDate){
                    this.fetchData();
                } 
            } else {
                this.setState({AccessToken: ''})   
            }
            break;
        case 'startDate':
        this.setState({startDate: value})
        if(this.state.endDate && this.state.AccessToken){
            this.fetchData();
        }
            break;
        case 'endDate':
        this.setState({endDate: value})
        if(this.state.startDate && this.state.AccessToken){
            this.fetchData();
        }
            break;
        default:
            break;
    } 
    
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="flexGridFirst">
          <StartEndDate changeHandler={this.validateField.bind(this)}/>
          <AccessTokenInput changeHandler={this.validateField.bind(this)}/>
        </div>
        <div className="flexGridSecond">
          <CountContainer {...this.state.table}/>
        </div>
        <div className="">
          <DataTable data={this.state.table}/>
        </div>
      </div>
    );
  }
}

export default App;
