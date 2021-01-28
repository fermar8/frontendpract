import styled from 'styled-components';

export const LightNav = styled.nav`
    width: 100vw;
    height: 55px;
    display: flex;
    background-color: #fafafa;
    justify-content: space-between;

    .lang-btn {
        cursor:pointer;
    }

    @media only screen and (max-width: 320px) {
    .logo {
        font-family: Gilroy;
        text-decoration: line-through;
        padding: 15px 0 0 15px;
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
        text-align: center;
        margin-top: 10px;
        margin-right: 30px;
    }
    p {
        color: black;
        font-size: 18px;
    }

}

@media only screen and (min-width: 320px) and (max-width: 468px) {
    .logo {
        font-family: Gilroy;
        text-decoration: line-through;
        padding: 15px 0 0 15px;
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
        text-align: center;
        margin-top: 10px;
        margin-left: 30px;
    }
    p {
        color: black;
        font-size: 18px;
    }

    .lang-btn {
        font-size: 10px;
        width: 30px;
    }

}

@media only screen and (min-width: 468px) and (max-width: 1440px) {

    .logo {
        font-family: Gilroy;
        text-decoration: line-through;
        padding: 15px 0 0 15px;
        margin-left: 50px;
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
        text-align: center;
        margin-top: 10px;
        margin-left: 30px;
    }
    p {
        color: black;
        font-size: 18px;
    }

    .lang-btn {
        font-size: 14px;
        width: 40px;
    }

}


@media only screen and (min-width: 600px) and (max-width: 820px)
and (orientation:portrait) {

    width: 100vw;
    height: 55px;
    display: flex;
    justify-content: space-between;

    .logo {
        font-family: Gilroy;
        text-decoration: line-through;
        margin-left: 50px;
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
        text-align: center;
        margin-top: 10px;
    }
    p {
        color: black;
        font-size: 18px;
    }

    .lang-btn {
        font-size: 14px;
        width: 40px;
    }

}

@media only screen and (min-width: 820px) and (max-width: 1024px)
and (orientation:portrait) {

    width: 100vw;
    height: 55px;
    display: flex;
    justify-content: space-between;

    .logo {
        font-family: Gilroy;
        text-decoration: line-through;
        margin-left: 50px;
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
        text-align: center;
        margin-top: 10px;
    }
    p {
        color: black;
        font-size: 18px;
    }

    .lang-btn {
        font-size: 14px;
        width: 40px;
    }

}

@media only screen and (min-device-width: 600px) and (max-device-width: 1024px)
and (orientation:landscape) {

    width: 100vw;
    height: 55px;
    display: flex;
    justify-content: space-between;

    .logo {
        font-family: Gilroy;
        text-decoration: line-through;
        margin-left: 50px;
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
        text-align: center;
        margin-top: 10px;
    }
    p {
        color: black;
        font-size: 18px;
    }

    .lang-btn {
        font-size: 14px;
        width: 40px;
    }

}
    
`