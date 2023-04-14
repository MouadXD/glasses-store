import { NavLink } from "react-router-dom"
import { FiSearch } from 'react-icons/fi'
import { AiOutlineShopping } from 'react-icons/ai'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { productsActions } from "../app/features/Product"
import Cart from "./Cart"

const Navbar = () => {

  const { productsAddedToCart } = useSelector(state => state.cart)
  const { products } = useSelector(state => state.product)
  const dispatch = useDispatch();
  const [ inputValue, setInputValue ] = useState('');
  const [ isCartOpen, setIsCartOpen ] = useState(false)

  console.log(productsAddedToCart)
  
  const navigate = useNavigate();
  const handleKeyPress = (e) => {
    if (e.key == 'Enter') {
      // setInputValue('');
      navigate('/shop')
    }
    const filteredData = products.filter(product => product.name.toLowerCase().includes(inputValue.toLowerCase()))
    dispatch(productsActions.filterProducts(filteredData))
  }

  return (
    <div className="navbar">
      <nav>
        <div className="navbar__logo__links">
          <div className="navbar__logo">
            <h1>
              <Link to='/'>
                GlassBuy
              </Link>
            </h1>
          </div>
          <div className="navbar__links">
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/shop'>Shop</NavLink></li>
              <li><NavLink to='/featured'>Featured</NavLink></li>
              <li><NavLink to='/recommended'>Recommended</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="navbar__search__cart">
          <div className="search">
            <input type="text" placeholder="Search product..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => handleKeyPress(e)}/>
            <span className="search__icon">
              <FiSearch />
            </span>
          </div>
          <div className="cart">
            <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
            <span className="cart__icon" onClick={() => setIsCartOpen(true)}>
            {
              productsAddedToCart !== 0 ? (
                <span>{productsAddedToCart}</span>
              ) : null
            }
              <AiOutlineShopping />
            </span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar