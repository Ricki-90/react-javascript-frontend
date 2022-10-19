import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'

function MainMenuSection() {
  return (
    <nav className="mainmenu container">
      <div className="logo">
          <NavLink className="logo" to="/" end>Fixxo.</NavLink>
      </div>
      <div className="menu-links">
          <NavLink className="menu-link" to="/" end>Home</NavLink>
          <NavLink className="menu-link" to="/categories" end>Categories</NavLink>
          <NavLink className="menu-link" to="/products" end>Products</NavLink>
          <NavLink className="menu-link" to="/contacts" end>Contacts</NavLink>
      </div>
      <div className="menu-icons">
          <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
          <MenuIcon link="/compare" icon="fa-light fa-code-compare" />
          <MenuIcon link="/wishlist" icon="fa-light fa-heart" />
          <MenuIcon link="/shoppingcart" icon="fa-light fa-bag-shopping" />
      </div>
    </nav>
  )
}

export default MainMenuSection