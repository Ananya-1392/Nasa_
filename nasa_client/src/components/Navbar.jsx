import React from 'react'
import '../index.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="nav-dsu-logo"><img src="./icons/dsu.png" alt='logo' /></div>
          <div className="nav-nasa-logo"><img src="./icons/logo-dark.png" alt="logo" /></div>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/">Introduction</a>
          </li>
          <li className="navbar-item">
            <a href="/about">About DSU</a>
          </li>
          <li className="navbar-item">
            <a href="/services">Statistics</a>
          </li>
          <li className="navbar-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar