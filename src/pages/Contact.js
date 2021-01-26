import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { DarkContact } from '../styles/dark/DarkContact';
import { LightContact } from '../styles/light/LightContact';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import axios from 'axios';


function Contact (props) {

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
          <form className="contact-form" onSubmit={sendData} method="POST">
            <h1 className="contact-title">CONTACTA</h1>
            <div className="form-group">
            <input type="text" className="form-control" placeholder='&nbsp; &#xf007; &nbsp; Nom' name='nom' onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder='&nbsp; &#xf2a0; &nbsp; Telèfon' name='telèfon' onChange={handleInputChange} />
            </div>
            <div className="form-group">
            <input type="email" className="form-control" placeholder='&nbsp; &#xf0e0; &nbsp; Email' name='email' onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <textarea className="form-textarea" rows="10" placeholder='&nbsp; &#xf27a; &nbsp; El teu missatge' name='missatge' onChange={handleInputChange} />
            </div>
            <div className="button-div">
            <button type="submit" className="btn btn-primary"><h1 className="enviar-btn"> ENVIAR </h1><MailOutlineIcon fontSize="large"/></button>
            </div>
          </form>

            <div className="contact-footer">
                        <p className="contact-text">16 Place Cormontaigne, 59000 Lille France</p>
                        <p className="contact-text">+33(0)3 20 88 11 59</p>
                        <p className="contact-text">contact@wokine.com</p>
            </div>
          </theme.tema>
      </Fragment>
      );
    }
  
  
  
  
  export default Contact;