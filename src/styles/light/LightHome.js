import styled from 'styled-components'; 

export const LightHome = styled.div`

@media only screen and (max-width: 320px) {
    
    .left-div {
        font-family: Gilroy;
        display: flex;
        flex-direction: column;
        text-align: right;
        background-color: #00929B;
        justify-content: space-around;
        border: none !important;
        outline: none !important;
        height: 100vh;
        width: 100%;
    }
    
    .right-div {
        font-family: Gilroy;
        display: flex;
        flex-direction: column;
        text-align: left;
        justify-content: space-around;
        background-color: #fafafa;
        border: none !important;
        outline: none !important;
        height:100vh;
        width: 100%;
    }
    
    .text-left {
        color: #fafafa;
        font-size: 50px;    
    }
    
    .text-right {
        color: #00929B;
        font-size: 50px;
    }
}

@media only screen and (min-width: 320px) and (max-width: 600px) {
    
    .left-div {
        font-family: Gilroy;
        display: flex;
        flex-direction: column;
        text-align: right;
        background-color: #00929B;
        justify-content: space-around;
        border: none !important;
        outline: none !important;
        height: 100vh;
        width: 100%;
    }
    
    .right-div {
        font-family: Gilroy;
        display: flex;
        flex-direction: column;
        text-align: left;
        justify-content: space-around;
        background-color: #fafafa;
        border: none !important;
        outline: none !important;
        height: 100vh;
        width: 100%;
    }
    
    .text-left {
        color: #fafafa;
        font-size: 50px;    
    }
    
    .text-right {
        color: #00929B;
        font-size: 50px;
    }
    
    }

@media only screen and (min-width: 600px) and (max-width: 1024px) {

.left-div {
    font-family: Gilroy;
    display: flex;
    flex-direction: column;
    text-align: right;
    background-color: #00929B;
    justify-content: space-around;
    border: none !important;
    outline: none !important;
    height: 100vh;
    width: 100%;
}

.right-div {
    font-family: Gilroy;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-around;
    background-color: #fafafa;
    border: none !important;
    outline: none !important;
    height: 100vh;
    width: 100%;
}

.text-left {
    color: #fafafa;
    font-size: 150px;    
}

.text-right {
    color: #00929B;
    font-size: 150px;
}

}

@media only screen and (min-width: 1024px) {

.left-div {
    font-family: Gilroy;
    display: flex;
    flex-direction: column;
    text-align: right;
    background-color: #00929B;
    justify-content: space-around;
    border: none !important;
    outline: none !important;
    height: 100vh;
    width: 100%;
}

.right-div {
    font-family: Gilroy;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-around;
    background-color: #fafafa;
    border: none !important;
    outline: none !important;
    height: 100vh;
    width: 100%;
}

.text-left {
    color: #fafafa;
    font-size: 150px;    
}

.text-right {
    color: #00929B;
    font-size: 150px;
}

}
}
    
 `