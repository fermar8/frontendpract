import React, { Component } from 'react';
import styled from 'styled-components';
import Burger from './Burger'

const Nav = styled.nav`
    width: 100vw;
    height: 55px;
    display: flex;
    justify-content: space-between;

    .logo {
        font-family: Gilroy;
        padding: 15px 0 0 15px;
        font-size: 30px;
        color: white;
    }
`
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarShowing: true,
            menuShowing: false
        }
    }

    render () {
        return (
            <Nav>
                <div className = "logo">
                    LOGO
                </div>
                <Burger />
            </Nav>
        )
    }
}

export default Navbar;