import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, 
    Container} from 'reactstrap';

class AppNavBar extends Component {
//     constructor(props) {                            // we dont actually need a constructor as no bindings are there and we can define states outside also
//         super(props);
//   //      this.toggle = this.toggle.bind(this)      // this binding is not needed when => func is used

//         this.state = {
//             isOpen: false
//         }

//     }
    state = {
        isOpen: false
    }
    
    toggle = () => {                                  // Custom methods no need to bind
        this.setState({
            isOpen: !this.state.isOpen
    });
    }

    render() {

        return(
        <div>
            <Navbar color='dark' dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Shopping List</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar >
                        <Nav className="ml-auto" navbar >
                            <NavItem>
                                <NavLink href="https://github.com/dibyo007dev"> Github </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>

            </Navbar>
        </div>
        );
    }


}


export default AppNavBar;