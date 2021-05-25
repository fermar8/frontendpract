import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import imgPastisseria from '../images/image-1.png';
import { Link } from 'react-router-dom';
import { LightPortfoli } from '../styles/light/LightPortfoli';
import { useState } from 'react';


function Portfolio(props) {

const [ isHovering, setIsHovering ] = useState(false);
const [ isHovering2, setIsHovering2 ] = useState(false);
const [ isHovering3, setIsHovering3 ] = useState(false);
const [ isHovering4, setIsHovering4 ] = useState(false);

    let theme = {
        dark: {
            portfoli: LightPortfoli  
        },
    
        light: {
            portfoli: LightPortfoli
        }
    }
    
    if (props.theme === 'Dark') {
        theme = theme.dark;
    } else {
        theme = theme.light;
    }

    return (
        <theme.portfoli>
        <Container className="container-height">
        <Row style={{height: "10vh", marginTop: "20px"}}>
         <Col xs="3" md="1"></Col>
         <Col xs="6" md="8" className="proyectos-title">
             <h1>Nuestros Proyectos</h1>
         </Col>
         <Col xs="3" md="8"></Col>
        </Row>
            <Row>
                <Col xs="3" md="1"></Col>
                <Col xs="6" md="4">
                <div>
                  {isHovering ? <Link to={'/pastisseria'}><div className="hover-container" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                  <img className="image-portfoli-hover" src={imgPastisseria} alt="pastis" ></img>
                  <div className="text-block">
                    <h4>Pastisseria</h4>
                  </div>
                </div>
                </Link>
                  :
                  <img onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="image-portfoli" src={imgPastisseria} alt="pasti"></img>
                  }
                </div>
                </Col>
                <Col xs="3" md="1"></Col>
                <Col xs="3" md="1"></Col>
                <Col xs="6" md="4">
                <div>
                  {isHovering2 ? <Link to={'/contact'}><div className="hover-container" onMouseEnter={() => setIsHovering2(true)} onMouseLeave={() => setIsHovering2(false)}>
                  <img className="image-portfoli-hover" src={imgPastisseria} alt="pastis" ></img>
                  <div className="text-block">
                    <h4>Pastisseria</h4>
                  </div>
                </div>
                </Link>
                  :
                  <img onMouseEnter={() => setIsHovering2(true)} onMouseLeave={() => setIsHovering2(false)} className="image-portfoli" src={imgPastisseria} alt="pasti"></img>
                  }
                </div>
                </Col>
                <Col xs="3" md="1"></Col>
                <Col xs="3" md="1"></Col>
                <Col xs="6" md="4">
                <div>
                  {isHovering3 ? <Link to={'/contact'}><div className="hover-container" onMouseEnter={() => setIsHovering3(true)} onMouseLeave={() => setIsHovering3(false)}>
                  <img className="image-portfoli-hover" src={imgPastisseria} alt="pastis" ></img>
                  <div className="text-block">
                    <h4>Pastisseria</h4>
                  </div>
                </div>
                </Link>
                  :
                  <img onMouseEnter={() => setIsHovering3(true)} onMouseLeave={() => setIsHovering3(false)} className="image-portfoli" src={imgPastisseria} alt="pasti"></img>
                  }
                </div>
                </Col>
                <Col xs="3" md="1"></Col>
                <Col xs="3" md="1"></Col>
                <Col xs="6" md="4">
                <div>
                  {isHovering4 ? <Link to={'/contact'}><div className="hover-container" onMouseEnter={() => setIsHovering4(true)} onMouseLeave={() => setIsHovering4(false)}>
                  <img className="image-portfoli-hover" src={imgPastisseria} alt="pastis" ></img>
                  <div className="text-block">
                    <h4>Pastisseria</h4>
                  </div>
                </div>
                </Link>
                  :
                  <img onMouseEnter={() => setIsHovering4(true)} onMouseLeave={() => setIsHovering4(false)} className="image-portfoli" src={imgPastisseria} alt="pasti"></img>
                  }
                </div>
                </Col>
                
            </Row>
        </Container>
        </theme.portfoli>
    )
}

export default Portfolio
