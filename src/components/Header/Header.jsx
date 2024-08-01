import React from 'react'
import "./Header.css"
import Hero from '../../Pages/Home/components/Hero'
function toggleMenu() {
  const menu = document.getElementById('menu')
  if (menu.style.display === 'block') {
    menu.style.display = 'none'
  } else {
    menu.style.display = 'block'
  }
}
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="./images/logo.png" alt="" />
      </div>
      <div className='nav'>
        <button className='toggle-btn1' onClick={() => toggleMenu()}>☰</button>
        <div className='menu' id='menu'>
          <ul>
            <a href="/"><li>Home</li></a>
            <a href="/about-us"><li>About</li></a>
            <a href=""><li>Product<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
              <div className='dropdown'>
                <a href="/electro"><li>electro medical divison</li></a>
                <a href="/surgical"><li>surgical disposables</li></a>
                <a href="/pharma"><li>pharmaceuticals</li></a>
              </div>
            </li>
            </a>
            <a href="/distribution"><li>Distribution</li></a>
            <a href="/career"><li>Careers</li></a>
            <a href="/contact"><li>Contact</li></a>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
