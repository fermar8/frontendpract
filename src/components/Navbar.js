import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './../styles/NavbarNav';
import { StyledBurger } from './../styles/NavbarBurger';
import { Ul } from './../styles/NavbarUl';


function Navbar (props) {

    const [open, setOpen] = useState(false);

    let content = {
        Spanish: {
            agencia: 'La agencia.',
            portfoli: 'Portfolio.',
            proximament: 'próximamente'
        },

        Catalan: {
            agencia: "L'agència.",
            portfoli: 'Portfoli.',
            proximament: 'pròximament'
        },

        English: {
            agencia: "The agency.",
            portfoli: 'Portfolio.',
            proximament: 'coming soon'
        }
    };

    if (props.language === 'Catalan') {
        content = content.Catalan;
    } else if (props.language === 'Spanish') {
        content = content.Spanish;
    } else {
        content = content.English;
    }


        return (
            <Nav>
                <div className = "logo">
                    LOGO
                </div>
                <StyledBurger open={open} onClick={() => setOpen(!open)}>
                    <div/>
                    <div/>
                    <div/>  
                </StyledBurger>
                <div className="menu-main">
            <Ul  open={open}>
                 <div>
                    <Link className="links" to={'/'} onClick={() => setOpen(!open)}><li>{content.agencia}</li></Link>
                    
                    <div className="row-div">
                    <Link className="links" to={'/contact'} onClick={() => setOpen(!open)}><li className="portfoli">{content.portfoli}</li></Link>
                    <p className="coming-soon">{content.proximament}</p>
                    </div>

                    <select
                    className="custom-select"
                    value={props.language}
                    onChange={e => props.handleSetLanguage(e.target.value)}
                    >
                        <option value="Catalan">Catalan</option>
                        <option value="Spanish">Spanish</option>
                        <option value="English">English</option>
                    </select>


                </div>

                <div className="contact">
                    <p className="contact-text">16 Place Cormontaigne, 59000 Lille France</p>
                    <p className="contact-text">+33(0)3 20 88 11 59</p>
                    <p className="contact-text">contact@wokine.com</p>
                </div>

            </Ul>
        </div>
            </Nav>
        )
    
    }

export default Navbar;