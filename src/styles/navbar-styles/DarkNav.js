import styled from 'styled-components';

export const DarkNav = styled.nav`
    width: 100vw;
    height: 55px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 320px) {
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
        margin-right: 30px;
    }
    p {
        color: white;
        font-size: 18px;
    }

}

@media only screen and (min-width: 320px) {
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
        margin-left: 30px;
    }
    p {
        color: white;
        font-size: 18px;
    }

    .lang-btn {
        font-size: 10px;
        width: 30px;
    }

}

@media only screen and (min-width: 468px) {
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
        margin-left: 30px;
    }
    p {
        color: white;
        font-size: 18px;
    }

    .lang-btn {
        font-size: 14px;
        width: 40px;
    }

}

@media only screen and (min-width: 600px) and (orientation:portrait) {

    width: 100vw;
    height: 80px;
    display: flex;
    justify-content: space-between;

    .logo {
        font-family: Gilroy;
        text-decoration: line-through;
        margin-left: 50px;
        font-size: 50px;
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
        font-size: 24px;
    }

    .lang-btn {
        font-size: 20px;
        width: 80px;
    }

}
    
`