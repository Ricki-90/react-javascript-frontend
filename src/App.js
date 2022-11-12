import React, {useEffect, useState} from 'react'
import './style.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeView from './views/HomeView';
import ProductsView from './views/ProductsView';
import ContactsView from './views/ContactsView';
import NotFoundView from './views/NotFoundView';
import ProductDetailsView from './views/ProductDetailsView';
import { ProductsContext, FeaturedProductsContext, fetchFlashsalesContext } from './contexts/ProductContexts'
import {ShoppingCartProvider} from './contexts/ShoppingCartContext';

function App() {
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [flashsale, setFlashsales] = useState([])

  useEffect(() => {
    const fetchAllData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchAllData()

    const fetchFeaturedData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeatured(await result.json())
    }
    fetchFeaturedData()

    const fetchFlashsalesData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setFlashsales(await result.json())
    }
    fetchFlashsalesData()

  }, [setProducts, setFeatured, setFlashsales])  
  
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
      <ProductsContext.Provider value={products}>
      <FeaturedProductsContext.Provider value={featured}>
      <fetchFlashsalesContext.Provider value={flashsale}>
    <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="products" element={<ProductsView />} />
        <Route path="products/:name" element={<ProductDetailsView />} />
        <Route path="contacts" element={<ContactsView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
      </fetchFlashsalesContext.Provider>
      </FeaturedProductsContext.Provider>
      </ProductsContext.Provider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
