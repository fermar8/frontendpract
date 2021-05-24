import React, { Fragment, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { DarkContact } from '../styles/dark/DarkContact';
import { LightContact } from '../styles/light/LightContact';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import axios from 'axios';


function Contact (props) {


  let content = {
    spanish: {
      contacta: 'CONTACTA',
      nom: 'Nombre',
      telefon: 'Teléfono',
      email: 'Correo electrónico',
      missatge: 'Escribe tu mensaje',
      enviar: 'ENVIAR',
      error: 'Posible error de servidor.'

    },
    catalan: {
      contacta: 'CONTACTA',
      nom: 'Nom',
      telefon: 'Telèfon',
      email: 'Correu electrònic',
      missatge: 'El teu missatge',
      enviar: 'ENVIAR',
      error: 'Possible error de servidor'
    },
    english : {
      contacta: 'CONTACT US',
      nom: 'Name',
      telefon: 'Phone number',
      email: 'E-mail',
      missatge: 'Your message',
      enviar: 'SUBMIT',
      error: 'Probable server error'
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
       tema: DarkContact
     },
     light: {
       tema: LightContact
     }
  }

  if (props.theme === 'Dark') {
    theme = theme.dark;
  } else {
    theme = theme.light;
  }

  const [data, setData] = useState({
     name: '',
     phone: '',
     email: '',
     message: ''
  });

  const [showError, setShowError] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name] : event.target.value
    })
  }

  const sendData = (event) => {
    event.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  data
          }).then((response)=>{
              if (response.data.status === 'success') { 
              setSubmitted(true);
          } else if(response.data.status === 'fail') {
              setShowError(true)
          }
      })
  }

  if (submitted) {
    return <Redirect push to={{
      pathname: '/success'
    }}/>
  }
    
      return(
       <Fragment>
        <theme.tema>
        <Container>
        <Row>
          <form className="contact-form" onSubmit={sendData} method="POST">
            <h1 className="contact-title">{content.contacta}</h1>
            <div className="fields-container">
            <div className="form-group">
            <input type="text" required className="form-control" placeholder= {content.nom} name='nom' onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder={content.telefon} name='telèfon' onChange={handleInputChange} />
            </div>
            <div className="form-group">
            <input type="email" required className="form-control" placeholder={content.email} name='email' onChange={handleInputChange} />
            </div>
            </div>
            <div className="form-group">
              <textarea type="text" required className="form-textarea" rows="10" placeholder={content.missatge} name='missatge' onChange={handleInputChange} />
            </div>
            <div className="button-div">
            {showError ? 
            <p className="error-text">{content.error}</p> : null}
            <button type="submit" className="btn btn-primary"><h1 className="enviar-btn"> {content.enviar} </h1><MailOutlineIcon fontSize="large"/></button>
            </div>
          </form>
          </Row>
          </Container>
          <Container fluid={true}>
          <Row>
          <Col xs="0"></Col>
          <Col>
            <div className="contact-footer">
                        <p className="contact-text">16 Place Cormontaigne, 59000 Lille France</p>
                        <p className="contact-text">+33(0)3 20 88 11 59</p>
                        <p className="contact-text">contact@wokine.com</p>
            </div>
          </Col>
          <Col></Col>
          </Row> 
          </Container>

          </theme.tema>
      </Fragment>
      );
    }
  
  
  
  
  export default Contact;