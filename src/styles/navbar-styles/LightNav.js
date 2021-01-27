import styled from 'styled-components';

export const LightNav = styled.nav`
    width: 100vw;
    height: 55px;
    display: flex;
    background-color: white;
    justify-content: space-between;

    .logo {
        font-family: Gilroy;
        text-decoration: line-through;
        padding: 15px 0 0 15px;
        font-size: 30px;
        background-color: white;
        color: #black;
    }

    .lang-and-burger {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .lang {
        display: flex;
        justify-content: center;
        text-align: center;
        margin-top: 10px;
    }

    p {
        color: black;
        font-size: 18px;
    }
    
    .theme-select {
        font-family: FontAwesome, 'Montserrat';
        font-size: 15px;
        margin: 30px 0 0 20px;
        border-radius: 4px;
        border: 2px solid black;
        background-color: white;
        height: 30px;
    }
    
    .theme-option-light {
        font-family: FontAwesome, 'Montserrat';
        width: 140px;
        background-color: white;
        height: 30px;
        font-size: 15px;
    }

    .theme-option-dark {
        font-family: FontAwesome, 'Montserrat';
        width: 140px;
        background-color: black;
        color: white;
        height: 30px;
        font-size: 15px;
    }
`