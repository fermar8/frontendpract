import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { DarkNav } from '../styles/navbar-styles/DarkNav';
import { DarkBurger } from '../styles/navbar-styles/DarkBurger';
import { DarkUl } from '../styles/navbar-styles/DarkUl';
import { LightNav } from '../styles/navbar-styles/LightNav';
import { LightBurger } from '../styles/navbar-styles/LightBurger';
import { LightUl } from '../styles/navbar-styles/LightUl';

import { DarkSelectedBtn } from '../styles/elements/DarkSelectedBtn';
import { DarkBtn } from '../styles/elements/DarkBtn';
import { LightSelectedBtn } from '../styles/elements/LightSelectedBtn';
import { LightBtn } from '../styles/elements/LightBtn';



function Navbar (props) {

    const [open, setOpen] = useState(false);

    // ternary o && 

    let content = {
        Spanish: {
            agencia: 'La agencia.',
            portfoli: 'Portfolio.',
            proximament: 'próximamente',
            contacte: 'Contacto.',
            temaClar: 'Tema Claro',
            temaFosc: 'Tema Oscuro'
        },

        Catalan: {
            agencia: "L'agència.",
            portfoli: 'Portfoli.',
            proximament: 'pròximament',
            contacte: 'Contacte.',
            temaClar: 'Tema Clar',
            temaFosc: 'Tema Fosc'
        },

        English: {
            agencia: "The agency.",
            portfoli: 'Portfolio.',
            proximament: 'coming soon',
            contacte: 'Contact.',
            temaClar: 'Light Mode',
            temaFosc: 'Dark Mode'
        }
    };

    let theme = {
        dark: {
            nav: DarkNav,
            ul: DarkUl, 
            burger: DarkBurger
        },
        
        light: {
            nav: LightNav,
            ul: LightUl,
            burger: LightBurger
        }
    }

    let engBtn = {
        dark: {
            btn: DarkBtn
        },
        darkEnglishSel: {
            btn: DarkSelectedBtn
        },
        light: {
            btn: LightBtn
        },
        lightEnglishSel: {
            btn: LightSelectedBtn
        }

    }

    let espBtn = {
        dark: {
            btn: DarkBtn
        },
        darkEspSel: {
            btn: DarkSelectedBtn
        },
        light: {
            btn: LightBtn
        },
        lightEspSel: {
            btn: LightSelectedBtn
        }
    }

    let catBtn = {
        dark: {
            btn: DarkBtn
        },
        darkCatSel: {
            btn: DarkSelectedBtn
        },
        light: {
            btn: LightBtn
        },
        lightCatSel: {
            btn: LightSelectedBtn
        }
    }

 //handle language for navbar
    if (props.language === 'Catalan') {
        content = content.Catalan;
    } else if (props.language === 'Spanish') {
        content = content.Spanish;
    } else {
        content = content.English;
    };

 //handle themes

    if (props.theme === 'Dark') {
        theme = theme.dark;
    } else {
        theme = theme.light;
    };

 //handle English buttons
    if (props.theme === 'Dark' && props.language === 'English') {
        engBtn = engBtn.darkEnglishSel;
    } else if (props.theme === 'Dark' && props.language !== 'English') {
        engBtn = engBtn.dark;
    } else if (props.theme === 'Light' && props.language === 'English') {
        engBtn = engBtn.lightEnglishSel;
    } else {
        engBtn = engBtn.light;
    };

 //handle Spanish buttons

    if (props.theme === 'Dark' && props.language === 'Spanish') {
        espBtn = espBtn.darkEspSel
    } else if (props.theme === 'Dark' && props.language !== 'Spanish') {
        espBtn = espBtn.dark;
    } else if (props.theme === 'Light' && props.language === 'Spanish') {
        espBtn = espBtn.lightEspSel;
    } else {
        espBtn = espBtn.light;
    };

 //handle Catalan buttons
    if (props.theme === 'Dark' && props.language === 'Catalan') {
        catBtn = catBtn.darkCatSel
    } else if (props.theme === 'Dark' && props.language !== 'Catalan') {
        catBtn = catBtn.dark;
    } else if (props.theme === 'Light' && props.language === 'Catalan') {
        catBtn = catBtn.lightCatSel;
    } else {
        catBtn = catBtn.light;
    };

        return (
            <theme.nav>
                <div className = "logo">
                &nbsp;ON&nbsp;
                </div> 
              <div className="lang-and-burger">
                <div className="lang">
                    <engBtn.btn className="lang-btn" value='English' onClick={e => props.handleSetLanguage(e.target.value)}>EN</engBtn.btn>
                    <p>/</p>
                    <espBtn.btn className="lang-btn" value='Spanish' onClick={e => props.handleSetLanguage(e.target.value)} >ES</espBtn.btn>
                    <p>/</p>
                    <catBtn.btn className="lang-btn" value='Catalan' onClick={e => props.handleSetLanguage(e.target.value)}>CAT</catBtn.btn>
                </div>
                <theme.burger open={open} onClick={() => setOpen(!open)}>
                    <div/>
                    <div/>
                    <div/>  
                </theme.burger>
               </div>

                <div className="menu-main">
            <theme.ul  open={open}>
                 <div className="links-group">
                    <Link className="links" to={'/'} onClick={() => setOpen(!open)}><li>{content.agencia}</li></Link>

                    <Link className="links" to={'/contact'} onClick={() => setOpen(!open)}><li>{content.contacte}</li> </Link>
                    
                    <div className="row-div">
                    <Link className="links" to={'/contact'} onClick={() => setOpen(!open)}><li className="portfoli">{content.portfoli}</li></Link>
                    <p className="coming-soon">{content.proximament}</p>
                  </div>

                    

                  {props.theme === 'Dark' ? 
                  <button className="theme-option-dark" value="Light" onClick={e => props.handleSetTheme(e.target.value)}>Go to Light Mode &#xf185;</button>
 : <button className="theme-option-light" value="Dark" onClick={e => props.handleSetTheme(e.target.value)}>Go to Dark Mode &#xf186;</button>}                

                   
                </div>

                <div className="contact">
                    <p className="contact-text">16 Place Cormontaigne, 59000 Lille France</p>
                    <p className="contact-text">+33(0)3 20 88 11 59</p>
                    <p className="contact-text">contact@wokine.com</p>
                </div>

            </theme.ul>
        </div>
            </theme.nav>
        )
    
    }

export default Navbar;