import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const Menu = ({ onContactpropPageClick }) => {
  const navigate = useNavigate()
  const [isMenuOpen, setMenuOpen] = useState(false)
  const buttonRef = useRef()

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen)
  }

  const handleItemClick = (page) => {
    navigate(page)
    setMenuOpen(false)
  }

  const handleOutsideClick = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setMenuOpen(false)
    }
  }

  return (
    <span className="menu-container">
      <span
        className="menu-button"
        onClick={handleMenuToggle}
        ref={buttonRef}
        style={{ fontSize: '55px', color: "black"}}
      >☰</span>
      {isMenuOpen && (
        <div className="menu">
          <p className="menu-item-box" onClick={() => handleItemClick('/home')}>
            Home Page
          </p>
          <p className="menu-item-box" onClick={() => handleItemClick('/AboutMe')}>
            About Me
          </p>
          <p className="menu-item-box" onClick={() => handleItemClick('/ProjectsPage')}>
            Projects
          </p>
          <p className="menu-item-box" onClick={() => handleItemClick('/ContactPage')}>
            Contact Me
          </p>
        </div>
      )}
    </span>
  )
}


export default Menu
