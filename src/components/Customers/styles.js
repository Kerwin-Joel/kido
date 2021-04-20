import styled from 'styled-components'

export const Container = styled.div`

`;

export const Title = styled.div`
    padding: 0 30px;
    font-size: 15px;
    text-align:center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const CustomersList = styled.ul`
    list-style-type: none;
    margin: 30px 0 0 0;
    padding: 0;
    & > li{
        margin-bottom: 40px;
    }

`;

export const Section = styled.section`
    padding: 0 30px;
`;

export const Image = styled.img`
    width: 200px;
    height: 200px;
`;
