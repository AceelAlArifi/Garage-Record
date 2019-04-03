import React, { Component } from 'react';
import {  Card, Button, CardTitle, CardText, Col,Row } from 'reactstrap';

class DriverCard extends Component {
constructor(props){
    super()
}
    clicked = (driver) => {
        this.props.checkIn(driver)  
    }
    clicked1 = (driver) => {
        this.props.checkOut(driver)
    }

    render() {
        
        const Drivers = this.props.DriverCard.map((driver, index) => {

            return <row sm="3">
                <div className="container" >
                <Card body >
                        <CardTitle>{driver.driver_name}</CardTitle>
                        <Button onClick={() => { this.clicked(driver) }}>CHECK IN</Button>
                    <img src={driver.driver_photo} alt='driver photo' height="150" width="150"/>
                        <Button onClick={() => { this.clicked1(driver) }}>CHECK OUT</Button>

                </Card>
                </div>
            </row> 
        })
        return (
            <div className='row1'>{Drivers}</div>
        )
    }
}

export default DriverCard;