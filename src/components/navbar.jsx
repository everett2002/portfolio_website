import React from 'react'
import NavbarElementCollapsible from './navbarelementcollapsible';
import NavbarElement from './navbarelement';

const navbar = ({showCollapsible}) => {
    return (
        <nav className='navbar'>
            <NavbarElement title='About' link='./App.css#about' />
            <NavbarElement title='Projects' link='./App.css#projects' />
            <NavbarElementCollapsible title={<i class="fa-solid fa-bars fa-2x"></i>} showCollapsible={showCollapsible} />
            {/* <NavbarElement title={<i class="fa-solid fa-circle-half-stroke fa-2x"></i>} /> */}
            
            
        </nav>
    )
}

export default navbar