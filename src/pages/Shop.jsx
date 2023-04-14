// import productsData from '../helpers/productsData'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../app/features/Cart'
import { productsActions } from '../app/features/Product'
import Message from '../components/Message'

const Shop = () => {
  
  const dispatch = useDispatch();
  const { addProductToCart, showMessage, removeProductCart } = cartActions;
  const { changeMessageType } = productsActions;
  const cartState = useSelector(state => state.cart)
  const productsState = useSelector(state => state.product)

  return (
    <div className="shop">
      {cartState.showMessgae && <Message type={productsState.messageType} />}
      <div className="shop__content">
        <div className="products">
          {
            productsState.filteredProducts.length !== 0 ? (
              productsState.filteredProducts.map(product => {
                const { id, name, image, brand, price, messageProduct="Add to cart" } = product;
                return (
                  <div className='shopProduct' key={id}>
                      <Link to={`/product/${id}`}>
                        <div className="shopProduct__image">
                          <img src={image} alt={name} />
                        </div>
                        <div className="shopProduct__details">
                          <h5>{name}</h5>
                          <p>{brand}</p>
                          <h4>${price}</h4>
                        </div>
                      </Link>
                      <div className="addToCart" onClick={() => {
                        const selectSize = sizes[0];
                        const selectedColor = availableColors[0];
                        if (cartState.cartItems.some(element => element.id == id)) {
                          dispatch(removeProductCart(id))
                          dispatch(showMessage())
                          dispatch(changeMessageType("remove"))
                        } else {
                          dispatch(addProductToCart({ id, name, price, quantity: 1, url, selectSize, selectedColor }))
                          dispatch(showMessage())
                          dispatch(changeMessageType("success"))
                        }
                      }}>
                        {
                          cartState.cartItems.some(element => element.id == id) ? "Remove From Cart" : "Add to cart" 
                        }
                      </div>
                  </div>
                )
              })
            ) : (
              productsState.products.map(product => {
                const { id, name, image, brand, price, availableColors, sizes } = product;
                const url = image;
                return (
                  <div className='shopProduct' key={id}>
                      <Link to={`/product/${id}`}>
                        <div className="shopProduct__image">
                          <img src={image} alt={name} />
                        </div>
                        <div className="shopProduct__details">
                          <h5>{name}</h5>
                          <p>{brand}</p>
                          <h4>${price}</h4>
                        </div>
                      </Link>
                      <div className="addToCart" onClick={() => {
                        const selectSize = sizes[0];
                        const selectedColor = availableColors[0];
                        if (cartState.cartItems.some(element => element.id == id)) {
                          dispatch(removeProductCart(id))
                          dispatch(showMessage())
                          dispatch(changeMessageType("remove"))
                        } else {
                          dispatch(addProductToCart({ id, name, price, quantity: 1, url, selectSize, selectedColor }))
                          dispatch(showMessage())
                          dispatch(changeMessageType("success"))
                        }
                      }}>
                        {
                          cartState.cartItems.some(element => element.id == id) ? "Remove From Cart" : "Add to cart" 
                        }
                      </div>
                  </div>
                )
              })
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Shop