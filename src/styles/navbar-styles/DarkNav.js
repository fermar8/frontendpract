import styled from 'styled-components';

export const DarkNav = styled.nav`
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: space-between;

    .lang-btn {
        cursor:pointer;
    }
    .logo {
        font-family: Gilroy;
        margin-left: 10px;
        margin-top: 12.5px;
        text-decoration: line-through;
        font-size: 30px;
        color: white;
    }
    .lang {
        display: flex;
        justify-content: center;
        color: white;
        font-size: 20px;
        margin-top: 17.5px;
    }
}

    
`