import React, { Component } from 'react';
import { Container } from 'reactstrap';


export class TopHeader extends Component {
    render() {
        return (
            <div>
                <Container>
                    <ul className="col-12 text-right">
                        <li>
                            +234809940344
                        </li>
                        <li>
                            Suit a9 emab plaza, wuse2, Abuja
                        </li>
                        <li>
                            Products
                        </li>
                    </ul>
                </Container>  
            </div>
        )
    }
}

export default TopHeader
