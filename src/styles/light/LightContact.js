import styled from 'styled-components'; 

export const LightContact = styled.div`

display: flex;
flex-direction: column;
background-color: white;
height: 100%;
justify-content: space-between;

.contact-form {
    height: 80vh;
    margin: 20px 20px 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.contact-title {
    color: white;
    margin-bottom: 10px;
    font-size: 30px;
    font-family: 'Gilroy';
    text-align: center;
}
.form-control {
    width: 80vw;
    height: 40px;
    margin: 4px 0px 4px 0px;
    font-size: 20px;
    font-family: FontAwesome, 'Montserrat';
    border-radius: 6px;
}
.form-textarea {
    width: 80vw;
    height: 160px;
    max-height: 200px;
    font-size: 20px;
    margin: 4px 0px 4px 0px;
    font-family: FontAwesome, 'Montserrat';
    border-radius: 6px;
}
.contact-footer {
    margin: 0 20px 20px 20px;
}
.contact-text {
    color: #0F0F0F;
    font-size: 10px;
}

.button-div {
    width: 80vw;
    float: right;
    align-self: right;
}

.btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    color: #0F0F0F;
    border: 2px solid #0F0F0F;
    float: right;
    font-family: 'Gilroy';
    font-size: 20px;
    width: 40vw;
    margin-top: 4px;
}

`