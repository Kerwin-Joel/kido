import {keyframes} from 'styled-components'

export const degraded = keyframes`
    {
        0% { background-position: 0 50% }
        50% { background-position: 100% 50% }
        100% { background-position: 0 50% }
    }
`

export const scroll = keyframes`
    {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-250px * 7))}
    }
`