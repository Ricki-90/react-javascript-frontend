import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'


function ProductsView() {
  return (
    <>
      <MainMenuSection />
      <ProductGridSection title="Top Products" />
      <FooterSection />
    </>
  )
}

export default ProductsView