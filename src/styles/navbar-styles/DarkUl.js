import styled from 'styled-components';


export const DarkUl = styled.ul`
        list-style: none;
        display: flex;
        flew-flow: row nowrap;


        li {
            margin-left: 20px;
            padding-top: 10px;
        }

        @media (min-width: 0px) {
            flex-flow: column nowrap;
            justify-content: space-around;
            background-color: black;
            position: fixed; 
            transform: ${({ open })  => open ? 'translateX(0)' : 'translateX(100%)'};
            top: 0;
            z-index: 20;
            font-family: Gilroy;
            font-size: 26px;
            right: 0;
            height: 100vh;
            width: 100vw;
            padding: 3.5rem 0 0 0;
            transition: transform 0.3s ease-in-out;

            .menu-main {
                display: flex;
                justify-content: space-between;
            }

            .contact {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                padding-bottom: 8px;
            }

            li {
                color: white;
                margin-left: 20px;
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
                margin-left: 20px;
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
        margin-left: 20px;
        background-color: black;
        color: white;
        margin: 30px 0 0 20px;
        border: 2px solid white;
        border-radius: 4px;
        height: 30px;
    }
    
    .theme-option-light {
        font-family: FontAwesome, 'Montserrat';
        color: black;
        background-color: white;
        height: 30px;
        font-size: 14px;
    }

    .theme-option-dark {
        font-family: FontAwesome, 'Montserrat';
        color: white;
        background-color: black;
        height: 30px;
        font-size: 14px;
    }

}

@media screen and (orientation:landscape)
and (min-device-width: 300px) 
and (max-device-width: 568px) {

            flex-flow: row nowrap;
            justify-content: space-around;
            background-color: black;
            position: fixed; 
            transform: ${({ open })  => open ? 'translateX(0)' : 'translateX(100%)'};
            top: 0;
            z-index: 20;
            font-family: Gilroy;
            font-size: 26px;
            right: 0;
            height: 100vh;
            width: 100vw;
            padding: 0 0 0 0;
            transition: transform 0.3s ease-in-out;

            .menu-main {
                display: flex;
                justify-content: space-between;
            }

            .contact {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                margin: 0 20px 20px 0;
            }

            li {
                color: white;
                margin-left: 20px;
            }

            .portfoli {
                text-decoration: line-through;
            }

            .links {
                text-decoration: none;
            }
            
            .links-group {
                margin-top: 20px;
            }

            .row-div {
                display: flex;
                flex-flow: row nowrap;
            }

            .coming-soon {
                text-align: center;
                color: white;
                margin: 30px 0 0 0;
                font-size: 14px;
                font-style: italic;
                font-family: Montserrat;
            }

.contact-text {
                color: white;
                margin-left: 20px;
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
        margin-left: 20px;
        background-color: black;
        color: white;
        margin: 30px 0 0 20px;
        border: 2px solid white;
        border-radius: 4px;
        height: 30px;
    }
    
    .theme-option-light {
        font-family: FontAwesome, 'Montserrat';
        color: black;
        background-color: white;
        height: 30px;
        font-size: 14px;
    }

    .theme-option-dark {
        font-family: FontAwesome, 'Montserrat';
        color: white;
        background-color: black;
        height: 30px;
        font-size: 14px;
    }

}

@media screen and (orientation:landscape)
and (min-device-width: 568px) 
and (max-device-width: 720px) {

            flex-flow: row nowrap;
            justify-content: space-around;
            background-color: black;
            position: fixed; 
            transform: ${({ open })  => open ? 'translateX(0)' : 'translateX(100%)'};
            top: 0;
            z-index: 20;
            font-family: Gilroy;
            font-size: 26px;
            right: 0;
            height: 100vh;
            width: 100vw;
            padding: 0 0 0 0;
            transition: transform 0.3s ease-in-out;

            .menu-main {
                display: flex;
                justify-content: space-between;
            }

            .contact {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                margin: 0 20px 20px 0;
            }

            li {
                color: white;
                margin-left: 20px;
                font-size: 30px;
            }

            .portfoli {
                text-decoration: line-through;
            }

            .links {
                text-decoration: none;
            }
            
            .links-group {
                margin-top: 20px;
            }

            .row-div {
                display: flex;
                flex-flow: row nowrap;
            }

            .coming-soon {
                text-align: center;
                color: white;
                margin: 30px 0 0 0;
                font-size: 14px;
                font-style: italic;
                font-family: Montserrat;
            }

.contact-text {
                color: white;
                margin-left: 20px;
                font-size: 10px;
                font-family: Montserrat;
                text-align: left;
            }

.language-choice {
                color: white;
            }

.theme-select {
        font-family: FontAwesome, 'Montserrat';
        font-size: 20px;
        margin-left: 20px;
        background-color: black;
        color: white;
        margin: 30px 0 0 20px;
        border: 2px solid white;
        border-radius: 4px;
        height: 30px;
    }
    
    .theme-option-light {
        font-family: FontAwesome, 'Montserrat';
        color: black;
        background-color: white;
        height: 30px;
        font-size: 14px;
    }

    .theme-option-dark {
        font-family: FontAwesome, 'Montserrat';
        color: white;
        background-color: black;
        height: 30px;
        font-size: 14px;
    }

}

@media screen and (orientation:landscape)
and (min-device-width: 720px) 
and (max-device-width: 840px) {

            flex-flow: row nowrap;
            justify-content: space-around;
            background-color: black;
            position: fixed; 
            transform: ${({ open })  => open ? 'translateX(0)' : 'translateX(100%)'};
            top: 0;
            z-index: 20;
            font-family: Gilroy;
            font-size: 26px;
            right: 0;
            height: 100vh;
            width: 100vw;
            padding: 0 0 0 0;
            transition: transform 0.3s ease-in-out;

            .menu-main {
                display: flex;
                justify-content: space-between;
            }

            .contact {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                margin: 0 20px 20px 0;
            }

            li {
                color: white;
                margin-left: 20px;
                font-size: 30px;
            }

            .portfoli {
                text-decoration: line-through;
            }

            .links {
                text-decoration: none;
            }
            
            .links-group {
                margin-top: 40px;
            }

            .row-div {
                display: flex;
                flex-flow: row nowrap;
            }

            .coming-soon {
                text-align: center;
                color: white;
                margin: 30px 0 0 0;
                font-size: 14px;
                font-style: italic;
                font-family: Montserrat;
            }

.contact-text {
                color: white;
                margin-left: 20px;
                font-size: 10px;
                font-family: Montserrat;
                text-align: left;
            }

.language-choice {
                color: white;
            }

.theme-select {
        font-family: FontAwesome, 'Montserrat';
        font-size: 20px;
        margin-left: 20px;
        background-color: black;
        color: white;
        margin: 30px 0 0 20px;
        border: 2px solid white;
        border-radius: 4px;
        height: 30px;
    }
    
    .theme-option-light {
        font-family: FontAwesome, 'Montserrat';
        color: black;
        background-color: white;
        height: 30px;
        font-size: 14px;
    }

    .theme-option-dark {
        font-family: FontAwesome, 'Montserrat';
        color: white;
        background-color: black;
        height: 30px;
        font-size: 14px;
    }

}

`