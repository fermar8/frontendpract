import styled from 'styled-components';


export const DarkUl = styled.ul`
        list-style: none;
        display: flex;
        flew-flow: row nowrap;
        
        li {
            margin-left: 20px;
            padding-top: 10px;
        }

        @media (max-width: 768px) {
            flex-flow: column nowrap;
            justify-content: space-around;
            background-color: black;
            position: fixed; 
            transform: ${({ open })  => open ? 'translateX(0)' : 'translateX(100%)'};
            top: 0;
            z-index: 20;
            font-family: Gilroy;
            font-size: 30px;
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
`