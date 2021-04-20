import React, { useEffect } from 'react'
import {Container,Title,CustomersList,Section,Image} from './styles'
import {Button} from '../../utils/buttons'
import ScrollReveal from 'scrollreveal'

export const Customers = () => {
    return (
        <Container>
            <Title className="up">
                <h1>Nuestros principales socios confian en nosotros.</h1>
                <Button href="/">obtener promocion</Button>
            </Title>
            <CustomersList className="up">
                <li><a href=""><Image src="https://raw.githubusercontent.com/Kerwin-Joel/Kidosoft/4fe12605b9f5e576fbeb691a4a28b464d11fec78/img/img1.svg" alt=""/></a></li>
                <li><a href=""><Image src="https://raw.githubusercontent.com/Kerwin-Joel/Kidosoft/4fe12605b9f5e576fbeb691a4a28b464d11fec78/img/img1.svg" alt=""/></a></li>
                <li><a href=""><Image src="https://raw.githubusercontent.com/Kerwin-Joel/Kidosoft/4fe12605b9f5e576fbeb691a4a28b464d11fec78/img/img1.svg" alt=""/></a></li>
                <li><a href=""><Image src="https://raw.githubusercontent.com/Kerwin-Joel/Kidosoft/4fe12605b9f5e576fbeb691a4a28b464d11fec78/img/img1.svg" alt=""/></a></li>
                <li><a href=""><Image src="https://raw.githubusercontent.com/Kerwin-Joel/Kidosoft/4fe12605b9f5e576fbeb691a4a28b464d11fec78/img/img1.svg" alt=""/></a></li>
                <li><a href=""><Image src="https://raw.githubusercontent.com/Kerwin-Joel/Kidosoft/4fe12605b9f5e576fbeb691a4a28b464d11fec78/img/img1.svg" alt=""/></a></li>
            </CustomersList>
            <Section className="up">
                <h1>
                    Es un hecho establecido hace demasiado tiempo 
                    que un lector se distraerá con el contenido 
                    del texto de un sitio mientras que mira su diseño.
                </h1>
                <Image src="https://raw.githubusercontent.com/Kerwin-Joel/Kidosoft/4fe12605b9f5e576fbeb691a4a28b464d11fec78/img/img1.svg" alt=""/>
            </Section>
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
}