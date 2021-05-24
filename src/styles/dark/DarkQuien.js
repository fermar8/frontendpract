import styled from 'styled-components';

export const DarkQuien = styled.div`

.quien-page {

    background-color: #BA5116;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    height: 100vh;
    width: 100%;
    border: none;
    outline: none;
    }

    .quien-title {
    font-family: Gilroy;
    color: #fafafa;
    margin: 20px 0 0 20px;
    }

    .quien-text {
    font-family: Montserrat;
    color: #9D9C9C;
    margin: 20px 20px 0 20px;
    }

    @media only screen and (max-width: 576px) {
    .quien-title {
        font-size: 26px;
    }
    .quien-text {
        font-size: 16px;
    }

  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    .quien-title {
        font-size: 30px;
    }
    .quien-text {
        font-size: 20px;
    }
}

 @media only screen and (min-width: 768px) and (max-width: 992px) {
    .quien-title {
        font-size: 30px;
    }
    .quien-text {
        font-size: 20px;
    }
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
    .quien-title {
        font-size: 40px;
    }
    .quien-text {
        font-size: 30px;
    }
}

@media only screen and (min-width: 1200px) and (max-width: 1468px){
    .quien-title {
        font-size: 40px;
    }
    .quien-text {
        font-size: 30px;
    }
}

@media only screen and (min-width: 1468px){
    .quien-title {
        font-size: 75px;
    }
    .quien-text {
        font-size: 40px;
    }
}

`