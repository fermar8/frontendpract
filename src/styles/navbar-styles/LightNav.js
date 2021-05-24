import styled from 'styled-components';

export const LightNav = styled.nav`
    width: 100%;
    height: 55px;
    display: flex;
    background-color: #fafafa;
    justify-content: space-between;

    .lang-btn {
        cursor:pointer;
    }

    .logo {
        font-family: Gilroy;
        text-decoration: line-through;
        margin-left: 10px;
        margin-top: 12.5px;
        font-size: 30px;
        color: black;
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
        font-size: 20px;
        margin-top: 17.5px;
    }
    
}


    
`