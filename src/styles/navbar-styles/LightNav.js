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
        color: #0F0F0F;
    }

    .lang {
        display: flex;
        justify-content: center;
        font-size: 20px;
        margin-top: 17.5px;
    }

    @media only screen and (min-width: 576px) and (max-width: 768px) {
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
        color: #0F0F0F;
    }
    .lang {
        display: flex;
        justify-content: center;
        color: #0F0F0F;
        font-size: 20px;
        margin-top: 17.5px;
    }
}

 @media only screen and (min-width: 768px) and (max-width: 992px) {
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
        color: #0F0F0F;
    }
    .lang {
        display: flex;
        justify-content: center;
        color: #0F0F0F;
        font-size: 20px;
        margin-top: 17.5px;
    }
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;

    .lang-btn {
        cursor:pointer;
    }
    .logo {
        font-family: Gilroy;
        margin-left: 10px;
        margin-top: 15px;
        text-decoration: line-through;
        font-size: 40px;
        color: #0F0F0F;
    }
    .lang {
        display: flex;
        justify-content: center;
        color: #0F0F0F;
        font-size: 30px;
        margin-top: 20px;
    }
}

@media only screen and (min-width: 1200px) and (max-width: 1468px){
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;

    .lang-btn {
        cursor:pointer;
    }
    .logo {
        font-family: Gilroy;
        margin-left: 10px;
        margin-top: 15px;
        text-decoration: line-through;
        font-size: 40px;
        color: #0F0F0F;
    }
    .lang {
        display: flex;
        justify-content: center;
        color: #0F0F0F;
        font-size: 30px;
        margin-top: 20px;
    }
}

@media only screen and (min-width: 1468px){
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;

    .lang-btn {
        cursor:pointer;
    }
    .logo {
        font-family: Gilroy;
        margin-left: 10px;
        margin-top: 15px;
        text-decoration: line-through;
        font-size: 40px;
        color: #0F0F0F;
    }
    .lang {
        display: flex;
        justify-content: center;
        color: #0F0F0F;
        font-size: 30px;
        margin-top: 20px;
    }
}

    
`