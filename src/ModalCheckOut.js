import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CheckOutForm from './CheckOutForm'

class ModalCheckOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true
        };

        this.toggle1 = this.toggle1.bind(this);
    }

    toggle1() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                    toggle={this.toggle1} className={this.props.className}>
                    <ModalHeader toggle={this.toggle1}>{this.props.driver.driver_name} fill out your "CHECK OUT" form below: </ModalHeader>
                    <ModalBody>
                        <CheckOutForm toggle={this.toggle1} handleSubmit={this.props.submitCheckOut} driver={this.props.driver} key={this.props.driver.driver_id}/>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalCheckOut;