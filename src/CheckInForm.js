import React from 'react';
import { CustomInput, Form, FormGroup, Label, Input } from 'reactstrap';
import DriverLists from './DriversDB';
import CarLists from './CarDB';

export default class CheckInForm extends React.Component {


    getCurrentDate() {
let tempDate = new Date();
let date = "Date: "+tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate() + ' ' + "  Time: "+ tempDate.getHours() + ':' + tempDate.getMinutes();
return date;
    }
    
    render() {
      
        const Drivers = DriverLists.map((driver, index) => {
            return <option>{driver.driver_name}</option>
       })
        const Cars = CarLists.map((car, index) => {
            return <option>{car.car_name}</option>
        })

    return(
        <Form>

            <FormGroup>
                <Label for="exampleCustomSelect">Car Taken</Label>
                <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
                    <option value="">Select</option>
                 {Cars}

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
                    <CustomInput type="radio" id="exampleCustomRadio6" name="customRadio" label="Very Clean" />
                    <CustomInput type="radio" id="exampleCustomRadio7" name="customRadio" label="Clean" />
                    <CustomInput type="radio" id="exampleCustomRadio8" name="customRadio" label="Dirty" />
                    <CustomInput type="radio" id="exampleCustomRadio9" name="customRadio" label="Very Dirty" />
                </div>
            </FormGroup>
        </Form>
        );
    }
}
