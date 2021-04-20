import React, { useEffect } from 'react'
import {Container,SectionOne,SectionTwo,Plans} from './styles'
import {Button} from '../../utils/buttons'
import ScrollReveal from 'scrollreveal'

export const WorkService = ()=>{
    return(
        <Container>
            <SectionOne className="up">
                <h2>
                    Aplicaciones web de facil uso y con gran impacto positivo.
                </h2>
                <img src="https://kerwin-joel.github.io/Kidosoft/img/team.svg" alt=""/>
            </SectionOne>
            <SectionTwo className="up">
                <h2>
                    Manten registro de tu negocio en una sola plataforma sin complicaciones.
                </h2>
                <img src="https://kerwin-joel.github.io/Kidosoft/img/team.svg" alt=""/>
            </SectionTwo>
            <Plans >
                <h1>Transforma tu negocio con nuestros planes empresariales:</h1>
                <section class="prices">
                    <div className="prices__bronce up" >
                        <div class="wave wave-1"></div>
                        <div class="wave wave-2"></div>
                        <div class="wave wave-3"></div>
                        <div class="prices__img">
                            <img src="https://kerwin-joel.github.io/Kidosoft/img/bronce.svg"/>
                        </div>
                        <div class="prices__description">
                            <h3 class="prices__name">Bronce</h3>
                            <p class="prices__overwiev">Vista general del plan plata , una pequeña descripcion</p>
                            <ul class="prices__list">
                                <li>🚀 Facil acceso</li>
                                <li>🤖 Segundo punto</li>
                                <li>🚀 Tercer punto de la lista</li>
                                <li>🤖 Cuarto punto del plan plata</li>
                            </ul>
                        </div>
                        <div class="prices__line"></div>
                        <div class="prices__price">
                            <h3 class="prices__amount">S/ 69.00 / Mes</h3>
                            <Button class="btn  prices__button" href="#">Suscribirme</Button>
                        </div>
                    </div>
                    <div className="prices__plata up">
                        <div class="wave wave-1"></div>
                        <div class="wave wave-2"></div>
                        <div class="wave wave-3"></div>
                        <div class="prices__img">
                            <img src="https://kerwin-joel.github.io/Kidosoft/img/plata.svg"/>
                        </div>
                        <div class="prices__description">
                            <h3 class="prices__name">Plata</h3>
                            <p class="prices__overwiev">Vista general del plan plata , una pequeña descripcion</p>
                            <ul class="prices__list">
                                <li>🚀 Facil acceso</li>
                                <li>🤖 Segundo punto</li>
                                <li>🚀 Tercer punto de la lista</li>
                                <li>🤖 Cuarto punto del plan plata</li>
                            </ul>
                        </div>
                        <div class="prices__line"></div>
                        <div class="prices__price">
                            <h3 class="prices__amount">S/ 79.00 / Mes</h3>
                            <Button class="btn  prices__button" href="#">Suscribirme</Button>
                        </div>
                    </div>
                    <div className="prices__oro up">
                        <div class="wave wave-1"></div>
                        <div class="wave wave-2"></div>
                        <div class="wave wave-3"></div>
                        <div class="prices__img">
                            <img src="https://kerwin-joel.github.io/Kidosoft/img/oro.svg"/>
                        </div>
                        <div class="prices__description">
                            <h3 class="prices__name">Oro</h3>
                            <p class="prices__overwiev">Vista general del plan plata , una pequeña descripcion</p>
                            <ul class="prices__list">
                                <li>🚀 Facil acceso</li>
                                <li>🤖 Segundo punto</li>
                                <li>🚀 Tercer punto de la lista</li>
                                <li>🤖 Cuarto punto del plan plata</li>
                            </ul>
                        </div>
                        <div class="prices__line"></div>
                        <div class="prices__price">
                            <h3 class="prices__amount">S/ 99.00 / Mes</h3>
                            <Button class="btn  prices__button" href="#">Suscribirme</Button>
                        </div>
                    </div>

                </section>
            </Plans>
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