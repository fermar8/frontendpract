import styled from 'styled-components';

export const LightQue = styled.div`

@media only screen and (max-width: 320px) {
    .que-page {
        background-color: #fafafa;
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
        font-size: 26px;
        margin: 0 20px 20px 20px;
        }
        
    .que-text {
        font-family: Montserrat;
        color: #2F2F2F;
        font-size: 16px;
        margin: 0 20px 20px 20px;
     }

     .other-pages {
    display: flex;
    flex-direction: column;
    background-color: #4F64D3;
    justify-content: space-around;
    width: 100vw;
    height: 90vh;
    z-index: -1;
    }

.other-design {
    z-index: 0;
    background-color:  #4F64D3;
    margin: 0 20px 0 20px;
}

.other-development {
    z-index: 0;
    background-color:  #4F64D3;
    margin: 0 20px 0 20px;
}

.other-marketing {
    z-index: 0;
    background-color:  #4F64D3;
    margin: 0 20px 0 20px;
}

.other-title {
    font-family: Gilroy;
    color: #fafafa;
    margin-bottom: 2vh;
    font-size: 26px;
}

.other-text {
    font-family: Montserrat;
    color: #fafafa;
    font-size: 16px;
}
    
 }


@media only screen and (min-width: 320px) and (max-width:600px) {

.que-page {
    background-color: #fafafa;
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

 .other-pages {
    display: flex;
    flex-direction: column;
    background-color: #4F64D3;
    justify-content: space-around;
    width: 100vw;
    height: 90vh;
    z-index: -1;
    }

.other-design {
    z-index: 0;
    background-color:  #4F64D3;
    margin: 0 20px 0 20px;
}

.other-development {
    z-index: 0;
    background-color:  #4F64D3;
    margin: 0 20px 0 20px;
}

.other-marketing {
    z-index: 0;
    background-color:  #4F64D3;
    margin: 0 20px 0 20px;
}

.other-title {
    font-family: Gilroy;
    color: #fafafa;
    margin-bottom: 2vh;
    font-size: 28px;
}

.other-text {
    font-family: Montserrat;
    color: #fafafa;
    font-size: 18px;
}

}

@media only screen and (min-width: 600px) 
and (max-width: 820px) {
 
 display: flex;

    .que-page {
    background-color: #fafafa;
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
    color: #7385E1;
    margin: 0 20px 20px 50px;
    font-size: 26px;
    }
    
.que-row {
    display: flex;
}

.que-text {
    font-family: Montserrat;
    color: #9D9C9C;
    font-size: 16px;
    margin: 0 20px 20px 50px;
 }

 .other-pages {
display: flex;
flex-direction: column;
background-color: #4F64D3;
justify-content: space-around;
width: 40vw;
margin-top: 10vh;
height: 90vh;
background-clip: content-box; 
box-shadow: inset 0 10vh 0 0 #fafafa;
z-index: -1;
}

.other-design {
z-index: 0;
background-color:  #4F64D3;
margin: 0 20px 0 20px;
}

.other-development {
z-index: 0;
background-color:  #4F64D3;
margin: 0 20px 0 20px;
}

.other-marketing {
z-index: 0;
background-color:  #4F64D3;
margin: 0 20px 0 20px;
}

.other-title {
font-family: Gilroy;
color: #fafafa;
margin-bottom: 2vh;
font-size: 26px;
}

.other-text {
font-family: Montserrat;
color: #fafafa;
font-size: 16px;
}

}

@media only screen and (min-width: 820px) 
and (max-width: 1024px) {
 
 display: flex;

    .que-page {
    background-color: #fafafa;
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
    color: #7385E1;
    margin: 0 50px 20px 50px;
    font-size: 26px;
    }
    
.que-row {
    display: flex;
}

.que-text {
    font-family: Montserrat;
    color: #9D9C9C;
    font-size: 16px;
    margin: 0 50px 20px 50px;
 }

 .other-pages {
display: flex;
flex-direction: column;
background-color: #4F64D3;
justify-content: space-around;
width: 80vw;
margin-top: 10vh;
height: 90vh;
background-clip: content-box; 
box-shadow: inset 0 10vh 0 0 #fafafa;
z-index: -1;
}

.other-design {
z-index: 0;
background-color:  #4F64D3;
margin: 0 50px 0 20px;
}

.other-development {
z-index: 0;
background-color:  #4F64D3;
margin: 0 50px 0 20px;
}

.other-marketing {
z-index: 0;
background-color:  #4F64D3;
margin: 0 50px 0 20px;
}

.other-title {
font-family: Gilroy;
color: #fafafa;
margin-bottom: 2vh;
font-size: 26px;
}

.other-text {
font-family: Montserrat;
color: #fafafa;
font-size: 16px;
}

}

@media only screen and (min-width: 1024px) 
and (max-width: 1280px)  {
 
  display: flex;

    .que-page {
    background-color: #fafafa;
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
    color: #7385E1;
    margin: 0 50px 20px 50px;
    font-size: 30px;
    }
    
.que-row {
    display: flex;
}

.que-text {
    font-family: Montserrat;
    color: #9D9C9C;
    font-size: 20px;
    margin: 0 50px 20px 50px;
 }

 .other-pages {
display: flex;
flex-direction: column;
background-color: #4F64D3;
justify-content: space-around;
width: 80vw;
margin-top: 10vh;
background-clip: content-box; 
box-shadow: inset 0 10vh 0 0 #fafafa;
height: 90vh;
z-index: -1;
}

.other-design {
z-index: 0;
background-color:  #4F64D3;
margin: 0 50px 0 20px;
}

.other-development {
z-index: 0;
background-color:  #4F64D3;
margin: 0 50px 0 20px;
}

.other-marketing {
z-index: 0;
background-color:  #4F64D3;
margin: 0 50px 0 20px;
}

.other-title {
font-family: Gilroy;
color: #fafafa;
margin-bottom: 2vh;
font-size: 30px;
}

.other-text {
font-family: Montserrat;
color: #fafafa;
font-size: 20px;
}

}

@media only screen and (min-width: 1280px) 
and (max-width: 1440px)  {
 
  display: flex;

    .que-page {
    background-color: #fafafa;
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
    color: #7385E1;
    margin: 0 50px 20px 50px;
    font-size: 40px;
    }
    
.que-row {
    display: flex;
}

.que-text {
    font-family: Montserrat;
    color: #9D9C9C;
    font-size: 26px;
    margin: 0 50px 20px 50px;
 }

 .other-pages {
display: flex;
flex-direction: column;
background-color: #4F64D3;
justify-content: space-around;
width: 60vw;
padding-top: 10vh;
background-clip: content-box; 
box-shadow: inset 0 10vh 0 0 #fafafa;
height: 90vh;
z-index: -1;
}

.other-design {
z-index: 0;
background-color:  #4F64D3;
margin: 0 50px 0 20px;
}

.other-development {
z-index: 0;
background-color:  #4F64D3;
margin: 0 50px 0 20px;
}

.other-marketing {
z-index: 0;
background-color:  #4F64D3;
margin: 0 50px 0 20px;
}

.other-title {
font-family: Gilroy;
color: #fafafa;
margin-bottom: 2vh;
font-size: 32px;
}

.other-text {
font-family: Montserrat;
color: #fafafa;
font-size: 22px;
}

}


@media screen and (orientation:landscape)
and (min-device-width: 300px) 
and (max-device-width: 568px) {

    .que-page {
        background-color: #fafafa;
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

     .other-pages {
    display: flex;
    flex-direction: row;
    background-color: #4F64D3;
    justify-content: space-around;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    }

.other-design {
    z-index: 0;
    background-color:  #4F64D3;
    margin: 60px 0 0 20px;
}

.other-development {
    z-index: 0;
    background-color:  #4F64D3;
    margin: 60px 20px 0 20px;
}

.other-marketing {
    z-index: 0;
    background-color:  #4F64D3;
    margin: 60px 20px 0 0;
}

.other-title {
    font-family: Gilroy;
    color: #fafafa;
    font-size: 26px;
}

.other-text {
    font-family: Montserrat;
    color: #fafafa;
    font-size: 16px;
}
    
}

@media screen and (orientation:landscape)
and (min-device-width: 568px) 
and (max-device-width: 860px) {

    .que-page {
        background-color: #fafafa;
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
        font-size: 26px;
        margin: 20px 20px 0 20px;
        }
        
    
    
    .que-text {
        font-family: Montserrat;
        color: #9D9C9C;
        font-size: 16px;
        margin: 20px 20px 0 20px;
     }

     .other-pages {
    display: flex;
    flex-direction: row;
    background-color: #4F64D3;
    justify-content: space-around;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    }

.other-design {
    z-index: 0;
    background-color:  #4F64D3;
    margin: 60px 0 0 20px;
}

.other-development {
    z-index: 0;
    background-color:  #4F64D3;
    margin: 60px 20px 0 20px;
}

.other-marketing {
    z-index: 0;
    background-color:  #4F64D3;
    margin: 60px 20px 0 0;
}

.other-title {
    font-family: Gilroy;
    color: #fafafa;
    margin-bottom: 2vh;
    font-size: 26px;
}

.other-text {
    font-family: Montserrat;
    color: #fafafa;
    font-size: 16px;
}
    
}

@media screen and (orientation:landscape)
and (min-device-width: 860px) 
and (max-device-width: 1024px) {

    display: flex;

    .que-page {
        background-color: #fafafa;
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
        font-size: 50px;
        margin: 20px 50px 0 50px;
        }
        
    
    
    .que-text {
        font-family: Montserrat;
        color: #9D9C9C;
        font-size: 30px;
        margin: 50px 50px 0 50px;
     }

     .other-pages {
    display: flex;
    flex-direction: column;
    background-color: #4F64D3;
    justify-content: space-around;
    width: 40vw;
    margin-top: 10vh;
    background-clip: content-box; 
    box-shadow: inset 0 10vh 0 0 #fafafa;
    height: 90vh;
    z-index: -1;
    }

.other-design {
    z-index: 0;
    background-color:  #4F64D3;
    margin: 20px 50px 0 20px;
}

.other-development {
    z-index: 0;
    background-color:  #4F64D3;
    margin: 20px 50px 0 20px;;
}

.other-marketing {
    z-index: 0;
    background-color:  #4F64D3;
    margin: 20px 50px 0 20px;
}

.other-title {
    font-family: Gilroy;
    color: #fafafa;
    margin-bottom: 2vh;
    font-size: 30px;
}

.other-text {
    font-family: Montserrat;
    color: #fafafa;
    font-size: 20px;
}
    
}




`