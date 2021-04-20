import React, { useState } from 'react'
import {Link, BrowserRouter as Router} from "react-router-dom";


import {Header,Logo,ListContainer,List,ItemList,Icon} from './styles'
import 'boxicons'

const Menu = () => {

    const [menu, setMenu] = useState(false)

    return(
        
        <Header>
            <Logo className="logo">Kidosof</Logo>
            <ListContainer className="list-menu">
                <Icon onClick={clickMenu}><box-icon name='menu-alt-right' size="70px"></box-icon></Icon>
            </ListContainer>
            <List stateMenu={menu} className={menu}>
                <Icon><box-icon onClick={clickMenu} class='close' name='x' size="md" color="white"></box-icon></Icon>
                <ItemList><Link to="/">Home</Link></ItemList>
                <ItemList><Link to="/clientes">Clientes</Link></ItemList>
                <ItemList><Link to="/servicios">Servicios</Link></ItemList>
                <ItemList><Link to="/nosotros">Nosotros</Link></ItemList>
            </List>
        </Header>
    )

    function clickMenu(){
        setMenu(!menu)
        console.log(menu)
    }
}


export default Menu