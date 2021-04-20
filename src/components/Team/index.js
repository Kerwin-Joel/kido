import React, { useEffect } from 'react'
import {Container,Section,Aside} from './styles'
import { Rocket } from './rocket/index'
import ScrollReveal from 'scrollreveal'


export const Team = ()=>{
    return(
        <Container>
            <Section className="up">
                <h1>El equipo de Kidosoft es un equipo multidiciplinario que esta conformada por un gran equipo de diseñadores, programadadores y nuestros asesores con una gran experiencia que hacen su mejor esfuerzo para ayudar a crecer a las pequeñas empresas.</h1>
                <Rocket/>
            </Section>
            <Aside className="up">
                <h2>Nuestra meta es brindarte las herramientas para el depegue de tu negocio.</h2>
                <video autoPlay={true} loop={true}>
                    <source src="https://kerwin-joel.github.io/Kidosoft/img/video.mp4"  type="video/mp4"/>
                </video>
            </Aside>
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