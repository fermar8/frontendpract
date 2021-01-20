import React, {useEffect} from 'react'
import './../styles/QuienesSomos.css'
import './../styles/Home.css'
import './../styles/ThePage.css'
import Aos from 'aos';
import 'aos/dist/aos.css';


function About () {

        useEffect(() => {
            Aos.init({ duration: 2000 });
        }, []);


        return(
        <div className='the-page'>
            <div className="grids">
                <div id="homePage">
                    <div className="left-div"><p className="text-left">HO</p></div>
                    <div className="right-div"><p className="text-right">LA</p></div>
                </div>
                <div className="boxes">
                    <h1 className="quien-title">Quiénes Somos</h1>
                    <p className="quien-text">“LOGO is a digital agency and a young start up studio” </p>
                </div>
            </div>
        </div>
        )
    }


export default About