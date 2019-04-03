import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import CarLists from './CarDB'
import DriverLists from './DriversDB'
import DriverCard from './DriverCard';
import CarCard from './CarCard';
import ModalCheckIn from './ModalCheckIn';
import ModalCheckOut from './ModalCheckOut';




export default class Tabs extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            isCheckIn : false,
            currentDriver:''
        };

        // this.toggle1= this.toggle1.bind(this);
        // this.state = {
        //     activeTab: '1',
        //     isCheckOut: false,
        //     currentDriver1: ''

        // };
    }


    checkIn = (driver) => {
        console.log(driver.driver_name)
        this.setState({isCheckIn : !this.state.isCheckIn
            , currentDriver: driver
    })
 
    }


    checkOut = (driver) => {
        this.setState({ isCheckOut: !this.state.isCheckOut
            , currentDriver: driver
    })
}


    toggle=(tab)=> {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    toggle1 = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {

        let checkinform = ''
        if(this.state.isCheckIn){

            checkinform = <ModalCheckIn driver={this.state.currentDriver} key={this.state.currentDriver.driver_id} />
        }

        let checkoutform = ''
        if (this.state.isCheckOut) {

            checkoutform = <ModalCheckOut driver={this.state.currentDriver} key={this.state.currentDriver.driver_id}/>
        }
        
        
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Home
            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Drivers
            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            Cars
            </NavLink>
                    </NavItem>


                </Nav>
                <TabContent activeTab={this.state.activeTab} className='row'>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <h4 className='title'>GARAGE RECORD</h4>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2" >
                        <div > 
                            <DriverCard checkIn={this.checkIn} checkOut={this.checkOut} DriverCard={DriverLists}/>
                        </div>
                        {checkinform}
                    </TabPane>
                    <TabPane tabId="3">
                        <div>
                            <CarCard checkOut={this.checkOut} CarCard={CarLists}/>
                        </div>
                        {checkoutform}
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}
