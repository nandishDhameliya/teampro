import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav>
      <ul>
        <li>
          <Link to="/#">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
        <li>
          <Link to="/#">
            <button>Get Access</button>
          </Link>
        </li>
      </ul>
    </nav>
  </div> 
  )
}

export default Navbar
