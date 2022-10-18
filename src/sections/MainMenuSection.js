import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'

function MainMenuSection() {
  return (
    <nav className="mainmenu container">
      <div className="logo">
          Fixxo.
      </div>
      <div className="menu-links">
          <NavLink className="menu-link" to="/">Home</NavLink>
          <NavLink className="menu-link" to="/categories">Categories</NavLink>
          <NavLink className="menu-link" to="/products">Products</NavLink>
          <NavLink className="menu-link" to="/contacts">Contacts</NavLink>
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