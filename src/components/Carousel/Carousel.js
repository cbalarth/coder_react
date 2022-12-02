import React from 'react'
import './Carousel.css'

const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true" >
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Grey_icon.svg/300px-Grey_icon.svg.png" className="d-block w-100 sizeImg" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Color_icon_Cornflower_blue.svg/300px-Color_icon_Cornflower_blue.svg.png" className="d-block w-100 sizeImg" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Color_icon_yellow.svg/300px-Color_icon_yellow.svg.png" className="d-block w-100 sizeImg" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel