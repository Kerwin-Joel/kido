import styled from 'styled-components'
import {degraded} from '../../utils/animations'

export const FooterInfo = styled.footer`
    margin-top:30px;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(310px,1fr));
    grid-gap:20px;
    justify-items: center;
    align-items: center;
    /* background: linear-gradient(to top, blue, red); W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
    & > .left{
        animation: ${degraded} 6s ease-in-out infinite;
        background: linear-gradient(-45deg,#26F0F1,#b77dfb,#EEFC57);
        background-size: 300%;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    & > .rigth{
        padding:35px;
        padding-top:0;
    }
`