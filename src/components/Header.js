import React from 'react'
import Navbar from './Navbar'

function Header() {
    return (
        <div className="banner">
            <Navbar />
            <div className="banner_content">
                <div className="container">
                    <div className="banner_text">
                        <h3>Pizzeria Delivery</h3>
                        <h1>K - Pizza</h1>
                        <p>
                            Dolor non sit cupidatat tempor.
                            Dolore cillum aliquip elit amet cupidatat fugiat.
                            Sint eiusmod laborum in nulla.
                            Dolor commodo laboris do fugiat fugiat eu pariatur
                            pariatur occaecat elit veniam in veniam.
                            Excepteur eiusmod cillum ipsum cillum irure do
                            incididunt elit consectetur sit nulla deserunt magna.
                            Enim labore commodo ex ut Lorem veniam fugiat elit anim.
                        </p>
                        <div className="banner_btn">
                                <a href="" className="btn btn-smart">Pide ahora!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
