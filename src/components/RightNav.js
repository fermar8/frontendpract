import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

const Ul = styled.ul`
        list-style: none;
        display: flex;
        flew-flow: row nowrap;
        
        li {
            padding: 18px 10px;
        }

        @media (max-width: 768px) {
            flex-flow: column nowrap;
            background-color: black;
            position: fixed; 
            transform: ${({ open })  => open ? 'translateX(0)' : 'translateX(100%)'};
            top: 0;
            right: 0;
            height: 100vh;
            width: 100vw;
            padding: 3.5rem 0 0 0;
            transition: transform 0.3s ease-in-out;

            li {
                color: white;
            }
`


const RightNav = ({ open, setOpen }) => {

    return (
        <div>
            <Ul  open={open}>
                    <Link onClick={() => setOpen(!open)} smooth to={'/#home'}><li>Home.</li></Link>
                    
                    <Link onClick={() => setOpen(!open)} smooth to={'/#about'}><li>Quiénes Somos.</li></Link>

                    <Link onClick={() => setOpen(!open)} smooth to={'/#oferta'}><li>Qué ofrecemos.</li></Link>

                    <Link onClick={() => setOpen(!open)} smooth to={'/#services'}><li>Servicios.</li></Link>
                </Ul>
        </div>
    )
}

export default RightNav;
