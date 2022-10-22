import React from 'react'

export const ProductCard = () => {
  return (
  <div className="col">
    <div className="card">
        <div className="card-img">
            <img src="/static-webapp/image/card-img.jpg" alt="" />
            <div className="card-menu">
                <a href="#"><i className="fa-regular fa-heart"></i></a>
                <a href="#"><i className="fa-regular fa-repeat"></i></a>
                <a href="#"><i className="fa-regular fa-bag-shopping"></i></a>
            </div>
            <a className="__btn-theme btn-card-theme" href="#">
                <span className="__btn-theme-left"></span>
                <span className="__btn-theme-right"></span>
                QUICK VIEW
            </a>
        </div>
        <div className="card-body">
            <p className="card-category">Category</p>
            <h5 className="card-title">Mordern Black Blouse</h5>
            <p className="card-rating">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
            </p>
            <p className="card-price">$35.00</p>
        </div>
    </div>
  </div>   
  )
}
