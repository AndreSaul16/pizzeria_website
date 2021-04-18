import React from 'react'
import pizzaImg from '../img/menu_pizza.jpg'
function Menu() {
    return (
        <div className="menu">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="menu_img">
                            <img src={pizzaImg} alt="Pizza" />
                        </div>
                    </div>
                    <div className="col-6 p-25">
                        <h3>Nuestra Pizza Estrella</h3>
                        <h1>K-Muzza</h1>
                        <p>
                            Cillum in amet ad aute nisi consectetur
                            irure culpa ea veniam.
                            </p>
                        <div className="menu_btn">
                            <a href="" className="btn btn-smart">
                                Ver más
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
