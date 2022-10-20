import React from 'react'
import { NavLink } from 'react-router-dom'

function MenuIcon({link, icon, quantity, hideMobile}) {
  return (
    <NavLink className="menu-icon" style={(hideMobile) => hideMobile ? {}} to={link} end>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">{quantity}</span>
      <i className={icon}></i>
    </NavLink>
  )
}

export default MenuIcon