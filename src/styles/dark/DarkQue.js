import styled from 'styled-components';

export const DarkQue = styled.div`

    .que-page {
        background-color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        width: 100%;
        height: 100vh;
        border: none;
        outline: none;
        }
    
    .que-title {
        font-family: Gilroy;
        color: #4F64D3;
        margin: 0 20px 20px 20px;
        }
        
    .que-text {
        font-family: Montserrat;
        color: #9D9C9C;
        margin: 0 20px 20px 20px;
     }

     .other-pages {
    display: flex;
    flex-direction: column;
    background-color: #1C3CE5;
    justify-content: space-around;
    width: 100%;
    height: 100vh;
    }

    .top-bot-space {
    height: 10vh;  
}

.other-design {
    z-index: 0;
    background-color:  #1C3CE5;
    margin: 0 20px 0 20px;
}

.other-development {
    z-index: 0;
    background-color:  #1C3CE5;
    margin: 0 20px 0 20px;
}

.other-marketing {
    z-index: 0;
    background-color:  #1C3CE5;
    margin: 0 20px 0 20px;
}

.other-title {
    font-family: Gilroy;
    color: white;
    margin-bottom: 10px;
}

.other-text {
    font-family: Montserrat;
    color: white;
  }

  @media only screen and (max-width: 576px) and (orientation: portrait) {
    .other-title, .que-title {
        font-size: 26px;
    }
    .other-text, .que-text {
        font-size: 16px;
    }
  }

  @media only screen and (max-width: 576px) and (orientation: landscape) {
    .other-title, .que-title {
        font-size: 22px;
    }
    .other-text, .que-text {
        font-size: 14px;
    }
  }

  @media only screen and (max-width: 768px) and (orientation: landscape) {
    .other-title, .que-title {
        font-size: 22px;
    }
    .other-text, .que-text {
        font-size: 14px;
    }
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) and (orientation: portrait){
    .other-title, .que-title {
        font-size: 30px;
    }
    .other-text, .que-text {
        font-size: 20px;
    }
}

 @media only screen and (min-width: 768px) and (max-width: 992px) {
    .other-title, .que-title {
        font-size: 30px;
    }
    .other-text, .que-text {
        font-size: 20px;
    }
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
    .other-title, .que-title {
        font-size: 30px;
    }
    .other-text, .que-text {
        font-size: 20px;
    }
}

@media only screen and (min-width: 1200px) and (max-width: 1468px){
    .other-title, .que-title {
        font-size: 30px;
    }
    .other-text, .que-text {
        font-size: 20px;
    }
}

@media only screen and (min-width: 1468px){
    .other-title, .que-title {
        font-size: 40px;
    }
    .other-text, .que-text {
        font-size: 30px;
    }
}

`