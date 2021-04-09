import styled from 'styled-components';


export const LightUl = styled.ul`
        list-style: none;
        display: flex;
        flew-flow: row nowrap;
        
        .theme-select {
            cursor: pointer;
        }

        li {
            margin-left: 20px;
            padding-top: 10px;
        }

    @media only screen and (max-width: 600px){
            flex-flow: column nowrap;
            justify-content: space-around;
            background-color: #fafafa;
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
                color: black;
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
                color: black;
                margin: 50px 0 0 0;
                font-size: 15px;
                font-style: italic;
                font-family: Montserrat;
            }

.contact-text {
                color: black;
                margin-left: 20px;
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
        margin-left: 20px;
        background-color: #fafafa;
        color: black;
        margin: 30px 0 0 20px;
        border: 2px solid black;
        border-radius: 4px;
        height: 30px;
    }
    
    .theme-option-light {
        font-family: FontAwesome, 'Montserrat';
        color: #fafafa;
        background-color: black;
        height: 40px;
        border-radius: 20px;
        font-size: 14px;
        margin: 14px 0 0 14px;

    }

    .theme-option-dark {
        font-family: FontAwesome, 'Montserrat';
        color: black;
        background-color: #fafafa;
        height: 30px;
        font-size: 14px;
    }

}


@media only screen and (min-width: 600px) and (max-width: 1024px)  {
            
            align-items: center;
            flex-flow: column nowrap;
            justify-content: space-around;
            background-color: #fafafa;
            position: fixed; 
            transform: ${({ open })  => open ? 'translateX(0)' : 'translateX(100%)'};
            top: 0;
            z-index: 20;
            font-family: Gilroy;
            font-size: 40px;
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
                float: left;
                width: 100vw;
                align-items: left;
                margin-left: 50px;
            }

            li {
                color: black;
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
                color: black;
                margin: 50px 0 0 0;
                font-size: 20px;
                font-style: italic;
                font-family: Montserrat;
            }

.contact-text {
                color: black;
                margin-left: 20px;
                font-size: 15px;
                font-family: Montserrat;
                text-align: left;
            }

.language-choice {
                color: black;
            }

.theme-select {
        font-family: FontAwesome, 'Montserrat';
        font-size: 20px;
        margin-left: 20px;
        background-color: #fafafa;
        color: black;
        margin: 30px 0 0 20px;
        border: 2px solid black;
        border-radius: 4px;
        height: 45px;
    }
    
    .theme-option-light {
        font-family: FontAwesome, 'Montserrat';
        color: #fafafa;
        background-color: black;
        height: 30px;
        font-size: 14px;
    }

    .theme-option-dark {
        font-family: FontAwesome, 'Montserrat';
        color: black;
        background-color: #fafafa;
        height: 30px;
        font-size: 14px;
    }

}

@media only screen and (min-width: 1024px) and (max-width: 1440px) {
            
            align-items: center;
            flex-flow: column nowrap;
            justify-content: space-around;
            background-color: #fafafa;
            position: fixed; 
            transform: ${({ open })  => open ? 'translateX(0)' : 'translateX(100%)'};
            top: 0;
            z-index: 20;
            font-family: Gilroy;
            font-size: 40px;
            right: 0;
            height: 100vh;
            width: 50vw;
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
                width: 50vw;
                margin-left: 50px;
            }

            li {
                color: black;
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
                color: black;
                margin: 50px 0 0 0;
                font-size: 20px;
                font-style: italic;
                font-family: Montserrat;
            }

.contact-text {
                color: black;
                margin-left: 20px;
                font-size: 15px;
                font-family: Montserrat;
            }

.language-choice {
                color: black;
            }

.theme-select {
        font-family: FontAwesome, 'Montserrat';
        font-size: 20px;
        margin-left: 20px;
        background-color: #fafafa;
        color: black;
        margin: 30px 0 0 20px;
        border: 2px solid black;
        border-radius: 4px;
        height: 45px;
    }
    
    .theme-option-light {
        font-family: FontAwesome, 'Montserrat';
        color: #fafafa;
        background-color: black;
        height: 30px;
        font-size: 14px;
    }

    .theme-option-dark {
        font-family: FontAwesome, 'Montserrat';
        color: black;
        background-color: #fafafa;
        height: 30px;
        font-size: 14px;
    }

}

@media screen and (orientation:landscape)
and (min-device-width: 300px) 
and (max-device-width: 568px) {

            flex-flow: row nowrap;
            justify-content: space-around;
            background-color: #fafafa;
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
                color: black;
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
                color: black;
                margin: 30px 0 0 0;
                font-size: 14px;
                font-style: italic;
                font-family: Montserrat;
            }

.contact-text {
                color: black;
                margin-left: 20px;
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
        margin-left: 20px;
        background-color: #fafafa;
        color: black;
        margin: 30px 0 0 20px;
        border: 2px solid black;
        border-radius: 4px;
        height: 30px;
    }
    
    .theme-option-light {
        font-family: FontAwesome, 'Montserrat';
        color: #fafafa;
        background-color: black;
        height: 30px;
        font-size: 14px;
    }

    .theme-option-dark {
        font-family: FontAwesome, 'Montserrat';
        color: black;
        background-color: #fafafa;
        height: 30px;
        font-size: 14px;
    }

}

@media screen and (orientation:landscape)
and (min-device-width: 568px) 
and (max-device-width: 720px) {

    flex-flow: row nowrap;
            justify-content: space-around;
            background-color: #fafafa;
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
                width: 200px;
                flex-direction: column;
                justify-content: flex-end;
                margin: 0 20px 20px 0;
            }

            li {
                color: black;
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
                color: black;
                margin: 30px 0 0 0;
                font-size: 14px;
                font-style: italic;
                font-family: Montserrat;
            }

.contact-text {
                color: black;
                margin-left: 20px;
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
        margin-left: 20px;
        background-color: #fafafa;
        color: black;
        margin: 30px 0 0 20px;
        border: 2px solid black;
        border-radius: 4px;
        height: 30px;
    }
    
    .theme-option-light {
        font-family: FontAwesome, 'Montserrat';
        color: #fafafa;
        background-color: black;
        height: 30px;
        font-size: 14px;
    }

    .theme-option-dark {
        font-family: FontAwesome, 'Montserrat';
        color: black;
        background-color: #fafafa;
        height: 30px;
        font-size: 14px;
    }

}

@media screen and (orientation:landscape)
and (min-device-width: 720px) 
and (max-device-width: 840px) {

    flex-flow: row nowrap;
            justify-content: space-around;
            background-color: #fafafa;
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
                width: 200px;
                flex-direction: column;
                justify-content: flex-end;
                margin: 0 20px 20px 0;
            }

            li {
                color: black;
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
                color: black;
                margin: 30px 0 0 0;
                font-size: 14px;
                font-style: italic;
                font-family: Montserrat;
            }

.contact-text {
                color: black;
                margin-left: 20px;
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
        margin-left: 20px;
        background-color: #fafafa;
        color: black;
        margin: 30px 0 0 20px;
        border: 2px solid black;
        border-radius: 4px;
        height: 30px;
    }
    
    .theme-option-light {
        font-family: FontAwesome, 'Montserrat';
        color: #fafafa;
        background-color: black;
        height: 30px;
        font-size: 14px;
    }

    .theme-option-dark {
        font-family: FontAwesome, 'Montserrat';
        color: black;
        background-color: #fafafa;
        height: 30px;
        font-size: 14px;
    }

}

@media screen and (orientation:landscape)
and (min-device-width: 840px) 
and (max-device-width: 1024px) {

            flex-flow: row nowrap;
            justify-content: space-around;
            background-color: #fafafa;
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
                width: 300px;
                flex-direction: column;
                justify-content: flex-end;
                margin: 0 50px 50px 0;
            }

            li {
                color: black;
                margin-left: 20px;
                font-size: 50px;
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
                color: black;
                margin: 50px 0 0 0;
                font-size: 20px;
                font-style: italic;
                font-family: Montserrat;
            }

.contact-text {
                color: black;
                font-size: 15px;
                font-family: Montserrat;
                text-align: left;
            }

.language-choice {
                color: black;
            }

.theme-select {
        font-family: FontAwesome, 'Montserrat';
        font-size: 30px;
        margin-left: 20px;
        background-color: #fafafa;
        color: black;
        margin: 30px 0 0 20px;
        border: 2px solid black;
        border-radius: 4px;
        height: 40px;
    }
    
    .theme-option-light {
        font-family: FontAwesome, 'Montserrat';
        color: #fafafa;
        background-color: black;
        height: 30px;
        font-size: 14px;
    }

    .theme-option-dark {
        font-family: FontAwesome, 'Montserrat';
        color: black;
        background-color: #fafafa;
        height: 30px;
        font-size: 14px;
    }

}

`