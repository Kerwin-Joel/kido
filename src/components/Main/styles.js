import styled from 'styled-components'
import {scroll,degraded} from '../../utils/animations'

export const Container = styled.div`
    position: relative;
`;
export const Principal = styled.div`
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > h1{
        padding-bottom: 30px;
        padding-left: 12%;
        padding-right: 12%;
        font-size: 25px;
    }
    & > .wave-container{
        position: absolute;
        width: 99.9vw;
        overflow: hidden;
        z-index: 1;
        bottom: 0;
        
        & > svg{
            bottom: -3px;
            position: relative;
        }
    }
`;

export const Image = styled.img`
    width: 200px;
    height: 200px;
`;

export const Carrousel = styled.div`
    animation: ${scroll} 30s linear infinite;
    display: flex;
    width: calc(200px * 4);
    margin-top: 5rem;
`;

export const Item = styled.div`
    width: 200px;
    height: 200px;
`;
export const Title = styled.h3`
    text-align: center;
    font-size: 20px;
    margin-left: 12%;
    margin-right: 12%;
`;

export const ContainerCarrousel = styled.div`
    margin: auto;
	overflow:hidden;
    position: relative;
    height: 25rem;
    span{
        animation: ${degraded} 6s ease-in-out infinite;
        background: linear-gradient(-45deg,#26F0F1,#b77dfb,#EEFC57);
        background-size: 300%;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
	
	&::before,
	&::after {
		background: linear-gradient(to right,  black 0%,rgba(255,255,255,0) 5rem);
		content: "";
        position: absolute;
		height: 100%;
		width: 20rem;
		z-index: 21;
	}
	
	&::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}

	&::before {
		left: 0;
		top: 0;
	}
`;

export const Description = styled.section`
`;

export const Left = styled.div`
    padding: 80px 25px;
    font-size : 20px;
    display: flex;
    flex-direction : column;
    text-align:initial;


    & > p{
        font-size : 10px;
    }

`;

export const TopDescription = styled.div`
    margin-bottom: 40px;

`;
export const BottomDescription = styled.div`
    & > h1{
        font-size: 15px;
    text-align: initial;
    }
    
`;

export const Right = styled.div`
    display: grid;
    grid-template-columns: repeat(6,1fr);
    margin: 20px 25px;
    & > img{
        border-radius:100px;
        width:80px;
        height:80px;
        grid-column: 1/2;
        margin-right: 25px;
        align-self: center;
    }
    & > div{
        font-size: 15px;
        text-align: initial;
        grid-column: 2/7;
        justify-self: start;

        & > span{
            display: block;
            width: 100%;
            font-size: 13px;
            font-weight: bold;
        }
        & > h1{
            margin: auto;
            margin-bottom: 10px;
        }

    }
    
`;

export const Benefits = styled.div`
    padding: 0 25px;
    margin: 80px 0;
    & > h1{
        font-size: 25px;
    }
    & > p{
        padding: 15px 30px;
    }
`;


