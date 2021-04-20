import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

import {Button} from '../../utils/buttons'
import {Container,
        Principal,
        ContainerCarrousel,
        Carrousel,
        Item,
        Image,
        Title,
        Description,
        Left,
        Right,
        TopDescription,
        BottomDescription,
        Benefits
} from './styles'

export const Main = ()=>{
    

    return(
        <Container >
            <Principal className="up" >
                <h1>
                    Te ayudamos a digitalizar 
                    tu negocio con valiosas 
                    herramientas para su equipo
                    y satisfacción a sus clientes.
                </h1>
                
                <Button href="/">obtener promocion</Button>
                <div className="wave-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,181.3C672,181,768,235,864,234.7C960,235,1056,181,1152,138.7C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
            </Principal>
            <ContainerCarrousel className="up">
                <div>
                    <Title><span>Desarrollamos</span> sistemas y aplicaciones a medida</Title>
                    <Carrousel>
                        <Item>
                            <Image src="https://raw.githubusercontent.com/Kerwin-Joel/Kidosoft/4fe12605b9f5e576fbeb691a4a28b464d11fec78/img/img1.svg"  alt="" />
                        </Item>
                        <Item>
                            <Image src="https://raw.githubusercontent.com/Kerwin-Joel/Kidosoft/4fe12605b9f5e576fbeb691a4a28b464d11fec78/img/img1.svg"  alt="" />
                        </Item>
                        <Item>
                            <Image src="https://raw.githubusercontent.com/Kerwin-Joel/Kidosoft/4fe12605b9f5e576fbeb691a4a28b464d11fec78/img/img1.svg"  alt="" />
                        </Item>
                        <Item>
                            <Image src="https://raw.githubusercontent.com/Kerwin-Joel/Kidosoft/4fe12605b9f5e576fbeb691a4a28b464d11fec78/img/img1.svg"  alt="" />
                        </Item>
                        <Item>
                            <Image src="https://raw.githubusercontent.com/Kerwin-Joel/Kidosoft/4fe12605b9f5e576fbeb691a4a28b464d11fec78/img/img1.svg"  alt="" />
                        </Item>
                        <Item>
                            <Image src="https://raw.githubusercontent.com/Kerwin-Joel/Kidosoft/4fe12605b9f5e576fbeb691a4a28b464d11fec78/img/img1.svg"  alt="" />
                        </Item>
                        <Item>
                            <Image src="https://raw.githubusercontent.com/Kerwin-Joel/Kidosoft/4fe12605b9f5e576fbeb691a4a28b464d11fec78/img/img1.svg"  alt="" />
                        </Item>
                        <Item>
                            <Image src="https://raw.githubusercontent.com/Kerwin-Joel/Kidosoft/4fe12605b9f5e576fbeb691a4a28b464d11fec78/img/img1.svg"  alt="" />
                        </Item>
                    </Carrousel>
                </div>
            </ContainerCarrousel>

            <Description className="up">
                <Left>
                    <TopDescription>
                        <h1>El futuro es digital</h1>
                        <p>Descripcion de un negocio tecnologico y pues no hay pierde en un negocio digital.</p>
                    </TopDescription>
                    <BottomDescription>
                        <h1>Equipos contentos</h1>
                        <p>La tecnologia hace lo rutinario mientras que tu equipo innova y crece contigo.</p>
                    </BottomDescription>
                </Left>
                <Right>
                    <img src="https://images.unsplash.com/photo-1579205149708-f5b24c5a04e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1595&q=80" alt="Imagen"/>
                    <div>
                        <h1>Un negocio digital es más productivo y eficiente.</h1>
                        <span>Diana, directora creativa en KIDOSOFT.</span>
                    </div>
                </Right>
            </Description>
            
            <Benefits className="up">
                <h1 class="promotion__title">Accede a los beneficios empresariales. </h1>
                <p class="promotion__subTitle">Comunicate con nuestros asesores para ayudarte a crecer.</p>
                <Button  class="btn promotion__btn" href="https://twitter.com/home?lang=es">Obtener Promoción</Button>
            </Benefits>
            {
                useEffect(() => {
                    ScrollReveal().reveal('.up', {
                    reset: true,
                    delay: 500
                    });
                }, [])
            }
        </Container>
        
    )
    // {ScrollReveal().reveal('.up', { delay: 600, reset: true, desktop: true })}


}