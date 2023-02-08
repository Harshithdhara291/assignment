import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {HiLocationMarker, HiTruck} from 'react-icons/hi'
import {BsPersonFill, BsHeart} from 'react-icons/bs'
import {AiOutlineShoppingCart, AiOutlineCaretDown} from 'react-icons/ai'
import {FaPaw, FaRupeeSign} from 'react-icons/fa'

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
            INR <AiOutlineCaretDown />
          </button>
          <ul className="drop-menu">
            <li>INR</li>
            <li>EURO</li>
          </ul>
        </div>
      </div>
      <nav className="nav-header">
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
                Shop <AiOutlineCaretDown />
              </Link>
              <ul className="drop-menu-shop">
                <li className="list-item">
                  <FaPaw /> Shop – Left Sidebar
                </li>
                <li className="list-item">
                  <FaPaw /> Shop – Right Sidebar
                </li>
                <li className="list-item">
                  <FaPaw /> Shop – Listview
                </li>
                <li className="list-item">
                  <FaPaw /> Shop – Full Width 5 Columns
                </li>
              </ul>
            </li>

            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Pages <AiOutlineCaretDown />
              </Link>
              <ul className="drop-menu-1">
                <li className="list-item">
                  <FaPaw /> About US
                </li>
                <li className="list-item">
                  <FaPaw /> Faqs
                </li>
                <li className="list-item">
                  <FaPaw /> Icons
                </li>
                <li className="list-item">
                  <FaPaw /> 404 Error
                </li>
              </ul>
            </li>

            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Blog <AiOutlineCaretDown />
              </Link>
              <ul className="drop-menu-1">
                <li className="list-item">
                  <FaPaw /> Blog - Standard{' '}
                </li>
                <li className="list-item">
                  <FaPaw /> Blog - Grid 2 Column
                </li>
                <li className="list-item">
                  <FaPaw /> Single Post
                </li>
              </ul>
            </li>

            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav-ends">
            <input
              type="search"
              placeholder="Search products..."
              className="search"
            />
            <BsPersonFill className="last-icon" />
            <BsHeart className="last-icon" />
            <Link to="/cart" className="nav-link">
              <AiOutlineShoppingCart className="cart-icon" />
              {renderCartItemsCount()}
            </Link>
            <h1 className="head-1">
              <FaRupeeSign /> 0.00
            </h1>
          </div>
        </div>
        <div className="mobile">
          <Link to="/">
            <img
              className="mobile-logo"
              src="	https://fable.club/wp-content/uploads/2022/11/Fable-Club.svg"
              alt="website logo"
            />
          </Link>
        </div>
      </nav>
    </>
  )
}

export default withRouter(Header)
