import React, {useEffect, useState} from 'react';

import './../styles/QuienesSomos.css';
import './../styles/Home.css';
import './../styles/QuePage.css';
import './../styles/Other.css';
import Aos from 'aos';
import 'aos/dist/aos.css';


function Home () {

        useEffect(() => {
            Aos.init({ debounceDelay: 50, duration: 1000, once: false, mirror: true, });
        }, []);



        return(
            <div className="grids">
                <span id='home'>&nbsp;</span>
                <br></br>
                <div id="#trigger-view" data-aos-anchor="#trigger-view" className="homePage">
                    <div id ="trigger-view" data-aos="zoom-in" className="left-div"><p className="text-left">HO</p></div>
                    <div id ="trigger-view" data-aos="zoom-in" className="right-div"><p className="text-right">LA</p></div>
                </div>
                <div id="about" data-aos="zoom-in" className="quien-page">
                    <h1 className="quien-title">Quiénes Somos</h1>
                    <p className="quien-text">“LOGO is a digital agency and a young start up studio” </p>
                </div>
                <span id="oferta">&nbsp;</span>
                <br></br>
                <div className="que-page" data-aos="zoom-in">
                        <h1 className="que-title">Qué ofrecemos</h1>
                    <div className="que-row">
                        <p className="que-text">We’re not afraid to admit it - Crafton owes success to its team. They are the driving force behind each and every project that we deliver. Our passion to cutting edge technology and great design brings us together and motivates us to work harder with each passing day. </p>
                        <div className="que-color"></div>
                    </div>
                </div>

                <div className="other-pages">

                <span id="design" >&nbsp;</span>
                <br></br>
                <br></br>

                  <div className="other-design" data-aos="zoom-in">
                    <h1 className="other-title">Design</h1>
                    <p className="other-text">Web Design</p>
                    <p className="other-text">Art Direction</p>
                    <p className="other-text">Logo&Brand</p>
                    <p className="other-text">UI&UX</p>
                  </div>

                    <span id="development">&nbsp;</span>
                    <br></br>
                  <div className="other-development" data-aos="zoom-in">
                    <h1 className="other-title">Development</h1>
                    <p className="other-text">Front & Back</p>
                    <p className="other-text">Interaction design</p>
                    <p className="other-text">Wordpress</p>
                    <p className="other-text">e-Commerce</p>
                  </div>

                    <span id="marketing">&nbsp;</span>
                    <br></br>
                  <div className="other-marketing" data-aos="zoom-in">
                    <h1 className="other-title">Webmarketing</h1>
                    <p className="other-text">Estrategia Xarxes Socials</p>
                    <p className="other-text">Community Management</p>
                    <p className="other-text">Reporting live event</p>
                    <p className="other-text">Emailing</p>
                   </div>
                </div>
            </div>
        )
    }

    export default Home;