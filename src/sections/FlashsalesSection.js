import React from 'react'
import { ProductCard } from '../components/ProductCard'

const FlashsalesSection = ({products}) => {
  return (

    <section className="flashsale-feature container">
      
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
            products.map(product => <ProductCard key={product.id} product={product} />)
          }
        </div>
      </div>
    </section>
  )
}

export default FlashsalesSection