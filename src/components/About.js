import React from 'react'
import aboutimg from '../img/about_pizza_col.jpg'

function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6 p-25">
                        <h3>Sobre Nosotros</h3>
                        <h1>BIENVENIDO A K-PIZZA</h1>
                        <p>
                            Cillum in amet ad aute nisi consectetur
                            irure culpa ea veniam.
                        </p>
                        <div className="about_btn">
                            <a href="" className="btn btn-smart">
                                Leer más
                        </a>
                        </div>
                        </div>
                        <div className="col-6">
                        <div className="about_img">
                            <img src={aboutimg} alt="Pizza"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
