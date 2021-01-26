import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


function Contact () {

  const [data, setData] = useState({
     name: '',
     phone: '',
     email: '',
     message: ''
  });

  const [submitted, setSubmitted] = useState(false)

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
        <h1>Contacta</h1>
          <form className="contact-form" onSubmit={sendData} method="POST">
            <div className="form-group">
              <input type="text" className="form-control" placeholder='Nom' name='nom' onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder='Telèfon' name='telèfon' onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder='Email' name='email' onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <textarea className="form-control" placeholder='El teu missatge' name='missatge' onChange={handleInputChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
      </Fragment>
      );
    }
  
  
  
  
  export default Contact;