import React, { useEffect } from 'react'
import {FooterInfo } from './styles'
import ScrollReveal from 'scrollreveal'

const Footer = ()=>{
    return(
        <FooterInfo className="footer ">
            <div className="left">KIDOSOFT ℠</div>
            <div className="rigth"><span>Diseñado y construido con mucho cariño</span> 🖤 <span>para apoyar</span><span>a las pequeñas empresas de nuestro Perú</span> 🇵🇪</div>
            {
                useEffect(() => {
                    ScrollReveal().reveal('.up', {
                    reset: true,
                    delay: 500
                    });
                }, [])
            }
        </FooterInfo>
    )
}

export default Footer;