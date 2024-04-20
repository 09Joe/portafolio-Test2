import React from 'react'
import './MobileNav.css'

const MobileNav = ({ isOpen, toogleMenu }) => {
  return (
    <>
      <div 
       className={`mobile-menu ${isOpen ? "active" : ""}`} 
       onClick={toogleMenu}>
      <div className="mobile-menu-container">
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
         <button className='contact-btn' onClick={()=>{}}>Escribeme</button>
        </ul>

      </div>
      </div>
    </>
  )
}

export default MobileNav