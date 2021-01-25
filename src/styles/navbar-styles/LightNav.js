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
`