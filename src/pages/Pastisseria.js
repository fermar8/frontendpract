import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import imgPastisseria from './../images/image-1.png';
import { LightProyecto } from './../styles/light/LightProyecto';
import { Link } from 'react-router-dom';

function Pastisseria (props) {

    let theme = {
        dark: {
            proyecto: LightProyecto  
        },
    
        light: {
            proyecto: LightProyecto
        }
    }
    
    if (props.theme === 'Dark') {
        theme = theme.dark;
    } else {
        theme = theme.light;
    }

    return (

        <theme.proyecto>
        <Container fluid={true} className="container-proyecto">
        <Row noGutters={true} style={{margin: 0, padding: 0}}>
        <Col xs="12" xl="6" style={{padding: 0, margin: 0}}>
              <div className="left-div">
                <Link className="text-left-link"  to={"/portfolio"}> &#8249; Volver </Link>
                <h2 className="title-left">Project Name</h2>
                <h2 className="title-left">Date</h2>
                <p className="text-left">Gracias a nuestro talentoso equipo podemos ofrecer diseños únicos y personalizados que sirven para potenciar tu marca. </p> 
                <p className="text-left">Además, podemos adaptarnos a las diferentes necesidades de cada negocio y trabajar con nuestro própio código o utilizar herramientas ya existentes como Wordpress.</p>
                <p className="text-left">Finalmente, podemos ayudarte a generar mayor impacto en el mundo digital gracias a nuestras campañas de Webmarketing.</p>
                <Link style={{color: "#00929B"}} className="text-left-link" to={'/portfolio'}>Link</Link>
              </div>
        </Col>
        <Col xs="12" xl="6" style={{padding: 0, margin: 0}}>
           <div className="right-div">
           <img className="img-pastisseria" src={imgPastisseria} alt="pastisseria"></img>
           </div>
        </Col>
        </Row> 
        </Container>
        </theme.proyecto>
    )


}


export default Pastisseria;