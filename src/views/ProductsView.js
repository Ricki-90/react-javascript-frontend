import React, {useContext} from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductContext } from '../contexts/contexts'


function ProductsView() {
  const productContext = useContext(ProductContext)
  return (
    <>
      <MainMenuSection />
      <ProductGridSection title="Products" items={productContext.all} />
      <FooterSection />
    </>
  )
}

export default ProductsView