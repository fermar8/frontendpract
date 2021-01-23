import React from 'react'
import { Link } from 'react-router-dom';
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
            justify-content: space-around;
            background-color: black;
            position: fixed; 
            transform: ${({ open })  => open ? 'translateX(0)' : 'translateX(100%)'};
            top: 0;
            font-family: Gilroy;
            font-size: 30px;
            right: 0;
            height: 100vh;
            width: 100vw;
            padding: 3.5rem 0 0 0;
            transition: transform 0.3s ease-in-out;

            .menu-main {
                display: flex;
                justify-content: space-between;
            }

            .contact {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
            }

            li {
                color: white;
                margin-left: 20px;
            }

            .portfoli {
                text-decoration: line-through;
            }

            .links {
                text-decoration: none;
            }

            .row-div {
                display: flex;
                flex-flow: row nowrap;
            }

            .coming-soon {
                text-align: center;
                color: white;
                margin: 50px 0 0 0;
                font-size: 15px;
                font-style: italic;
                font-family: Montserrat;
            }

            .contact-text {
                color: white;
                padding-left: 10px;
                margin-left: 20px;
                font-size: 10px;
                font-family: Montserrat;
                text-align: left;
            }
`


const RightNav = ({ open, setOpen }) => {

    return (
        <div className="menu-main">
            <Ul  open={open}>
                 <div>
                    <Link className="links" to={'/'} onClick={() => setOpen(!open)}><li>L'agència.</li></Link>
                    
                    <div className="row-div">
                    <Link className="links" onClick={() => setOpen(!open)}><li className="portfoli">Portfoli.</li></Link>
                    <p className="coming-soon">coming soon</p>
                    </div>
                </div>

                <div className="contact">
                    <p className="contact-text">16 Place Cormontaigne, 59000 Lille France</p>
                    <p className="contact-text">+33(0)3 20 88 11 59</p>
                    <p className="contact-text">contact@wokine.com</p>
                </div>

            </Ul>
        </div>
    )
}

export default RightNav;
