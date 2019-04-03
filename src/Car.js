import React, { Component } from 'react';


class Car extends Component {
    render() {

        return (
            <div>{this.props.CarDB.id}</div>

        )
    }
}

export default Car;