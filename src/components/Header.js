import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar className="p-4" color="light" light expand="md">
            <NavbarBrand href="/">Logo</NavbarBrand>
            <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="m-auto font-weight-bolder" navbar>
                        <NavItem>
                            <NavLink href="/Home/" className="p-4 text-dark">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Services/" className="p-4 text-dark">Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Gallery/" className="p-4 text-dark">Gallery</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/News/" className="p-4 text-dark">News</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Pages/" className="p-4 text-dark">Pages</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Elements/" className="p-4 text-dark">Elements</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
        </Navbar>
    );
}

export default Header;
