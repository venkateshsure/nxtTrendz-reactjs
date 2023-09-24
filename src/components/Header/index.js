// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="nxtwave">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="nxt-logo"
    />
    <ul className="nxtwave-options">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/products">
        <li>Products</li>
      </Link>
      <Link to="/cart">
        <li>Cart</li>
      </Link>
      <div>
        <button className="but" type="button">
          Logout
        </button>
      </div>
    </ul>
  </div>
)

export default Header
