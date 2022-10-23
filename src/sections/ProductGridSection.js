import React, { useState } from 'react'
import { ProductCard } from '../components/ProductCard'

const ProductGridSection = ({title}) => {

  const [products, setProducts] = useState([
    {id: 1, name: "Mordern black blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/5634667/pexels-photo-5634667.jpeg?auto=compress&cs=tinysrgb&w=600&lazy-load"},
    {id: 2, name: "Mordern black blouse", category: "Fashion", price: "$35.00", rating: 5, img: "card-img.jpg"},
    {id: 3, name: "Mordern black blouse", category: "Fashion", price: "$35.00", rating: 5, img: "card-img.jpg"},
    {id: 4, name: "Mordern black blouse", category: "Fashion", price: "$35.00", rating: 5, img: "card-img.jpg"}
  ])


  return (
  <section className="product-grid">
    <div className="container">
      <h1>{title}</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {
          products.map(product => <ProductCard item={product} />)
        }
      </div>
    </div>    
  </section>
  )
}

export default ProductGridSection