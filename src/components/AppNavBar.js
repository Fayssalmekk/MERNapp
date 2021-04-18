import React, { Component, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppNavBar extends Component {
    state = { 
        isOpen : false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


render(){
    return (
        <div>
        <Navbar color="dark" dark>
            <Container>
                <NavbarBrand href="/" className="mr-auto">ShoppingList</NavbarBrand>
                <NavbarToggler onClick={this.toggle} className="mr-2" />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                    <NavItem>
                    <NavLink href="/http://www.Google.com">Google</NavLink>
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