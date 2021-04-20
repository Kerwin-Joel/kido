import styled from 'styled-components'


export const Button = styled.a`
    background-color: #26F0F1;
    border-radius: 3rem;
    padding: 1.5rem 2rem;
    text-decoration: none;
    text-transform:uppercase;
    font-weight:bold;
    display: inline-block;
    transition: all .2s;
    position: relative;
    margin: 0 auto;

    &:hover{
        transform: translateY(-3px);
        color: blue;
        box-shadow: 0 5px 15px rgba(188, 73, 255, 0.541);
    }
    &:active{
        transform: translateY(.1rem);
        box-shadow: 0 5px 12px rgba(188, 73, 255, 0.541);
    }
`;
