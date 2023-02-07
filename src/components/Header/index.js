import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {HiLocationMarker, HiTruck} from 'react-icons/hi'
import {BsPersonFill, BsHeart} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const renderCartItemsCount = () => (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const cartItemsCount = cartList.length

        return (
          <>
            {cartItemsCount > 0 ? (
              <span className="cart-count-badge">{cartList.length}</span>
            ) : null}
          </>
        )
      }}
    </CartContext.Consumer>
  )

  return (
    <>
      <div className="Heading">
        <div className="Heading1">
          <div className="head">
            <HiLocationMarker className="icon" />
            <p className="para">Find a Store</p>
          </div>
          <div className="head">
            <HiTruck className="icon" />
            <p className="para">Order Tracking</p>
          </div>
        </div>
        <div className="Heading2">
          <p className="para1">15% Off</p>
          <p className="head">$50+ when you buy online & pick up in-store</p>
        </div>
        <div className="inr">
          <button className="btn" type="button">
            INR ^
          </button>
          <ul className="drop-menu">
            <li>INR</li>
            <li>EURO</li>
          </ul>
        </div>
      </div>
      <nav className="nav-header">
        <div className="nav-content">
          <div className="nav-bar-mobile-logo-container">
            <Link to="/">
              <img
                className="website-logo"
                src="https://fable.club/wp-content/uploads/2022/11/Fable-Club.svg"
                alt="website logo"
              />
            </Link>

            <button
              type="button"
              className="nav-mobile-btn"
              onClick={onClickLogout}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                alt="nav logout"
                className="nav-bar-img"
              />
            </button>
          </div>

          <div className="nav-bar-large-container">
            <Link to="/">
              <img
                className="website-logo"
                src="	https://fable.club/wp-content/uploads/2022/11/Fable-Club.svg"
                alt="website logo"
              />
            </Link>
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-menu-item">
                <Link to="/" className="nav-link">
                  Shop
                </Link>
              </li>

              <li className="nav-menu-item">
                <Link to="/" className="nav-link">
                  Pages
                </Link>
              </li>

              <li className="nav-menu-item">
                <Link to="/" className="nav-link">
                  Blog
                </Link>
              </li>

              <li className="nav-menu-item">
                <Link to="/" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="nav-ends">
              <input type="search" />
              <BsPersonFill />
              <BsHeart />
              <Link to="/cart" className="nav-link">
                <AiOutlineShoppingCart />
                {renderCartItemsCount()}
              </Link>
            </div>
          </div>
        </div>
        <div className="nav-menu-mobile">
          <ul className="nav-menu-list-mobile">
            <li className="nav-menu-item-mobile">
              <Link to="/" className="nav-link">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                  alt="nav home"
                  className="nav-bar-img"
                />
              </Link>
            </li>

            <li className="nav-menu-item-mobile">
              <Link to="/products" className="nav-link">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                  alt="nav products"
                  className="nav-bar-img"
                />
              </Link>
            </li>
            <li className="nav-menu-item-mobile">
              <Link to="/cart" className="nav-link">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                  alt="nav cart"
                  className="nav-bar-img"
                />
                {renderCartItemsCount()}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default withRouter(Header)
