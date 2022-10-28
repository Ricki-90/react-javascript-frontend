import React, {useState} from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import BannersSection from '../sections/BannersSection'
import FlashsalesSection from '../sections/FlashsalesSection'
import FooterSection from '../sections/FooterSection'

const HomeView = () => {
  window.top.document.title = 'Fixxo.'

  const [featuredProducts, setFeaturedProducts] = useState([
    {id: 1, name: "Mordern black blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13379800/pexels-photo-13379800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id: 2, name: "Mordern black blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/6484387/pexels-photo-6484387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id: 3, name: "Mordern black blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id: 4, name: "Mordern black blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13715795/pexels-photo-13715795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
  ])

  const [topProducts, setTopProducts] = useState([
    {id: 1, name: "Mordern black blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13379800/pexels-photo-13379800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id: 2, name: "Mordern black blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/6484387/pexels-photo-6484387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id: 3, name: "Mordern black blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id: 4, name: "Mordern black blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13715795/pexels-photo-13715795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
  ])

  return (
    <>
      <MainMenuSection />
      <ProductGridSection title="Featured Products" products={featuredProducts} />
      <ProductGridSection title="Top Products" products={topProducts} />
      <BannersSection />
      <FlashsalesSection products={featuredProducts} />
      <FooterSection />
    </>
  )
}

export default HomeView