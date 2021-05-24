import styled from 'styled-components'; 

export const DarkFooter = styled.div`

.footer-button {
    cursor: pointer;
}

.footer {
    width: 100%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.footer-cont {
    background-color: black;
    height: 30vh;
}

.margin-top {
    margin-top: 20px;
}

.btn-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    font-family: Gilroy; 
    color: white;
    text-decoration: none;
}

.footer-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid white;
    background-color: black;
    font-family: Gilroy; 
    color: white;
    margin-top: 12.5vh;
}

.footer-contact {
    display: flex;
    flex-direction: column;
    margin-top: 12.5vh;
}

.footer-text {
    color: #C8C8C8;  
}

@media only screen and (max-width: 576px) {
    .footer-title {
        font-size: 20px;
        margin-right: 8px;
    }
    .footer-text {
        font-size: 10px;
    }
    .footer-button {
        margin-top: 6vh;
        height: 40px;
        width: 220px;
    }
    .footer-contact {
        margin-top: 10px;
    }

  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    .footer-title {
        font-size: 30px;
    }
    .footer-text {
        font-size: 10px;
    }
    .footer-button {
        height: 60px;
        width: 280px;
     }
}

 @media only screen and (min-width: 768px) and (max-width: 992px) {
    .footer-title {
        font-size: 30px;
    }
    .footer-text {
        font-size: 15px;
    }

    .footer-button {
        height: 60px;
        width: 320px;
     }
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
    .footer-title {
        font-size: 40px;
    }
    .footer-text {
        font-size: 15px;
    }

    .footer-button {
        height: 60px;
        width: 340px;
     }
}

@media only screen and (min-width: 1200px) and (max-width: 1468px){
    .footer-title {
        font-size: 40px;
    }
    .footer-text {
        font-size: 15px;
    }

    .footer-button {
        height: 60px;
        width: 340px;
     }
}

@media only screen and (min-width: 1468px){
    .footer-title {
        font-size: 40px;
    }
    .footer-text {
        font-size: 15px;
    }

    .footer-button {
        height: 70px;
        width: 380px;
     }
}

`