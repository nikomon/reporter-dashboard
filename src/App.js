import React, { Component } from 'react';
import Header from './Header';
import StartEndDate from './StartEndDate';
import AccessTokenInput from './AccessTokenInput';
import CountContainer from './CountContainer';
import DataTable from './DataTable';

import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            AccessToken: '',
            startDate: '',
            endDate: '',
            table: {
                "room_id": "84e0fefa-5675-11e7-a349-00163efdd8db",
                "start_date": "2017-05-01",
                "end_date": "2017-06-15",
                "total_visitors_with_conversation_count": 321,
                "total_visitors_affected_by_chat_count": 3834,
                "total_visitors_autosuggested_count": 3732,
                "total_visitors_with_chat_count": 448,
                "total_chats_from_autosuggest_count": 3917,
                "total_chats_from_user_count": 7,
                "total_chats_from_visitor_count": 132,
                "total_conversation_count": 330,
                "total_user_message_count": 2862,
                "total_visitor_message_count": 2611,
                "total_missed_chat_count": 64,
                "by_date": [
                    {
                        "visitors_with_conversation_count": 9,
                        "visitors_affected_by_chat_count": 100,
                        "visitors_autosuggested_count": 92,
                        "visitors_with_chat_count": 16,
                        "chats_from_autosuggest_count": 98,
                        "chats_from_user_count": 1,
                        "chats_from_visitor_count": 8,
                        "conversation_count": 9,
                        "user_message_count": 94,
                        "visitor_message_count": 97,
                        "missed_chat_count": 3,
                        "date": "2017-05-04"
                    },
                    {
                        "visitors_with_conversation_count": 7,
                        "visitors_affected_by_chat_count": 76,
                        "visitors_autosuggested_count": 73,
                        "visitors_with_chat_count": 9,
                        "chats_from_autosuggest_count": 79,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 3,
                        "conversation_count": 7,
                        "user_message_count": 73,
                        "visitor_message_count": 77,
                        "missed_chat_count": 2,
                        "date": "2017-05-05"
                    },
                    {
                        "visitors_with_conversation_count": 11,
                        "visitors_affected_by_chat_count": 107,
                        "visitors_autosuggested_count": 103,
                        "visitors_with_chat_count": 12,
                        "chats_from_autosuggest_count": 105,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 5,
                        "conversation_count": 11,
                        "user_message_count": 53,
                        "visitor_message_count": 51,
                        "missed_chat_count": 1,
                        "date": "2017-05-02"
                    },
                    {
                        "visitors_with_conversation_count": 9,
                        "visitors_affected_by_chat_count": 100,
                        "visitors_autosuggested_count": 99,
                        "visitors_with_chat_count": 17,
                        "chats_from_autosuggest_count": 105,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 3,
                        "conversation_count": 10,
                        "user_message_count": 70,
                        "visitor_message_count": 77,
                        "missed_chat_count": 4,
                        "date": "2017-05-03"
                    },
                    {
                        "visitors_with_conversation_count": 9,
                        "visitors_affected_by_chat_count": 116,
                        "visitors_autosuggested_count": 114,
                        "visitors_with_chat_count": 15,
                        "chats_from_autosuggest_count": 121,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 3,
                        "conversation_count": 9,
                        "user_message_count": 50,
                        "visitor_message_count": 62,
                        "missed_chat_count": 3,
                        "date": "2017-05-08"
                    },
                    {
                        "visitors_with_conversation_count": 13,
                        "visitors_affected_by_chat_count": 136,
                        "visitors_autosuggested_count": 133,
                        "visitors_with_chat_count": 15,
                        "chats_from_autosuggest_count": 138,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 4,
                        "conversation_count": 13,
                        "user_message_count": 116,
                        "visitor_message_count": 97,
                        "missed_chat_count": 2,
                        "date": "2017-05-09"
                    },
                    {
                        "visitors_with_conversation_count": 9,
                        "visitors_affected_by_chat_count": 139,
                        "visitors_autosuggested_count": 138,
                        "visitors_with_chat_count": 12,
                        "chats_from_autosuggest_count": 146,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 10,
                        "conversation_count": 9,
                        "user_message_count": 103,
                        "visitor_message_count": 94,
                        "missed_chat_count": 7,
                        "date": "2017-05-10"
                    },
                    {
                        "visitors_with_conversation_count": 0,
                        "visitors_affected_by_chat_count": 143,
                        "visitors_autosuggested_count": 143,
                        "visitors_with_chat_count": 0,
                        "chats_from_autosuggest_count": 154,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 0,
                        "conversation_count": 0,
                        "user_message_count": 0,
                        "visitor_message_count": 0,
                        "missed_chat_count": 0,
                        "date": "2017-05-11"
                    },
                    {
                        "visitors_with_conversation_count": 10,
                        "visitors_affected_by_chat_count": 115,
                        "visitors_autosuggested_count": 112,
                        "visitors_with_chat_count": 13,
                        "chats_from_autosuggest_count": 118,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 4,
                        "conversation_count": 11,
                        "user_message_count": 99,
                        "visitor_message_count": 95,
                        "missed_chat_count": 0,
                        "date": "2017-05-12"
                    },
                    {
                        "visitors_with_conversation_count": 8,
                        "visitors_affected_by_chat_count": 135,
                        "visitors_autosuggested_count": 133,
                        "visitors_with_chat_count": 11,
                        "chats_from_autosuggest_count": 142,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 4,
                        "conversation_count": 9,
                        "user_message_count": 86,
                        "visitor_message_count": 72,
                        "missed_chat_count": 1,
                        "date": "2017-05-15"
                    },
                    {
                        "visitors_with_conversation_count": 10,
                        "visitors_affected_by_chat_count": 135,
                        "visitors_autosuggested_count": 132,
                        "visitors_with_chat_count": 13,
                        "chats_from_autosuggest_count": 143,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 4,
                        "conversation_count": 10,
                        "user_message_count": 51,
                        "visitor_message_count": 48,
                        "missed_chat_count": 2,
                        "date": "2017-05-16"
                    },
                    {
                        "visitors_with_conversation_count": 11,
                        "visitors_affected_by_chat_count": 148,
                        "visitors_autosuggested_count": 145,
                        "visitors_with_chat_count": 16,
                        "chats_from_autosuggest_count": 149,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 3,
                        "conversation_count": 11,
                        "user_message_count": 124,
                        "visitor_message_count": 122,
                        "missed_chat_count": 3,
                        "date": "2017-05-17"
                    },
                    {
                        "visitors_with_conversation_count": 8,
                        "visitors_affected_by_chat_count": 98,
                        "visitors_autosuggested_count": 95,
                        "visitors_with_chat_count": 13,
                        "chats_from_autosuggest_count": 97,
                        "chats_from_user_count": 1,
                        "chats_from_visitor_count": 2,
                        "conversation_count": 8,
                        "user_message_count": 65,
                        "visitor_message_count": 70,
                        "missed_chat_count": 0,
                        "date": "2017-05-18"
                    },
                    {
                        "visitors_with_conversation_count": 12,
                        "visitors_affected_by_chat_count": 93,
                        "visitors_autosuggested_count": 91,
                        "visitors_with_chat_count": 17,
                        "chats_from_autosuggest_count": 94,
                        "chats_from_user_count": 1,
                        "chats_from_visitor_count": 5,
                        "conversation_count": 13,
                        "user_message_count": 118,
                        "visitor_message_count": 82,
                        "missed_chat_count": 3,
                        "date": "2017-05-19"
                    },
                    {
                        "visitors_with_conversation_count": 12,
                        "visitors_affected_by_chat_count": 135,
                        "visitors_autosuggested_count": 133,
                        "visitors_with_chat_count": 15,
                        "chats_from_autosuggest_count": 140,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 4,
                        "conversation_count": 13,
                        "user_message_count": 142,
                        "visitor_message_count": 123,
                        "missed_chat_count": 2,
                        "date": "2017-05-22"
                    },
                    {
                        "visitors_with_conversation_count": 15,
                        "visitors_affected_by_chat_count": 132,
                        "visitors_autosuggested_count": 131,
                        "visitors_with_chat_count": 18,
                        "chats_from_autosuggest_count": 140,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 1,
                        "conversation_count": 15,
                        "user_message_count": 112,
                        "visitor_message_count": 108,
                        "missed_chat_count": 1,
                        "date": "2017-05-23"
                    },
                    {
                        "visitors_with_conversation_count": 5,
                        "visitors_affected_by_chat_count": 80,
                        "visitors_autosuggested_count": 80,
                        "visitors_with_chat_count": 6,
                        "chats_from_autosuggest_count": 81,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 0,
                        "conversation_count": 5,
                        "user_message_count": 45,
                        "visitor_message_count": 42,
                        "missed_chat_count": 1,
                        "date": "2017-05-24"
                    },
                    {
                        "visitors_with_conversation_count": 0,
                        "visitors_affected_by_chat_count": 6,
                        "visitors_autosuggested_count": 6,
                        "visitors_with_chat_count": 0,
                        "chats_from_autosuggest_count": 6,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 0,
                        "conversation_count": 0,
                        "user_message_count": 0,
                        "visitor_message_count": 0,
                        "missed_chat_count": 0,
                        "date": "2017-05-25"
                    },
                    {
                        "visitors_with_conversation_count": 8,
                        "visitors_affected_by_chat_count": 98,
                        "visitors_autosuggested_count": 97,
                        "visitors_with_chat_count": 11,
                        "chats_from_autosuggest_count": 102,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 2,
                        "conversation_count": 9,
                        "user_message_count": 67,
                        "visitor_message_count": 51,
                        "missed_chat_count": 1,
                        "date": "2017-05-26"
                    },
                    {
                        "visitors_with_conversation_count": 14,
                        "visitors_affected_by_chat_count": 119,
                        "visitors_autosuggested_count": 112,
                        "visitors_with_chat_count": 17,
                        "chats_from_autosuggest_count": 115,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 7,
                        "conversation_count": 14,
                        "user_message_count": 105,
                        "visitor_message_count": 75,
                        "missed_chat_count": 2,
                        "date": "2017-05-29"
                    },
                    {
                        "visitors_with_conversation_count": 11,
                        "visitors_affected_by_chat_count": 137,
                        "visitors_autosuggested_count": 132,
                        "visitors_with_chat_count": 18,
                        "chats_from_autosuggest_count": 141,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 5,
                        "conversation_count": 12,
                        "user_message_count": 93,
                        "visitor_message_count": 99,
                        "missed_chat_count": 1,
                        "date": "2017-05-30"
                    },
                    {
                        "visitors_with_conversation_count": 17,
                        "visitors_affected_by_chat_count": 132,
                        "visitors_autosuggested_count": 124,
                        "visitors_with_chat_count": 23,
                        "chats_from_autosuggest_count": 126,
                        "chats_from_user_count": 1,
                        "chats_from_visitor_count": 9,
                        "conversation_count": 17,
                        "user_message_count": 117,
                        "visitor_message_count": 120,
                        "missed_chat_count": 2,
                        "date": "2017-05-31"
                    },
                    {
                        "visitors_with_conversation_count": 9,
                        "visitors_affected_by_chat_count": 166,
                        "visitors_autosuggested_count": 165,
                        "visitors_with_chat_count": 12,
                        "chats_from_autosuggest_count": 173,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 2,
                        "conversation_count": 9,
                        "user_message_count": 88,
                        "visitor_message_count": 77,
                        "missed_chat_count": 1,
                        "date": "2017-06-01"
                    },
                    {
                        "visitors_with_conversation_count": 17,
                        "visitors_affected_by_chat_count": 139,
                        "visitors_autosuggested_count": 136,
                        "visitors_with_chat_count": 18,
                        "chats_from_autosuggest_count": 141,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 3,
                        "conversation_count": 17,
                        "user_message_count": 201,
                        "visitor_message_count": 165,
                        "missed_chat_count": 0,
                        "date": "2017-06-02"
                    },
                    {
                        "visitors_with_conversation_count": 11,
                        "visitors_affected_by_chat_count": 134,
                        "visitors_autosuggested_count": 132,
                        "visitors_with_chat_count": 12,
                        "chats_from_autosuggest_count": 137,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 3,
                        "conversation_count": 11,
                        "user_message_count": 173,
                        "visitor_message_count": 129,
                        "missed_chat_count": 1,
                        "date": "2017-06-05"
                    },
                    {
                        "visitors_with_conversation_count": 9,
                        "visitors_affected_by_chat_count": 136,
                        "visitors_autosuggested_count": 132,
                        "visitors_with_chat_count": 14,
                        "chats_from_autosuggest_count": 136,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 4,
                        "conversation_count": 9,
                        "user_message_count": 70,
                        "visitor_message_count": 59,
                        "missed_chat_count": 3,
                        "date": "2017-06-06"
                    },
                    {
                        "visitors_with_conversation_count": 8,
                        "visitors_affected_by_chat_count": 105,
                        "visitors_autosuggested_count": 102,
                        "visitors_with_chat_count": 18,
                        "chats_from_autosuggest_count": 106,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 3,
                        "conversation_count": 8,
                        "user_message_count": 81,
                        "visitor_message_count": 67,
                        "missed_chat_count": 9,
                        "date": "2017-06-07"
                    },
                    {
                        "visitors_with_conversation_count": 13,
                        "visitors_affected_by_chat_count": 72,
                        "visitors_autosuggested_count": 62,
                        "visitors_with_chat_count": 21,
                        "chats_from_autosuggest_count": 67,
                        "chats_from_user_count": 1,
                        "chats_from_visitor_count": 14,
                        "conversation_count": 13,
                        "user_message_count": 77,
                        "visitor_message_count": 70,
                        "missed_chat_count": 3,
                        "date": "2017-06-08"
                    },
                    {
                        "visitors_with_conversation_count": 9,
                        "visitors_affected_by_chat_count": 105,
                        "visitors_autosuggested_count": 101,
                        "visitors_with_chat_count": 14,
                        "chats_from_autosuggest_count": 107,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 4,
                        "conversation_count": 9,
                        "user_message_count": 44,
                        "visitor_message_count": 58,
                        "missed_chat_count": 3,
                        "date": "2017-06-09"
                    },
                    {
                        "visitors_with_conversation_count": 9,
                        "visitors_affected_by_chat_count": 139,
                        "visitors_autosuggested_count": 135,
                        "visitors_with_chat_count": 13,
                        "chats_from_autosuggest_count": 141,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 4,
                        "conversation_count": 9,
                        "user_message_count": 68,
                        "visitor_message_count": 61,
                        "missed_chat_count": 1,
                        "date": "2017-06-12"
                    },
                    {
                        "visitors_with_conversation_count": 11,
                        "visitors_affected_by_chat_count": 160,
                        "visitors_autosuggested_count": 160,
                        "visitors_with_chat_count": 13,
                        "chats_from_autosuggest_count": 168,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 2,
                        "conversation_count": 12,
                        "user_message_count": 85,
                        "visitor_message_count": 95,
                        "missed_chat_count": 1,
                        "date": "2017-06-13"
                    },
                    {
                        "visitors_with_conversation_count": 9,
                        "visitors_affected_by_chat_count": 87,
                        "visitors_autosuggested_count": 82,
                        "visitors_with_chat_count": 13,
                        "chats_from_autosuggest_count": 84,
                        "chats_from_user_count": 2,
                        "chats_from_visitor_count": 3,
                        "conversation_count": 9,
                        "user_message_count": 45,
                        "visitor_message_count": 38,
                        "missed_chat_count": 0,
                        "date": "2017-06-15"
                    },
                    {
                        "visitors_with_conversation_count": 8,
                        "visitors_affected_by_chat_count": 111,
                        "visitors_autosuggested_count": 107,
                        "visitors_with_chat_count": 13,
                        "chats_from_autosuggest_count": 117,
                        "chats_from_user_count": 0,
                        "chats_from_visitor_count": 4,
                        "conversation_count": 9,
                        "user_message_count": 147,
                        "visitor_message_count": 130,
                        "missed_chat_count": 1,
                        "date": "2017-06-14"
                    }
                ]
              }
        }
    }
    fetchData(){
        const start = this.state.startDate,
              end = this.state.endDate,
              AccessToken = this.state.AccessTokenInput,
              url = `https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=${start}&end_date=${end}`;

        fetch(url, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                'Authorization': `Token ${AccessToken}`
            }})
        .then(response => console.log(response));
  }
  validateField(id, value){
      console.log(value.length);
    switch(id){
        case 'AccessTokenInput':
            if(value.length === 40){
                this.setState({AccessToken: value})
                if(this.state.startDate && this.state.endDate){
                    console.log('Fetch data');
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