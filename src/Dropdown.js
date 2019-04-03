// import React from 'react';
// import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// export default class Dropdriver extends React.Component {
//     constructor(props) {
//         super(props);

//         this.toggle = this.toggle.bind(this);
//         this.state = {
//             dropdownOpen: false
//         };
//     }

//     toggle() {
//         this.setState({
//             dropdownOpen: !this.state.dropdownOpen
//         });
//     }

//     render() {


//         const Drivers = this.props.DriversDB.map((driver, index) => {
//             console.log(driver)
//             return <DropdownItem> {driver.driver_name} </DropdownItem>
//         })


//         return (
//             <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
//                 <DropdownToggle caret>
//                 Driver      
//                   </DropdownToggle>
//                 <DropdownMenu>
//                     {Drivers}


//                 </DropdownMenu>
//             </ButtonDropdown>
//         );
//     }
// }