import styled from 'styled-components'

export const Container = styled.section`
    padding: 0 20px;

`;

export const SectionOne = styled.section`
    margin-bottom: 80px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > img{
        width: 300px;
        height: 300px;
    }
    & > h2{
        margin-top: 80px;
    }
`;

export const SectionTwo = styled.section`
    margin-bottom: 150px;
    & > img{
        width: 300px;
        height: 300px;
    }
`;

export const Plans = styled.div`
    .prices{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(290px,1fr));
    grid-gap: 5rem;

    &__plata,&__bronce,&__oro{
        position:relative;
        border-radius: 3.5rem;
        overflow: hidden;
        box-shadow: 0 2px 30px 10px rgba(125, 88, 194, 0.3);
        margin: 0 10px;
        
        & > .wave{
            position: absolute;
            width: 28rem;
            height: 28rem;
            background-color: rgba(67, 21, 150, 0.95);
            border-radius: 40%;
            margin-left: -70px;
            margin-top: -170px;
            opacity: .9;
            z-index: 1;
            animation:waveMov 7s infinite linear;
            &-2{
                background-color: rgba(67, 21, 150, 0.95);
                opacity: .4;
                animation:waveMov 11s infinite linear;
            }
            &-3{
                background-color: rgba(67, 21, 150, 0.95);
                opacity: .1;
                animation:waveMov 9s infinite linear;
            }

            @keyframes waveMov {
                from{
                    transform: rotate(360deg)
                }
            }
        }
    }
    &__plata {
        margin: 0;
    }
    &__img{
        & > img{
            display:block;
            width:70%;
            height: 10rem;
            margin: 0 auto;
            padding-top: 2rem;
            z-index: 2;
            position: relative;
        }
    }
    &__name{
        text-align: center;
        position: relative;
        z-index: 2;
    }
    &__line{
        margin: auto;
        width: 80%;
        height: .1rem;
        background-color: white;
        margin-bottom: .8rem;

    }
    &__overwiev{
        padding: 0 3rem;
        text-align: center;
        color: $color-grey-light-1;
        position: relative;
        z-index: 2;

    }
    &__list{
        text-align: center;
        list-style: none;
        display:flex;
        flex-direction: column;
        color: $color-grey-light-1;
        padding:0;
        margin:0;
    }
    &__price{
        text-align: center;
        margin-bottom:1rem;
    }
}
.title{
    margin: 5rem;
    text-align: center;
    margin-top: 10rem;
}

`;
