import React, { Component } from 'react';


class Driver extends Component {
    render() {

        return (
            <div>{this.props.DriversDB.id}</div>

        )
    }
}

export default Driver;