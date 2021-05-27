import styled from 'styled-components'; 

export const LightContact = styled.div`
@media only screen and (max-width: 320px) {
display: flex;
flex-direction: column;
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
    color: #0F0F0F;
    margin-bottom: 10px;
    font-size: 26px;
    font-family: 'Gilroy';
    text-align: center;
}
.form-control {
    width: 80vw;
    height: 30px;
    margin: 4px 0px 4px 0px;
    font-size: 16px;
    font-family: FontAwesome, 'Montserrat';
    border-radius: 6px;
}
.form-textarea {
    width: 80vw;
    height: 140px;
    max-height: 200px;
    font-size: 16px;
    margin: 4px 0px 4px 0px;
    font-family: FontAwesome, 'Montserrat';
    border-radius: 6px;
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
.error-text {
    color: red;
    font-family: 'Montserrat';
    font-size: 10px;
    margin-bottom: 6px;
}
.btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fafafa;
    color: #0F0F0F;
    border: 2px solid #0F0F0F;
    float: right;
    font-family: 'Gilroy';
    font-size: 20px;
    width: 40vw;
    margin-top: 4px;
}
}
@media only screen and (min-width: 320px) and (max-width: 600px){
display: flex;
flex-direction: column;
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
    color: #0F0F0F;
    margin-bottom: 10px;
    font-size: 30px;
    font-family: 'Gilroy';
    text-align: center;
}
.form-control {
    width: 80vw;
    height: 35px;
    margin: 4px 0px 4px 0px;
    font-size: 20px;
    font-family: FontAwesome, 'Montserrat';
    border-radius: 6px;
}
.form-textarea {
    width: 80vw;
    height: 25vh;
    max-height: 120px;
    font-size: 20px;
    margin: 4px 0px 4px 0px;
    font-family: FontAwesome, 'Montserrat';
    border-radius: 6px;
}

.contact-footer {
    margin: 20px 0 20px 20px;
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
.error-text {
    color: red;
    font-family: 'Montserrat';
    font-size: 12px;
    margin-bottom: 10px;
}
.btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fafafa;
    color: #0F0F0F;
    border: 2px solid #0F0F0F;
    float: right;
    font-family: 'Gilroy';
    font-size: 30px;
    width: 50vw;
    height: 50px;
    margin-top: 4px;
}
}
@media only screen and (min-width: 600px)  {
display: flex;
flex-direction: column;
height: 100%;
justify-content: space-between;
.contact-form {
    height: 80vh;
    margin: 50px 50px 0 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.contact-title {
    color: #0F0F0F;
    margin-bottom: 20px;
    font-size: 50px;
    font-family: 'Gilroy';
    text-align: center;
}
.form-control {
    width: 60vw;
    height: 40px;
    margin: 8px 0px 8px 0px;
    font-size: 30px;
    font-family: FontAwesome, 'Montserrat';
    border-radius: 6px;
}
.form-textarea {
    width: 60vw;
    height: 25vh;
    max-height: 200px;
    font-size: 30px;
    margin: 8px 0px 8px 0px;
    font-family: FontAwesome, 'Montserrat';
    border-radius: 6px;
}

.contact-footer {
    margin: 40px 0 40px 20px;
}
.contact-text {
    color: #0F0F0F;
    font-size: 15px;
}
.button-div {
    width: 60vw;
    float: right;
    align-self: right;
}
.error-text {
    color: red;
    font-family: 'Montserrat';
    font-size: 12px;
    margin-bottom: 10px;
}
.btn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fafafa;
    color: #0F0F0F;
    border: 2px solid #0F0F0F;
    float: right;
    font-family: 'Gilroy';
    font-size: 35px;
    width: 30vw;
    height: 60px;
    margin-top: 8px;
 }
}
`