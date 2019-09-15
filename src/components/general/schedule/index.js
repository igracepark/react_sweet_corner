import React, { Component } from 'react';
import './schedule.scss';
import axios from 'axios';

export default class Schedule extends Component {
    state= {
        schedule:[]
    }

componentDidMount() {
    const url= 'http://localhost:3000/data/schedule.json'
    axios.get(url).then((response) => {
        console.log('Response: ', response);
        this.setState({schedule: response.data.schedule});
    }).catch(() => {
            console.log('Response Error: ', error);
    })
}

// {...schedule} will save all the props
// mapStateToProps 

render(){
    return (
        <div className='container'>
            <h6>For phone orders, our work schedule is:</h6>
            <div className='row'>
                <div className='col-md-2'>
                {this.state.schedule.map(schedule => 
                <div 
                className='schedule style1'
                key={schedule.pid}>
                {schedule.day}
                </div>)}
                </div>
           
            <div className='col-md-3'>
                {this.state.schedule.map(schedule => 
                <div 
                className='schedule style2' 
                key={schedule.pid}>
                {schedule.open} - {schedule.close}
                </div>)}
            </div>
            </div>
        </div>
        )
    }
} 
