import React from 'react'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar_text">
                <div className="logo"> K-PIZZA </div>
                    <ul>
                        <li>
                            <a href="">Inicio</a>
                        </li>
                        <li>
                            <a href="">Menu</a>
                        </li>
                        <li>
                            <a href="">Nosotros</a>
                        </li>
                        <li>
                            <a href="">Pedidos</a>
                        </li>
                        <li>
                            <a href="">Contacto</a>
                        </li>
                    </ul>
              
            </div>
        </nav>
    )
}

export default Navbar
