import React from 'react'
import MenuIcon from '../components/MenuIcon'

function MainMenuSection() {
  return (
    <nav class="mainmenu container">
        <div class="logo">
            Fixxo.
        </div>
        <div class="menu-links">
            <a href="index.html">Home</a>
            <a href="#">Categories</a>
            <a href="#">Products</a>
            <a href="contacts.html">Contacts</a>
        </div>
        <div class="menu-icons">
            <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
            <MenuIcon link="/compare" icon="fa-light fa-code-compare" />
            <MenuIcon link="/wishlist" icon="fa-light fa-heart" />
            <MenuIcon link="/shoppingcart" icon="fa-light fa-bag-shopping" />
        </div>
    </nav>
  )
}

export default MainMenuSection