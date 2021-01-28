import styled from 'styled-components'; 

export const LightFooter = styled.div`

.footer-button {
    cursor: pointer;
}

@media only screen and (max-width: 320px) {

.footer {
    width: 100vw;
    height: 30vh;
    display: flex;
    background-color: #fafafa;
    flex-direction: column;
    justify-content: space-around;
}

.footer-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    border: 2px solid black;
    margin: 0 20px 0 20px;
    min-width: 200px;
    width: 80vw;
    background-color: #fafafa;
    font-family: Gilroy; 
    color: black;
}

.footer-title {
    font-size: 20px;
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

@media only screen and (min-width: 320px) and (max-width: 600px) {

.footer {
    width: 100vw;
    height: 30vh;
    display: flex;
    background-color: #fafafa;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.footer-button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 60px;
    border: 2px solid black;
    margin: 0 20px 0 20px;
    min-width: 200px;
    width: 80vw;
    background-color: #fafafa;
    font-family: Gilroy; 
    color: black;
}

.footer-title {
    font-size: 26px;
}

.footer-contact {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100vw;
}

.footer-text {
    color: black;
    margin: 0 20px 0 20px;
    font-size: 10px;
    bottom: 0;
    left: 0;
}

}

@media only screen and (min-width: 600px) and (max-width: 820px) {

.footer {
    width: 100vw;
    height: 30vh;
    display: flex;
    background-color: #fafafa;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.footer-button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 80px;
    border: 4px solid black;
    margin: 0 50px 0 50px;
    min-width: 200px;
    width: 350px;
    background-color: #fafafa;
    font-family: Gilroy; 
    color: black;
}

.footer-title {
    font-size: 40px;
}

.footer-contact {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100vw;
}

.footer-text {
    color: black;
    margin: 0 50px 0 50px;
    font-size: 15px;
    bottom: 0;
    left: 0;
}

}

@media only screen and (min-width: 820px) and (max-width: 1024px) {

    .footer {
    width: 100vw;
    height: 30vh;
    display: flex;
    background-color: #fafafa;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.footer-button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 80px;
    border: 4px solid black;
    margin: 0 50px 0 50px;
    min-width: 200px;
    width: 350px;
    background-color: #fafafa;
    font-family: Gilroy; 
    color: black;
}

.footer-title {
    font-size: 40px;
}

.footer-contact {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100vw;
}

.footer-text {
    color: black;
    margin: 0 50px 0 50px;
    font-size: 15px;
    bottom: 0;
    left: 0;
}

}

@media only screen and (min-width: 1024px) and (max-width: 1280px) {

    .footer {
    width: 100vw;
    height: 30vh;
    display: flex;
    background-color: #fafafa;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.footer-button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 80px;
    border: 4px solid black;
    margin: 0 50px 0 50px;
    min-width: 200px;
    width: 350px;
    background-color: #fafafa;
    font-family: Gilroy; 
    color: black;
}

.footer-title {
    font-size: 40px;
}

.footer-contact {
    display: flex;
    flex-direction: column;
    width: 100vw;
}

.footer-text {
    color: black;
    margin: 0 50px 0 250px;
    font-size: 15px;
    bottom: 0;
    left: 0;
}

}

@media only screen and (min-width: 1280px) and (max-width: 1440px) {

.footer {
width: 100vw;
height: 30vh;
display: flex;
background-color: #fafafa;
flex-direction: row;
justify-content: space-between;
align-items: center;
}

.footer-button {
display: flex;
align-items: center;
justify-content: space-around;
height: 80px;
border: 4px solid black;
margin: 0 50px 0 50px;
min-width: 200px;
width: 500px;
background-color: #fafafa;
font-family: Gilroy; 
color: black;
}

.footer-title {
font-size: 40px;
}

.footer-contact {
display: flex;
flex-direction: column;
width: 100vw;
}

.footer-text {
color: black;
margin: 0 50px 0 350px;
font-size: 15px;
bottom: 0;
left: 0;
}

}


@media screen and (orientation:landscape)
    and (min-device-width: 300px) 
    and (max-device-width: 568px) 
  {
    
    .footer {
    width: 100vw;
    height: 30vh;
    display: flex;
    background-color: #fafafa;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.footer-button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 40px;
    border: 2px solid black;
    margin: 0 20px 0 20px;
    min-width: 200px;
    width: 50vw;
    background-color: #fafafa;
    font-family: Gilroy; 
    color: black;
}

.footer-title {
    font-size: 26px;
}

.footer-contact {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100vw;
}

.footer-text {
    color: black;
    margin: 0 20px 0 20px;
    font-size: 10px;
    bottom: 0;
    left: 0;
}
        
    }

    @media screen and (orientation:landscape)
    and (min-device-width: 568px) 
    and (max-device-width: 840px) 
  {
    
    .footer {
    width: 100vw;
    height: 30vh;
    display: flex;
    background-color: #fafafa;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.footer-button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 50px;
    border: 2px solid black;
    margin: 0 20px 0 20px;
    min-width: 200px;
    width: 50vw;
    background-color: #fafafa;
    font-family: Gilroy; 
    color: black;
}

.footer-title {
    font-size: 30px;
}

.footer-contact {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100vw;
}

.footer-text {
    color: black;
    margin: 0 20px 0 20px;
    font-size: 10px;
}
        
    }

    @media screen and (orientation:landscape)
    and (min-device-width: 840px) 
    and (max-device-width: 1024px) 
  {
    
    .footer {
    width: 100vw;
    height: 30vh;
    display: flex;
    background-color: #fafafa;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.footer-button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 60px;
    border: 2px solid black;
    margin: 0 50px 0 50px;
    min-width: 200px;
    width: 40vw;
    background-color: #fafafa;
    font-family: Gilroy; 
    color: black;
}

.footer-title {
    font-size: 40px;
}

.footer-contact {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100vw;
}

.footer-text {
    color: black;
    margin: 0 50px 0 50px;
    font-size: 15px;
  }
 }

`