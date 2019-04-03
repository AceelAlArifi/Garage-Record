import React from 'react';
import { CustomInput, Form, FormGroup, Label, Input } from 'reactstrap';
import DriverLists from './DriversDB';
import CarLists from './CarDB';


export default class CheckOutForm extends React.Component {

    state = {
        carName: '', fuel: '', clean: '', datetime: '', count: 0
    }

    getCurrentDate() {
        let tempDate = new Date();
        let date = "Date: " + tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate() + ' ' + "  Time: " + tempDate.getHours() + ':' + tempDate.getMinutes();
        return date;
    }

    handleChange = (e) => {
        // console.log("****",e.target.value);

        this.setState({ carName: e.target.value })
    }


    handleFuelChange = (e) => {
        // console.log("****", e.target.value);

        this.setState({ fuel: e.target.value })
    }

    handleCleanChange = (e) => {
        // console.log("****", e.target.value);

        this.setState({ clean: e.target.value })
    }

    handleSubmit = () => {
        // const newState = {...this.state}
        let tempDate = new Date();
        const end = `${tempDate.getFullYear()}-${tempDate.getMonth()}-${tempDate.getDate()}T${tempDate.getHours()}:${tempDate.getMinutes()}:00Z`
        // const event = { title: `checkin ${this.state.carName}`, start: tempDate }
        console.log(end);
        console.log(this.state.count);

        // this.setState({newState})
        console.log(this.state);
        console.log(this.props);
        // this.props.handleSubmit(event)
        this.props.toggle()

        console.log(this.props);

    }


    render() {

        const Drivers = DriverLists.map((driver, index) => {
            return <option>{driver.driver_name}</option>
        })
        const Cars = CarLists.map((car, index) => {
            return <option>{car.car_name}</option>
        })

        return (
            <Form>

                {/* <FormGroup>
                    <Label for="exampleCustomSelect">Driver Name</Label>
                    <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
                        <option value="">Select</option>
                        {Drivers}
                    </CustomInput>
                </FormGroup> */}

                <FormGroup>
                    <Label for="exampleCustomSelect">Car Returned</Label>
                    <CustomInput onChange={this.handleChange} type="select" id="exampleCustomSelect" name="customSelect">
                        <option value="">Select</option>
                        {Cars}
                    </CustomInput>
                </FormGroup>

                <FormGroup>
                    <Label for="exampleCustomSelect">Handeled To</Label>
                    <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
                        <option value="">Select</option>
                        {Drivers}
                    </CustomInput>
                </FormGroup>

                <FormGroup>
                    <Label for="exampleDatetime">{this.getCurrentDate()}</Label>
                </FormGroup>


                <FormGroup>
                    <Label for="exampleCheckbox">Fuel Amount</Label>
                    <div>
                        <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Full" />
                        <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="3/4" />
                        <CustomInput type="radio" id="exampleCustomRadio3" name="customRadio" label="Half" />
                        <CustomInput type="radio" id="exampleCustomRadio4" name="customRadio" label="1/4" />
                        <CustomInput type="radio" id="exampleCustomRadio5" name="customRadio" label="Empty" />
                    </div>
                </FormGroup>

                <FormGroup>
                    <Label for="exampleCheckbox1">Cleanliness</Label>
                    <div>
                        <CustomInput type="radio" id="exampleCustomRadio6" label="Very Clean" inline />
                        <CustomInput type="radio" id="exampleCustomRadio7" label="Clean" inline />
                        <CustomInput type="radio" id="exampleCustomRadio8" label="Dirty" inline />
                        <CustomInput type="radio" id="exampleCustomRadio9" label="Very Dirty" inline />

                    </div>
                </FormGroup>
            </Form>
        );
    }
}
