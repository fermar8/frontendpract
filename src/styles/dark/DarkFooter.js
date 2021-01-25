import styled from 'styled-components'; 

export const DarkFooter = styled.div`

@media only screen and (max-width: 350px) {

.footer {
    width: 100vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.footer-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    border: 2px solid white;
    margin: 0 20px 0 20px;
    min-width: 250px;
    width: 280px;
    background-color: black;
    font-family: Gilroy; 
    color: white;
}

.footer-title {
    font-size: 30px;
}

.footer-contact {
    display: flex;
    flex-direction: column;
}

.footer-text {
    color: white;
    margin: 0 20px 0 20px;
    font-size: 10px;
}

}

`