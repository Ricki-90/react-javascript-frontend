import React, {useContext} from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import TopSection from '../sections/TopSection'
import ProductGridSection from '../sections/ProductGridSection'
import BannersSection from '../sections/BannersSection'
import FlashsalesSection from '../sections/FlashsalesSection'
import SupportIconsSection from '../sections/SupportIconsSection'
import FooterSection from '../sections/FooterSection'
import { FeaturedProductsContext, fetchFlashsalesContext } from '../contexts/ProductContexts'


const HomeView = () => {
  window.top.document.title = 'Fixxo.'
  const products = useContext(FeaturedProductsContext);
  const flashsale = useContext(fetchFlashsalesContext);

  return (
    <>
      <header>
       <MainMenuSection />
       <TopSection />
      </header>
      <ProductGridSection title="Featured Products" items={products} />
      <BannersSection />
      <FlashsalesSection items={flashsale}/>
      <SupportIconsSection  />
      <FooterSection />
    </>
  )
}

export default HomeView