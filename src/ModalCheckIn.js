import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CheckInForm from './CheckInForm'

class ModalCheckIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                    toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.props.driver.driver_name}  fill out your "CHECK IN" form below: </ModalHeader>
                    <ModalBody>
                        <CheckInForm driverName={this.props.driver.driver_name}toggle={this.toggle} handleSubmit={this.props.submitCheckIn} driver={this.props.driver } key={ this.props.driver.driver_id }/> 
                    </ModalBody>
                    <ModalFooter>
                        
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalCheckIn;

//connect onclick 