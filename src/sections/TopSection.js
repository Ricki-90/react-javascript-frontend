import React from 'react'
import imgGirl from './../assets/images/placeholder/img-girl.svg'
import imgGuy from './../assets/images/placeholder/img-guy.svg'

const TopSection = () => {
  return (
    <section className="top-section">
            <img src={imgGirl} alt="image-girl" />
            <div className="showcase-body">
                <h1>SALE UP</h1>
                <h1>To 50% Off</h1>
                <p>Online shopping free home delivery over $100</p>
                <button className="btn-theme btn-w">
                    <span className="corner-left"></span>
                    <span className="corner-right"></span>
                    SHOP NOW
                </button>
            </div>
            <img src={imgGuy} alt="image-guy" />
    </section>
  )
}

export default TopSection