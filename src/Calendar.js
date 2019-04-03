import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import React, { Component } from 'react';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';

class Calendarss extends Component {


    constructor(props){
        super(props)
        this.state ={
            
        }
    }
//did you write a methoo for the add driver schedule yet?
    pushDriverInform = () => {
        let data = {...this.state} //copy current state
        data.events.push({
            title: `Testing Date2`,
            start: `2019-04-07`
        }) //push to array
        this.setState(data) //set state
    }

    componentDidMount(){
        this.cal()
        // document.addEventListener('DOMContentLoaded', function () {

        // });

    }

    cal = () => {
        var calendarEl = document.getElementById('calendar');

        let calendar = new Calendar(calendarEl, {
            plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
            defaultView: 'timeGridWeek',
            events: this.props.events
        });

        calendar.render();
    }

    componentDidUpdate() {
        this.cal()
    }
        


    render(){

        return (
            <div id="calendar">
                Testing
            </div>
        )
    }
}

export default Calendarss


