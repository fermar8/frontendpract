import styled from 'styled-components';


export const DarkUl = styled.ul`
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

        .columna-ul {
            height: 100vh;
            width: 100%;
            background-color: #0F0F0F;
        }


            .links-group {
                display: flex;
                flex-direction: column;
                justify-content: center;
                background-color: #0F0F0F;
                height: 100vh;
                width: 100vw;
            }

            .no-margin {
                margin: 0px !important;
                padding: 0px !important;
                
            }

            .contact {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                padding-bottom: 8px;
            }

            li {
                color: white;
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
                color: white;
                margin: 50px 0 0 0;
                font-size: 15px;
                font-style: italic;
                font-family: Montserrat;
            }

.contact-text {
                color: white;
                font-size: 10px;
                font-family: Montserrat;
                text-align: left;
            }

.language-choice {
                color: white;
            }

.theme-select {
        font-family: FontAwesome, 'Montserrat';
        font-size: 14px;
        background-color: #0F0F0F;
        color: white;
        border: 2px solid white;
        border-radius: 4px;
        height: 30px;
    }
    
    .theme-option-dark {
        font-family: FontAwesome, 'Montserrat';
        color: #0F0F0F;
        background-color: #fafafa;
        width: 40px;
        margin-left: 16px;
        z-index: -1;
        height: 40px;
        border-radius: 20px;
        font-size: 18px;
    }




`