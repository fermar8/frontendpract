import styled from 'styled-components'; 

export const LightFooter = styled.div`


.footer-button {
    cursor: pointer;
}

.footer {
    width: 100%;
    height: 30vh;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.footer-cont {
    background-color: #fafafa;
    height: 30vh;
}

.margin-top {
    margin-top: 20px;
}

.btn-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fafafa;
    font-family: Gilroy; 
    color: #0F0F0F;
    text-decoration: none;
}

.footer-button {
    display: flex;
    align-items: center;
    margin-top: 12.5vh;
    justify-content: space-between;
    border: 2px solid #0F0F0F;
    background-color: #fafafa;
    font-family: Gilroy; 
    color: #0F0F0F;
}

.footer-contact {
    display: flex;
    flex-direction: column;
    margin-top: 12.5vh;
}

.footer-text {
    color: #0F0F0F;  
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