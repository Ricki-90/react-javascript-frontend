import React from 'react'
import {Link} from 'react-router-dom';
import img1 from './../assets/images/showcase-img-2.png'

const TopSection = () => {
  return (
    <section className="top-section">
      <img className="image-girl-left" src="https://win22imgstorage.blob.core.windows.net/images/showcase-img-1.png" alt="girl-left" />
      <div className="showcase-body">
          <h1>SALE UP</h1>
          <h1>To 50% Off</h1>
          <p>Online shopping free home delivery over $100</p>
          <Link to="/products" className="btn-theme btn-w">
            <span className="corner-left"></span>
            <span className="corner-right"></span>
            SHOP NOW
          </Link>
      </div>
      <img className="image-girl-right" src={img1} alt="girl-right" />
    </section>
  )
}

export default TopSection