import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import imgPastisseria from './../images/image-1.png';
import { LightProyecto } from './../styles/light/LightProyecto';
import { DarkProyecto } from './../styles/dark/DarkProyecto';
import { Link } from 'react-router-dom';

function Pastisseria (props) {

    let content = {
        spanish: {
          tornar: "Volver",
          titol: "Título del proyecto",
          data: "Fecha",
          text1: "Gracias a nuestro talentoso equipo podemos ofrecer diseños únicos y personalizados que sirven para potenciar tu marca.",
          text2: "Además, podemos adaptarnos a las diferentes necesidades de cada negocio y trabajar con nuestro própio código o utilizar herramientas ya existentes como Wordpress.",
          text3: "Finalmente, podemos ayudarte a generar mayor impacto en el mundo digital gracias a nuestras campañas de Webmarketing.",
          link: "Enlace"
      
        },
        catalan: {
          tornar: "Tornar",
          titol: "Títol del projecte",
          data: "Data",
          text1: "Gràcies al nostre talentòs equip podem oferir dissenys únics i personalitzats que serveixin per potenciar la teva marca.",
          text2: "A més, podem adaptar-nos a les diferents necessitats de cada negoci i treballar amb el nostre pròpi codi o utilitzar eines com Wordpress.",
          text3: "Finalment, podem ajudar-te a generar major impacte en el món digital gràcies a les nostres campanyes de Webmarketing.",
          link: "Enllaç"
        },
        english : {
          tornar: "Go back",
          titol: "Project title",
          data: "Date",
          text1: "Thanks to our talented team we can offer unique and personalized designs that will enhance your brand.",
          text2: "Moreover, we can adapt to different business needs, working with our own code or using technologies such as Wordpress.",
          text3: "Finally, we can help your impact in the digital world thanks to our Webmarketing campaigns.",
          link: "Link"
        }
      }

      if (props.language === 'Catalan') {
        content = content.catalan;
      } else if (props.language === 'Spanish') {
        content = content.spanish;
      } else {
        content = content.english;
      };

    let theme = {
        dark: {
            proyecto: DarkProyecto  
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
                <Link className="text-left-link"  to={"/portfolio"}> &#8249; {content.tornar}</Link>
                <h2 className="title-left">{content.titol}</h2>
                <h2 className="title-left">{content.data}</h2>
                <p className="text-left">{content.text1} </p> 
                <p className="text-left">{content.text2}</p>
                <p className="text-left">{content.text3}</p>
                <Link  className="text-left-link" to={'/portfolio'}>Link</Link>
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