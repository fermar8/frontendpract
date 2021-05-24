import styled from 'styled-components';

export const DarkSuccess = styled.div`

 display: flex;
 height: 100%;
 flex-direction: column;
 justify-content: space-between;

 .success-div {
     display: flex;
     height: 80vh;
     font-size: 20px;
     flex-direction: column;
     margin: 0 20px 0 20px;
     justify-content: center;
     text-align: center;
     align-items: center;
 }
 .success-text {
     color: white;
 }

 .success-contact {
     margin: 0 20px 20px 20px;
}

 .success-footer {
     color: white;
     font-size: 10px;
 }

@media only screen and (min-width: 1200px) {
    .success-footer {
        font-size: 15px;
    }
    .success-div {
        font-size: 30px;
    }
}

`