import styled, {css} from 'styled-components'
import {degraded} from '../../utils/animations'

export const Header = styled.header`
    display: flex;
    width: 100vw;
    /* position: absolute; */
    z-index: 1000;
    height:20vh;
    /* padding: 0 25px; */
    position: fixed;
    top:0;
`;

export const Logo = styled.h1`
    animation: ${degraded} 6s ease-in-out infinite;
    background: linear-gradient(-25deg,#26F0F1,#b77dfb,#EEFC57);
    background-size: 300%;
    background-clip: text;
    width:50%; 
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 45px;
    padding-left:15px;
    
`;

export const ListContainer = styled.div`
    align-items: center;
    display: flex;
    width:50%;
    justify-content: flex-end;
    padding-right:10px;
`;

export const List = styled.ul`

    @media (max-width: 500px) {
        z-index: 10;
        flex-direction: column;
        justify-content:center;
        list-style: none;
        left: 50%;
        padding : 0;
        position: absolute;
        top: 30vh;
        transform: translate(-50%, -50%);
        overflow: hidden;
        border-radius: 20px;
        
        ${props => props.stateMenu && css`
            width: 85vw;
            transition : all .5s ease;
            padding:15px;
            ${'' /* border: 1px solid rgb(67, 21, 150); */}
        `}
        ${props => !props.stateMenu && css`
            width : 0;
            transition : all .5s ease;
        `}
        &::before{
            content:"";
            position: absolute;
            transition: ${props => props.stateMenu ? 'all .5s ease' : 'none'}; 
            top:0;
            background: rgb(67, 21, 150);
            left :0;
            width: 100%;
            height: 100%;
            filter:blur(30px)
            
        }
        
    }

`;

export const ItemList = styled.li`
    padding:5px;
    font-size: 25px;
    position: relative;
    
    & > a{
        color: white;
        text-decoration: none;
    }
`;
export const Icon = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
    z-index: 1000;

    & > .close{
        border-radius: 100px;
        border: 1px solid rgb(164, 164, 164);
        margin: 15px 5px -30px;
    }
`;