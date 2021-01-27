import styled from 'styled-components';

export const DarkQue = styled.div`

@media only screen and (max-width: 320px) {
    .que-page {
        background-color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        z-index: -1;
        width: 100vw;
        height: 100vh;
        border: none;
        outline: none;
        }
    
    .que-title {
        font-family: Gilroy;
        color: #4F64D3;
        font-size: 26px;
        margin: 0 20px 20px 20px;
        }
        
    .que-text {
        font-family: Montserrat;
        color: #9D9C9C;
        font-size: 16px;
        margin: 0 20px 20px 20px;
     }
    
 }


@media only screen and (min-width: 320px) and (max-width:600px) {

.que-page {
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    border: none;
    outline: none;
    }

.que-title {
    font-family: Gilroy;
    color: #4F64D3;
    margin: 0 0 20px 20px;
    font-size: 28px;
    }
    
.que-row {
    display: flex;
}

.que-text {
    font-family: Montserrat;
    color: #9D9C9C;
    font-size: 18px;
    margin: 0 20px 20px 20px;
 }

}

@media only screen and (min-width: 600px) and (max-width: 1280px) {
    .que-page {
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    border: none;
    outline: none;
    }

.container-que-other {
    display: flex;
    flex-direction: row;
}

.que-title {
    font-family: Gilroy;
    color: #4F64D3;
    margin: 0 50px 20px 50px;
    font-size: 50px;
    }
    
.que-row {
    display: flex;
}

.que-text {
    font-family: Montserrat;
    color: #9D9C9C;
    font-size: 30px;
    margin: 0 50px 20px 50px;
 }

}


@media screen and (orientation:landscape)
and (min-device-width: 300px) 
and (max-device-width: 568px) {

    .que-page {
        background-color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        z-index: -1;
        width: 100vw;
        height: 100vh;
        border: none;
        outline: none;
        }
    
    .que-title {
        font-family: Gilroy;
        color: #4F64D3;
        margin-top: 20px;
        font-size: 26px;
        margin: 20px 20px 0px 20px;
        }
        
    .que-text {
        font-family: Montserrat;
        color: #9D9C9C;
        font-size: 16px;
        margin: 8px 20px 0 20px;
     }
    
}

@media screen and (orientation:landscape)
and (min-device-width: 568px) 
and (max-device-width: 840px) {

    .que-page {
        background-color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        z-index: -1;
        width: 100vw;
        height: 100vh;
        border: none;
        outline: none;
        }
    
    .que-title {
        font-family: Gilroy;
        color: #4F64D3;
        font-size: 30px;
        margin: 20px 20px 0 20px;
        }
        
    
    
    .que-text {
        font-family: Montserrat;
        color: #9D9C9C;
        font-size: 20px;
        margin: 20px 20px 0 20px;
     }
    
}




`