import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarShowing: true,
            menuShowing: false
        }
    }

   handleNavbar = () => {
       this.setState({navbarShowing: !this.state.navbarShowing,
                      menuShowing: !this.state.menuShowing})
   }


    render () {

        const showingFirstStyle = { 
            width: '100vw',
            maxWidth: '100%',
            backgroundColor: 'black',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            opacity: 1,
            transition: 'max-width 0.5s, max-height 0.5s, opacity 0.2s'
        }

        const showingSecondStyle = {
            width: '100vw',
            maxWidth: '100%',
            backgroundColor: 'black',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            opacity: 1,
            transition: 'max-width 0.5s, max-height 0.5s, opacity 0.2s'
        }

        const menuShowingStyle = {
            height: '100vh',
            width: '70vw',
            marginTop: '1vh',
            opacity: 1,
            backgroundColor: 'grey',
            transition: 'width 0.5s ease 0.5s'
        }

        const linksShowingStyle = {
            listStyleType: 'none',
            whiteSpace: 'nowrap',
            overflow: 'auto',
            marginLeft: '4vw',
            fontSize: '3vh',
            textDecoration: 'none',
            color: 'white',
            padding: '2vw',
            transition: 'width 0.5s ease 0.5s'
        }

        const linksNotShowingStyle = {
            maxHeight: 0,
            width: 0,
            whiteSpace: 'nowrap',
            overflow: 'auto',
            maxWidth: 0,
            fontSize: '3vh',
            opacity: 0,
            textDecoration: 'none',
            color: 'white',
            transition: 'width 0.5s ease 0.5s'
        }

        const menuHideStyle = {
            maxHeight: 0,
            marginTop: '1vh',
            width: 0,
            maxWidth: 0,
            opacity: 0,
            transition: 'min-width 0.5s, opacity 0.2s 0.3s'
        }

        const {navbarShowing} = this.state;
        const {menuShowing} = this.state;
        return(
            <>
            {navbarShowing ? 
            <div style={showingFirstStyle}>
                <p className="logo">LOGO</p>
                <button onClick={this.handleNavbar} className="starting-button">☰</button> 
            </div> :
                <div style={showingSecondStyle}>
                    <button onClick={this.handleNavbar} className="finish-button">|||</button> 
                    <p className="starting-button">LOGO</p> 
                </div> 
             }


             <ul style={menuShowing ? menuShowingStyle : menuHideStyle}>
           
                <Link onClick={this.handleNavbar} style={menuShowing ? linksShowingStyle : linksNotShowingStyle} to={'/'}><li className='list-nav'>Home.</li></Link>
 
                <Link onClick={this.handleNavbar} style={menuShowing ? linksShowingStyle : linksNotShowingStyle} to={'/nosotros'}><li className='list-nav'>Quiénes Somos.</li></Link>
  
                <Link onClick={this.handleNavbar} style={menuShowing ? linksShowingStyle : linksNotShowingStyle} to={'/'}><li className='list-nav'>Valores.</li></Link>
  
                <Link onClick={this.handleNavbar} style={menuShowing ? linksShowingStyle : linksNotShowingStyle} to={'/'}><li className='list-nav'>Portfolio.</li></Link>
            </ul>

         </>

         
        
      
        )
    }
}

export default Navbar