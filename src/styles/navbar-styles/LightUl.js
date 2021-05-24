import styled from 'styled-components';


export const LightUl = styled.ul`
        list-style: none;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        position: fixed; 
        transform: ${({ open })  => open ? 'translateX(0)' : 'translateX(100%)'};
        z-index: 20;
        font-family: Gilroy;
        font-size: 26px;
        width: 100%;
        
        transition: transform 0.3s ease-in-out;
        
        .theme-select {
            cursor: pointer;
        }

        .links-group {
                display: flex;
                flex-direction: column;
                justify-content: center;
                background-color: #fafafa;
                height: 100vh;
                width: 100vw;
        }

        .columna-ul {
            height: 100vh;
            width: 100%;
            background-color: #fafafa;
        }

        .no-margin {
            margin: 0px !important;
            padding: 0px !important;
            
        }

        .transparent {
            background-color: #fafafa;
        }
            

            .contact {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                padding-bottom: 8px;
            }

            li {
                color: black;
                margin: 10px 0 0 20px;
            }

            .portfoli {
                text-decoration: line-through;
            }

            .links {
                text-decoration: none;
            }

            .row-div {
                display: flex;
                flex-flow: row nowrap;
            }

            .coming-soon {
                text-align: center;
                color: black;
                margin: 50px 0 0 0;
                font-size: 15px;
                font-style: italic;
                font-family: Montserrat;
            }

.contact-text {
                color: black;
                font-size: 10px;
                font-family: Montserrat;
                text-align: left;
            }

.language-choice {
                color: black;
            }

.theme-select {
        font-family: FontAwesome, 'Montserrat';
        font-size: 14px;
        background-color: #fafafa;
        color: black;
        border: 2px solid black;
        border-radius: 4px;
        height: 30px;
    }
    
    .theme-option {
        font-family: FontAwesome, 'Montserrat';
        color: #fafafa;
        background-color: black;
        width: 40px;
        margin-left: 16px;
        z-index: -1;
        height: 40px;
        border-radius: 20px;
        font-size: 18px;
    }



`