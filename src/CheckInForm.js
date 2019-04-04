import React from 'react';
import { Button, CustomInput, Form, FormGroup, Label } from 'reactstrap';
import DriverLists from './DriversDB';
import CarLists from './CarDB';

export default class CheckInForm extends React.Component {


    state = {
        carName: '',fuel:'',clean:'', datetime: '', count: 0
    }

    getCurrentDate() {
let tempDate = new Date();
let date = "Date: "+tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate() + ' ' + "  Time: "+ tempDate.getHours() + ':' + tempDate.getMinutes();
return date;
    }

    handleChange=(e)=>{
// console.log("****",e.target.value);

        this.setState({ carName: e.target.value})
    }


    handleFuelChange = (e) => {
        // console.log("****", e.target.value);

        this.setState({ fuel: e.target.value })
    }

    handleCleanChange = (e) => {
        // console.log("****", e.target.value);

        this.setState({ clean: e.target.value  })
    }

    handleSubmit=()=>{
        // const newState = {...this.state}
        let tempDate = new Date();
        const start = `${tempDate.getFullYear()}-${tempDate.getMonth()}-${tempDate.getDate()}T${tempDate.getHours()}:${tempDate.getMinutes()}:00Z`
        const event = { title: `Car taken: ${this.state.carName} Taken by: ${this.props.driverName} Fuel status: ${this.state.fuel} Cleanliness: ${this.state.clean} `, start: tempDate}
        console.log(start);
        this.state.count+=1
        console.log(this.state.count);
        
        // this.setState({newState})
        console.log(this.state);
        console.log(this.props);
        this.props.handleSubmit(event)
        this.props.toggle()

        console.log(this.props);
        
    }

    render() {
      
        const Drivers = DriverLists.map((driver, index) => {
            return <option>{driver.driver_name}</option>
       })
        const Cars = CarLists.map((car, index) => {
            return <option value={car.car_name}>{car.car_name}</option>
        })

    return(
        <Form>

            <FormGroup>
                <Label for="exampleCustomSelect">Car Taken</Label>
                <CustomInput onChange={this.handleChange} type="select" id="exampleCustomSelect" name="customSelect">
                    <option value="">Select</option>
                 {Cars}

                </CustomInput>
            </FormGroup>

            <FormGroup>
                <Label for="exampleDatetime">{this.getCurrentDate()}</Label>
            </FormGroup>


            <FormGroup>
                <Label for="exampleCheckbox">Fuel Amount</Label>
                <div >
                    <CustomInput onChange={this.handleFuelChange} value='Full' type="radio" id="exampleCustomRadio" name="customRadio" label="Full" />
                    <CustomInput onChange={this.handleFuelChange} value='3/4' type="radio" id="exampleCustomRadio2" name="customRadio" label="3/4" />
                    <CustomInput onChange={this.handleFuelChange} value='Half' type="radio" id="exampleCustomRadio3" name="customRadio" label="Half" />
                    <CustomInput onChange={this.handleFuelChange} value='1/4' type="radio" id="exampleCustomRadio4" name="customRadio" label="1/4" />
                    <CustomInput onChange={this.handleFuelChange} value='Empty' type="radio" id="exampleCustomRadio5" name="customRadio" label="Empty" />
                </div>
            </FormGroup>


            <FormGroup>
                <Label for="exampleCheckbox1">Cleanliness</Label>
                <div>
                    <CustomInput onChange={this.handleCleanChange} value='Very Clean' type="radio" id="exampleCustomRadio6" name="customRadio2" label="Very Clean" />
                    <CustomInput onChange={this.handleCleanChange} value='Clean' type="radio" id="exampleCustomRadio7" name="customRadio2" label="Clean" />
                    <CustomInput onChange={this.handleCleanChange} value='Dirty' type="radio" id="exampleCustomRadio8" name="customRadio2" label="Dirty" />
                    <CustomInput onChange={this.handleCleanChange} value='Very Dirty' type="radio" id="exampleCustomRadio9" name="customRadio2" label="Very Dirty" />
                </div>
            </FormGroup>
            <Button color="primary" onClick={this.handleSubmit}>Submit form</Button>{'  '}
            <Button color="secondary" onSubmit={this.toggle}>Cancel</Button>
        </Form>
        );
    }
}
