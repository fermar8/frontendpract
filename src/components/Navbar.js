import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
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
            height: '80px',
            position: 'fixed',
            backgroundColor: 'black',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            opacity: 1,
        }

        const showingSecondStyle = {
            width: '100vw',
            maxWidth: '100%',
            height: '80px',
            position: 'fixed',
            backgroundColor: 'black',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            opacity: 1,
        }

        const menuShowingStyle = {
            height: '100vh',
            width: '100vw',
            position: 'fixed',
            marginTop: '80px',
            opacity: 1,
            backgroundColor: 'black',
            transition: 'width 0.4s ease 0.5s'
        }

        const linksShowingStyle = {
            listStyleType: 'none',
            whiteSpace: 'nowrap',
            overflow: 'auto',
            marginTop: '5vh',
            marginLeft: '4vw',
            fontSize: '3vh',
            textDecoration: 'none',
            color: 'white',
            opacity: 1,
            padding: '2vw',
        }

        const linksNotShowingStyle = {
            maxHeight: 0,
            width: 0,
            marginTop: '5vh',
            padding: '2vw',
            whiteSpace: 'nowrap',
            overflow: 'auto',
            maxWidth: 0,
            textDecoration: 'none',
            fontSize: '3vh',
            opacity: 0,
            color: 'white',
            transition: 'width 0.5s ease 0.5s'
        }

        const menuHideStyle = {
            maxHeight: 0,
            minWidth: 0,
            position: 'fixed',
            marginTop: '80px',
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
                    <p className="logo">LOGO</p> 
                    <button onClick={this.handleNavbar} className="starting-button">|||</button>  
                </div> 
             }


            <ul style={menuShowing ? menuShowingStyle : menuHideStyle}>
           
                <Link onClick={this.handleNavbar} style={menuShowing ? linksShowingStyle : linksNotShowingStyle} smooth to={'/#home'}><li className='list-nav'>Home.</li></Link>
 
                <Link onClick={this.handleNavbar} style={menuShowing ? linksShowingStyle : linksNotShowingStyle} smooth to={'/#about'}><li className='list-nav'>Quiénes Somos.</li></Link>

                <Link onClick={this.handleNavbar} style={menuShowing ? linksShowingStyle : linksNotShowingStyle} smooth to={'/#oferta'}><li className='list-nav'>Qué ofrecemos.</li></Link>

                <Link onClick={this.handleNavbar} style={menuShowing ? linksShowingStyle : linksNotShowingStyle} smooth to={'/#design'}><li className='list-nav'>Design.</li></Link>

                <Link onClick={this.handleNavbar} style={menuShowing ? linksShowingStyle : linksNotShowingStyle} smooth to={'/#development'}><li className='list-nav'>Development.</li></Link>

                <Link onClick={this.handleNavbar} style={menuShowing ? linksShowingStyle : linksNotShowingStyle} smooth to={'/#marketing'}><li className='list-nav'>Webmarketing.</li></Link>
            </ul>

         </>

         
        
      
        )
    }
}

export default Navbar