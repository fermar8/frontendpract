import styled from 'styled-components';

export const DarkNav = styled.nav`
    width: 100vw;
    height: 55px;
    display: flex;
    justify-content: space-between;

    .logo {
        font-family: Gilroy;
        text-decoration: line-through;
        padding: 15px 0 0 15px;
        font-size: 30px;
        color: white;
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
        color: white;
        font-size: 18px;
    }
    
`