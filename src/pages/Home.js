import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import  imgPastisseria  from '../images/image-1.png'


import { DarkHome } from './../styles/dark/DarkHome';
import { DarkQuien } from './../styles/dark/DarkQuien';
import { DarkQue } from './../styles/dark/DarkQue';
import { DarkFooter } from './../styles/dark/DarkFooter';


import { LightQue } from './../styles/light/LightQue';
import { LightHome } from './../styles/light/LightHome';
import { LightQuien } from './../styles/light/LightQuien';
import { LightFooter } from './../styles/light/LightFooter';



import Aos from 'aos';
import 'aos/dist/aos.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Home (props) {

    let content = {
        Catalan: {
            homeTitle: "Benvingut a Online.com",
            homeText: "Online és una agència digital i un jove estudi start up situat a Barcelona.",
            homeText2: "Podem disenyar i programar la teva web en pocs dies i a un preu que s'ajusti a les teves necessitats.",
            homeProjectes: "Veure els nostres projectes",
            homeCallToAction: "Necessites crear ja la teva pàgina? Escriu-nos i et contestarem en menys de 24 hores.",
          

            quienTitle: 'Qui Som',
            quienText: 'Online és una agència digital i un jove estudi start up. Ens dediquem a la creació i programació de pàgines web funcionals i amb un disseny únic. La nostra passió per la tecnologia i per el disseny ens motiva a traballar dur cada dia.',
            
            queTitle: 'Què oferim',
            queTextOne: "Gràcies al nostre talentos equip podem oferir dissenys únics i personalitzats que serveixen per potenciar la teva marca.",
            queTextTwo: "A més, podem adaptar-nos a les diferents necessitats de cada negoci i treballar amb el nostre propi codi o fer servir eines ja existents com Wordpress.",
            queTextThree: "Finalment, podem ajudar-te a generar major impacte en el món digital gràcies a les nostres campanyes de Webmarketing.",

            designTitle: "Disseny",
            designTextOne: "Disseny Web",
            designTextTwo: "Logo i Marca",
            designTextThree: "UI i UX",

            devTitle: "Desenvolupament",
            devTextOne: "Front i Back",
            devTextTwo: "Wordpress",
            devTextThree: "Comerç Electrònic",

            markTitle: "Màrqueting Web",
            markTextOne: "Xarxes Socials",
            markTextTwo: "Gestor De Comunitats",
            markTextThree: "Seguiment d'Esdeveniments",


            contact: "CONTACTA'NS"
        },
        Spanish: {
            homeTitle: "Bienvenido a Online.com",
            homeText: "Online es una agencia digital y un joven estudio start up situado en Barcelona. ",
            homeText2: "Podemos diseñar y programar tu web en pocos días y a un precio que se ajuste a tus necesidades.",
            homeProjectes: "Ver nuestros proyectos",
            homeCallToAction: "¿Necesitas crear tu página ya? Escríbenos y te responderemos antes de 24 horas.",

            quienTitle: 'Quiénes Somos',
            quienText: 'Online es una agencia digital y un joven estudio start up. Nos dedicamos a la creación y programación de páginas web funcionales y con un diseño único. Nuestra pasión por la tecnología y por el diseño nos motiva a trabajar duro cada día.',
            
            queTitle: 'Qué ofrecemos',
            queTextOne: "Gracias a nuestro talentoso equipo podemos ofrecer diseños únicos y personalizados que sirven para potenciar tu marca.",
            queTextTwo: "Además, podemos adaptarnos a las diferentes necesidades de cada negocio y trabajar con nuestro própio código o utilizar herramientas ya existentes como Wordpress.",
            queTextThree: "Finalmente, podemos ayudarte a generar mayor impacto en el mundo digital gracias a nuestras campañas de Webmarketing.",
            
            designTitle: "Diseño",
            designTextOne: "Diseño Web",
            designTextTwo: "Logo y Marca",
            designTextThree: "UI y UX",

            devTitle: "Desarrollo",
            devTextOne: "Front y Back",
            devTextTwo: "Wordpress",
            devTextThree: "Comercio Electrónico",

            markTitle: "Mercadotecnia Web",
            markTextOne: "Redes Sociales",
            markTextTwo: "Gestión de Comunidades",
            markTextThree: "Seguimiento de Eventos",


            contact: "CONTÁCTANOS"
        },
        English: {
            homeTitle: "Welcome to Online.com",
            homeText: "Online is a digital agency and a young startup based in Barcelona.",
            homeText2: "We can design and develop your web in few days and at a price that matches your needs.",
            homeProjectes: "See our projects",
            homeCallToAction: "Do you need a web page? Contact us and we will get back to you in less than 24 hours.",

            quienTitle: 'About Us',
            quienText: 'Online is a digital agency and a young start up studio. Our services are the creation and programming of functional web pages with a unique design. Our passion for technology and design fuels us to work hard each and every day.',

            queTitle: 'What we offer',
            queTextOne: "Thanks to our talented team we can offer unique and custom designs aimed to elevate your brand.",
            queTextTwo: "Furthermore, we can adapt to different business needs and work with our own code or using existing tools like Wordpress.",
            queTextThree: "Finally, we can help you generate a bigger impact in the digital world thanks to our Webmarketing campaigns.",
            
            designTitle: "Design",
            designTextOne: "Web Design",
            designTextTwo: "Logo&Brand",
            designTextThree: "UI&UX",

            devTitle: "Development",
            devTextOne: "Front & Back",
            devTextTwo: "Wordpress",
            devTextThree: "e-Commerce",

            markTitle: "Webmarketing",
            markTextOne: "Social Media",
            markTextTwo: "Community Management",
            markTextThree: "Reporting Live Events",

            contact: "CONTACT US"
        }
    }

    let theme = {
        dark: {
            home: DarkHome,
            quien: DarkQuien,
            que: DarkQue,
            footer: DarkFooter,  
        },

        light: {
            home: LightHome,  
            quien: LightQuien,
            que: LightQue,
            footer: LightFooter,
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
            <div>
              <theme.home>
              <Container fluid={true} >
              <Row noGutters={true} className="no-margin">
              <Col xs="12" xl="6" style={{padding: 0, margin: 0}}>
                 <div id ="trigger-view" data-aos="zoom-in" className="left-div">
                 <h1 className="title-left">{content.homeTitle}</h1>
                 <p className="text-left">{content.homeText}</p> 
                 <p className="text-left"> {content.homeText2}</p></div>
              </Col>
              <Col xs="12" xl="6" style={{padding: 0, margin: 0}}>
                    <div id ="trigger-view" data-aos="zoom-in" className="right-div">
                    <img className="img-pastisseria" src={imgPastisseria} alt="pastisseria"></img>
                    <Link className="text-right-blue" to={'/portfolio'}>{content.homeProjectes}</Link>
                    <p className="text-right">{content.homeCallToAction}</p>
                    <Link className="home-link" to={'/contact'}>
                      <h1 className="footer-title"> {content.contact}</h1>
                      </Link>
                    </div>
              </Col>
              </Row> 
              </Container>
              </theme.home>
              <theme.quien>
              <Container fluid={true} >
              <Row noGutters={true} >
              <Col xs="12" style={{padding: 0, margin: 0}}>
                <div id="about" data-aos="zoom-in" className="quien-page">
                    <h1 className="quien-title">{content.quienTitle}</h1>
                    <p className="quien-text">{content.quienText} </p>
                </div>
              </Col>
              </Row>
              </Container>
              </theme.quien>
              <theme.que>
              <Container fluid={true}>
              <Row noGutters={true} className="no-margin">
              <Col xs="12" md="8" style={{padding: 0, margin: 0}}>
                <div className="que-page" data-aos="zoom-in">
                        <h1 className="que-title">{content.queTitle}</h1>
                        <p className="que-text">{content.queTextOne}</p>
                        <p className="que-text">{content.queTextTwo}</p>
                        <p className="que-text">{content.queTextThree}</p>
                </div>
              </Col>
              <Col xs="12" md="4" style={{padding: 0, margin: 0}}>
                <div className="other-pages">
                  <div className="top-bot-space"></div>

                  <div className="other-design" data-aos="zoom-in">
                    <h1 className="other-title">{content.designTitle}</h1>
                    <p className="other-text">{content.designTextOne}</p>
                    <p className="other-text">{content.designTextTwo}</p>
                    <p className="other-text">{content.designTextThree}</p>
                  </div>

                  <div className="other-development" data-aos="zoom-in">
                    <h1 className="other-title">{content.devTitle}</h1>
                    <p className="other-text">{content.devTextOne}</p>
                    <p className="other-text">{content.devTextTwo}</p>
                    <p className="other-text">{content.devTextThree}</p>
                  </div>

                  <div className="other-marketing" data-aos="zoom-in">
                    <h1 className="other-title">{content.markTitle}</h1>
                    <p className="other-text">{content.markTextOne}</p>
                    <p className="other-text">{content.markTextTwo}</p>
                    <p className="other-text">{content.markTextThree}</p>
                   </div>

                   <div className="top-bot-space"></div>
                
                </div>
              </Col>
              </Row>
              </Container>
              </theme.que>
              <theme.footer>
              <Container className="footer-cont" fluid={true}>
              <Row noGutters={true} style={{margin: "0 0 40px 0", padding: "0"}}>
                  <Col xs="3" sm="1"></Col>
                  <Col xs="9" sm="6" className="margin-top" style={{padding: 0, margin: 0}}>
                    <button className="footer-button">
                    <Link className="btn-link" to={'/contact'}>
                      <h1 className="footer-title"> {content.contact}</h1>
                      <MailOutlineIcon fontSize="large"/>
                      </Link>
                    </button>
                  </Col>
                  <Col xs="3" sm=""></Col>
                  <Col xs="6" sm="4" className="margin-top" style={{padding: 0, margin: 0}}>
                    <div className="footer-contact">
                        <p className="footer-text">C/ Miquel Àngel </p>
                        <p className="footer-text">690259***</p>
                        <p className="footer-text">email@business.com</p>
                    </div>
                  </Col>
              </Row>
              </Container>
              </theme.footer>
            </div>
        </Fragment>
        )
    }

    export default Home;