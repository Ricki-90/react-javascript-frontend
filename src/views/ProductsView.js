import React, {useContext} from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductsContext } from '../contexts/contexts'


function ProductsView() {
  const products = useContext(ProductsContext);

  return (
    <>
      <MainMenuSection />
      <ProductGridSection title="Products" items={products} />
      <FooterSection />
    </>
  )
}

export default ProductsView