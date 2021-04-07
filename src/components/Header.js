import React, { Component } from 'react';
import { Container } from 'reactstrap';

export class Header extends Component {
    render() {
        return (
            <div>
                <Container>
                    <header className="d-flex justify-content-center py-3">
                        <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                            <svg className="bi me-2" width="40" height="32"></svg>
                        </a>
                        <ul className="nav nav-pills">
                            <li className="nav-item"><a href="/" className="nav-link active text-dark">Home</a></li>
                            <li className="nav-item"><a href="/features" className="nav-link text-dark">Services</a></li>
                            <li className="nav-item"><a href="/pricing" className="nav-link text-dark">Gallery</a></li>
                            <li className="nav-item"><a href="/faqs" className="nav-link text-dark">News</a></li>
                            <li className="nav-item"><a href="/pages" className="nav-link text-dark">Pages</a></li>
                            <li className="nav-item"><a href="/elements" className="nav-link text-dark">Elements</a></li>
                        </ul>
                    </header>
                </Container>
            </div>
        )
    }
}

export default Header
