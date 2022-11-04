import React, {useContext} from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import TopSection from '../sections/TopSection'
import ProductGridSection from '../sections/ProductGridSection'
import BannersSection from '../sections/BannersSection'
import FlashsalesSection from '../sections/FlashsalesSection'
import SupportIconsSection from '../sections/SupportIconsSection'
import FooterSection from '../sections/FooterSection'
import { ProductContext } from '../contexts/contexts'


const HomeView = () => {
  window.top.document.title = 'Fixxo.'
  const productContext = useContext(ProductContext)

  return (
    <>
      <div style={{backgroundColor: "#E6E6E6"}}>
      <MainMenuSection />
      </div>
      <TopSection />
      <ProductGridSection title="Featured Products" items={productContext.featuredProducts} />
      <BannersSection />
      <FlashsalesSection items={productContext.flashsalesSection} />
      <SupportIconsSection  />
      <FooterSection />
    </>
  )
}

export default HomeView