import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import TopSection from '../sections/TopSection'
import ProductGridSection from '../sections/ProductGridSection'
import BannersSection from '../sections/BannersSection'
import FlashsalesSection from '../sections/FlashsalesSection'
import SupportIconsSection from '../sections/SupportIconsSection'
import FooterSection from '../sections/FooterSection'

const HomeView = () => {
  window.top.document.title = 'Fixxo.'

  return (
    <>
      <MainMenuSection />
      <TopSection />
      <ProductGridSection title="Featured Products" />
      <BannersSection />
      <FlashsalesSection />
      <SupportIconsSection  />
      <FooterSection />
    </>
  )
}

export default HomeView