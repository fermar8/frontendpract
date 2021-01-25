import React, { Fragment, useEffect } from 'react';

import { DarkHome } from './../styles/dark/DarkHome';
import { DarkQuien } from './../styles/dark/DarkQuien';
import { DarkQue } from './../styles/dark/DarkQue';
import { DarkOther } from './../styles/dark/DarkOther';
import { DarkFooter } from './../styles/dark/DarkFooter';

import { LightQue } from './../styles/light/LightQue';
import { LightHome } from './../styles/light/LightHome';
import { LightQuien } from './../styles/light/LightQuien';
import { LightOther } from './../styles/light/LightOther';
import { LightFooter } from './../styles/light/LightFooter';


import Aos from 'aos';
import 'aos/dist/aos.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Home (props) {

    console.log(props)

    let content = {
        Catalan: {
            text: 'algo en català'
        },
        Spanish: {
            text: 'algo en español'
        },
        English: {
            text: 'something in English'
        }
    }

    let theme = {
        dark: {
            home: DarkHome,
            quien: DarkQuien,
            que: DarkQue,
            other: DarkOther,
            footer: DarkFooter
        },

        light: {
            home: LightHome,  
            quien: LightQuien,
            que: LightQue,
            other: LightOther,
            footer: LightFooter
        }
    }

    if (props.language === 'Catalan') {
        content = content.Catalan;
    } else if (props.language === 'Spanish') {
        content = content.Spanish;
    } else {
        content = content.English;
    }

    if (props.theme === 'Dark') {
        theme = theme.dark;
    } else {
        theme = theme.light;
    }

        useEffect(() => {
            Aos.init({ debounceDelay: 50, duration: 1000, once: false, mirror: true, });
        }, []);

        return(
        <Fragment>
            <div className="grids">
              <theme.home>
                <div id="#trigger-view" data-aos-anchor="#trigger-view" className="homePage">
                    <div id ="trigger-view" data-aos="zoom-in" className="left-div"><p className="text-left">HO</p></div>
                    <div id ="trigger-view" data-aos="zoom-in" className="right-div"><p className="text-right">LA</p></div>
                </div>
              </theme.home>
              <theme.quien>
                <div id="about" data-aos="zoom-in" className="quien-page">
                    <h1 className="quien-title">Quiénes Somos</h1>
                    <p className="quien-text">{content.text} </p>
                </div>
              </theme.quien>
              <theme.que>
                <div className="que-page" data-aos="zoom-in">
                        <h1 className="que-title">Qué ofrecemos</h1>
                        <p className="que-text">We’re not afraid to admit it - Crafton owes success to its team. They are the driving force behind each and every project that we deliver. Our passion to cutting edge technology and great design brings us together and motivates us to work harder with each passing day. </p>
                    
                </div>
              </theme.que>
              <theme.other>
                <div className="other-pages">
                
                  <div className="other-design" data-aos="zoom-in">
                    <h1 className="other-title">Design</h1>
                    <p className="other-text">Web Design</p>
                    <p className="other-text">Art Direction</p>
                    <p className="other-text">Logo&Brand</p>
                    <p className="other-text">UI&UX</p>
                  </div>

                  <div className="other-development" data-aos="zoom-in">
                    <h1 className="other-title">Development</h1>
                    <p className="other-text">Front & Back</p>
                    <p className="other-text">Interaction design</p>
                    <p className="other-text">Wordpress</p>
                    <p className="other-text">e-Commerce</p>
                  </div>

                  <div className="other-marketing" data-aos="zoom-in">
                    <h1 className="other-title">Webmarketing</h1>
                    <p className="other-text">Estrategia Xarxes Socials</p>
                    <p className="other-text">Community Management</p>
                    <p className="other-text">Reporting live event</p>
                    <p className="other-text">Emailing</p>
                   </div>
                </div>
              </theme.other>
              <theme.footer>
                  <div className="footer">
                    <button className="footer-button"><h1 className="footer-title"> CONTÁCTANOS </h1><MailOutlineIcon fontSize="large"/></button>
                    <div className="footer-contact">
                        <p className="footer-text">16 Place Cormontaigne, 59000 Lille France</p>
                        <p className="footer-text">+33(0)3 20 88 11 59</p>
                        <p className="footer-text">contact@wokine.com</p>
                   </div>
                </div>
              </theme.footer>
            </div>
        </Fragment>
        )
    }

    export default Home;