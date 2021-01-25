import styled from 'styled-components';

export const LightQue = styled.div`

@media only screen and (max-width: 350px) {
    .que-page {
        background-color: white;
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
        color: #7385E1;
        font-size: 30px;
        margin: 0 20px 20px 20px;
        }
        
    .que-text {
        font-family: Montserrat;
        color: #2F2F2F;
        font-size: 20px;
        margin: 0 20px 20px 20px;
     }
    
 }


@media only screen and (min-width: 350px) {

.que-page {
    background-color: white;
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
    color: #7385E1;
    margin: 0 0 20px 20px;
    font-size: 2rem;
    }
    
.que-row {
    display: flex;
}

.que-text {
    font-family: Montserrat;
    color: #2F2F2F;
    font-size: 20px;
    margin: 0 20px 20px 20px;
 }

}


@media screen and (orientation:landscape)
and (min-device-width: 300px) 
and (max-device-width: 600px) {

    .que-page {
        background-color: white;
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
        color: #7385E1;
        margin-top: 6vh;
        font-size: 2rem;
        margin: 0 0 0 2vw;
        }
        
    
    
    .que-text {
        font-family: Montserrat;
        color: #2F2F2F;
        font-size: 20px;
        width: 90vw;
        margin: 4vh 0 0 2vw;
     }
    
    .que-color {
        background-color: #4F64D3;
        height: 50vh;
        width: 12vw;
        margin-left: 2vw;
        
    }
    
}

@media screen and (orientation:landscape)
and (min-device-width: 600px) 
and (max-device-width: 700px) {

    .que-page {
        background-color: white;
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
        color: #7385E1;
        margin-top: 6vh;
        font-size: 2rem;
        margin: 0 0 0 2vw;
        }
        
    
    
    .que-text {
        font-family: Montserrat;
        color: #2F2F2F;
        font-size: 20px;
        width: 90vw;
        margin: 4vh 0 0 2vw;
     }
    
    .que-color {
        background-color: #4F64D3;
        height: 50vh;
        width: 12vw;
        margin-left: 2vw;
        
    }
}

@media screen and (orientation:landscape)
and (min-device-width: 700px) 
and (max-device-width: 800px) {

    .que-page {
        background-color: white;
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
        color: #7385E1;
        margin-top: 6vh;
        font-size: 2rem;
        margin: 0 0 0 2vw;
        }
        
    
    
    .que-text {
        font-family: Montserrat;
        color: #2F2F2F;
        font-size: 20px;
        width: 90vw;
        margin: 4vh 0 0 2vw;
     }

}

@media screen and (orientation:landscape)
and (min-device-width: 800px) 
and (max-device-width: 900px) {

    .que-page {
        background-color: white;
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
        color: #7385E1;
        margin-top: 6vh;
        font-size: 2rem;
        margin: 0 0 0 2vw;
        }
        
    
    .que-text {
        font-family: Montserrat;
        color: #2F2F2F;
        font-size: 20px;
        width: 90vw;
        margin: 4vh 0 0 2vw;
     }
}


`