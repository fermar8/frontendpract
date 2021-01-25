import styled from 'styled-components'; 

export const LightFooter = styled.div`

@media only screen and (max-width: 350px) {

.footer {
    width: 100vw;
    height: 30vh;
    display: flex;
    background-color: white;
    flex-direction: column;
    justify-content: space-around;
}

.footer-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    border: 2px solid black;
    margin: 0 20px 0 20px;
    min-width: 250px;
    width: 280px;
    background-color: white;
    font-family: Gilroy; 
    color: black;
}

.footer-title {
    font-size: 30px;
}

.footer-contact {
    display: flex;
    flex-direction: column;
}

.footer-text {
    color: black;
    margin: 0 20px 0 20px;
    font-size: 10px;
}

}

`