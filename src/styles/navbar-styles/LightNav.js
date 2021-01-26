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

    .checkbox {
        opacity: 0;
        position: absolute;
    }

    .label {
        background-color: #111;
        border-radius: 50px;
        display: flex;
        justify-content: space-between;
        padding: 5px;
        position: relative;
        align-items: center;
        height: 16px;
        width: 50px;
    }

    .icon-sun {
        color: #f39c12;
        font-size: 20px;
    }
    .icon-moon {
        color: #f1c40f;
        font-size: 20px;
    }
    .ball {
        height: 24px;
        width: 25px;
        background-color: white;
        position: absolute;
        
        border-radius: 50%;
        transition: transform 0.2s linear;
    }

    .checkbox: checked + .label .ball {
        transform: translateX(24px)
    }
`