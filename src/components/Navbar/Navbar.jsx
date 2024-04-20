import { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav-Responsive/MobileNav';

const Navbar = () => {

    const [ openMenu, setOpenMenu ] = useState(false);
    const toogleMenu = () => {
        setOpenMenu(!openMenu)
    };



  return (
    <>
     <MobileNav isOpen={openMenu} toogleMenu={toogleMenu} />
     <nav className='nav-wrapper'>
        <div className='nav-content'>
            
            <img className='logo' src="./coffe2.png" alt="" />
            
            <ul>
                <li>
                    <a className='menu-item'>Home</a>
                </li>
                <li>
                    <a className='menu-item'>Acerca de mi</a>
                </li>
                <li>
                    <a className='menu-item'>tecnologias</a>
                </li>
                <li>
                    <a className='menu-item'>Proyectos</a>
                </li>
                <li>
                    <a className='menu-item'>Contacto</a>
                </li>

                <button className='contacto-btn' onClick={() => {}} >
                    Escribe me
                </button>
            </ul>

            <button className='menu-btn' onClick={toogleMenu}> 
            <div className="menu-icon">{openMenu ? "" : ""}
              <div></div>
              <div></div>
              <div></div>
            </div>
            </button>
        </div>
     </nav>
    </>
  )
}

export default Navbar