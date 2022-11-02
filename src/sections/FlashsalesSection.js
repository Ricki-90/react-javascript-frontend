import React from 'react'
import { ProductCard } from '../components/ProductCard'

const FlashsalesSection = ({}) => {
  return (

    <section className="flashsale-feature">
      <div className="container">
        <div className="flashsale-box">
          <div className="box">
            <h1 className="flashsales-title">2 FOR USD $29</h1>
          </div>
          <button className="btn-white">
            <span className="corner-left-w"></span>
            <span className="corner-right-w"></span>
            FLASH SALE
          </button>
        </div>
        <div className="box-size">
          <div className="row row-cols-2">
            {
              //produkter
            }
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box-size">
          <div className="row row-cols-2">
            {
              //produkter
            }
          </div>
        </div>
        <div className="flashsale-box">
          <div className="box">
            <h1 className="flashsales-title">2 FOR USD $29</h1>
          </div>
          <button className="btn-white">
            <span className="corner-left-w"></span>
            <span className="corner-right-w"></span>
            FLASH SALE
          </button>
        </div>
      </div>
     </section>

    
  )
}

export default FlashsalesSection