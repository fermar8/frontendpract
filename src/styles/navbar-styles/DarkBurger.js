import styled from 'styled-components';

export const DarkBurger = styled.div `

    width: 30px;
    height: 30px;
    position: fixed;
    top: 15px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 30;
    display: none;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div {
        width: 30px;
        height: 4px;
        background-color: ${({ open }) => open ? 'grey' : 'white'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;


        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'}
        }

        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1}
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'}
        }
        }
    }

 `