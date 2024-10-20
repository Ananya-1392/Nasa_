import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="./icons/dsu.png" alt='logo'/>
          <img src="./icons/logo-dark.png" alt="logo" />
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