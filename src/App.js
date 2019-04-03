import React, { Component } from 'react';
import './App.css';
import Tabs from './Tabs';
import CheckInForm from './CheckInForm';
import CheckOutForm from'./CheckOutForm';

class App extends Component {
  render() {

    return (


      <div className="App">        
        <div>
          <Tabs list={this.props.DriversDB}/> 
        </div>

        <div className="cd-schedule loading">
          <div className="timeline">
            <ul>
              <li><span>05:00 AM</span></li>
              <li><span>05:30 AM</span></li>
              <li><span>06:00 AM</span></li>
              <li><span>06:30 AM</span></li>
              <li><span>07:00 AM</span></li>
              <li><span>07:30 AM</span></li>
              <li><span>08:00 AM</span></li>
              <li><span>08:30 AM</span></li>
              <li><span>09:00 AM</span></li>
              <li><span>09:30 AM</span></li>
              <li><span>10:00 AM</span></li>
              <li><span>10:30 AM</span></li>
              <li><span>11:00 AM</span></li>
              <li><span>11:30 AM</span></li>
              <li><span>12:00 PM</span></li>
              <li><span>12:30 PM</span></li>
              <li><span>01:00 PM</span></li>
              <li><span>01:30 PM</span></li>
              <li><span>02:00 PM</span></li>
              <li><span>02:30 PM</span></li>
              <li><span>03:00 PM</span></li>
              <li><span>03:30 PM</span></li>
              <li><span>04:00 PM</span></li>
              <li><span>04:30 PM</span></li>
              <li><span>05:00 PM</span></li>
              <li><span>05:30 PM</span></li>
              <li><span>06:00 PM</span></li>
              <li><span>06:30 PM</span></li>
              <li><span>07:00 PM</span></li>
              <li><span>07:30 PM</span></li>
              <li><span>08:00 PM</span></li>
              <li><span>08:30 PM</span></li>
              <li><span>09:00 PM</span></li>
              <li><span>09:30 PM</span></li>
              <li><span>10:00 PM</span></li>
              <li><span>10:30 PM</span></li>
              <li><span>11:00 PM</span></li>
              <li><span>11:30 PM</span></li>
              <li><span>12:00 AM</span></li>
              <li><span>12:30 AM</span></li>
              <li><span>01:00 AM</span></li>
              <li><span>01:30 AM</span></li>
              <li><span>02:00 AM</span></li>
              <li><span>02:30 AM</span></li>
              <li><span>03:00 AM</span></li>
              <li><span>03:30 AM</span></li>
              <li><span>04:00 AM</span></li>
              <li><span>04:30 AM</span></li>
            </ul>
          </div>

          <div className="events">
            <ul >
              <li className="events-group">
                <div className="top-info"><span>Sunday</span></div>
                <ul>
                </ul>
              </li>

              <li className="events-group">
                <div className="top-info"><span>Monday</span></div>
                <ul>
                </ul>
              </li>

              <li className="events-group">
                <div className="top-info"><span>Tuesday</span></div>
                <ul>
                </ul>
              </li>

              <li className="events-group">
                <div className="top-info"><span>Wednesday</span></div>
                <ul className='col-2'> 
                </ul>
              </li>

              <li className="events-group">
                <div className="top-info"><span>Thursday</span></div>
                <ul></ul>
              </li>

              <li className="events-group">
                <div className="top-info"><span>Friday</span></div>
                <ul></ul>
              </li>

              <li className="events-group">
                <div className="top-info"><span>Saturday</span></div>
                <ul></ul>
              </li>
            </ul>
          </div>

          <div className="event-modal">
            <header className="header">
              <div className="content">
                <span className="event-date"></span>
                {/* <h3 className="event-name"></h3> */}
              </div>

              <div className="header-bg"></div>
            </header>

            <div className="body">
              <div className="event-info"></div>
              <div className="body-bg"></div>
            </div>

            <a href="#0" className="close">Close</a>
          </div>

          <div className="cover-layer"></div>
        </div>

      </div>
    );
  }
}

export default App;
