import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Col ,Row} from 'reactstrap';


class CarCard extends Component {
    constructor(props) {
        super()
    }

    // clicked1 = () => {
    //     this.props.checkOut()
    // }

    render() {
        
        const Cars = this.props.CarCard.map((car, index) => {

            return <div sm="3" >
                <div className='container'>
                <Card body>
                        <CardTitle>{car.car_name}</CardTitle>
                    <img src={car.car_photo} alt='car photo' height="150" width="150" />
                    {/* <Button onClick={this.clicked1}>Add Activity</Button> */}
                </Card>
                </div>
            </div>
        })
        return (
            <div className='row1'>{Cars}</div>
        )
    }
}

export default CarCard;