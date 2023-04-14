import { useSelector, useDispatch } from "react-redux"
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai"
import { cartActions } from "../app/features/Cart"

const Cart = ({ isCartOpen, setIsCartOpen }) => {

  const cartState = useSelector(state => state.cart)
  const dispatch = useDispatch();
  const { clearCart, quantityCounter, removeProductCart } = cartActions;

  return (
    <div className={`${isCartOpen ? "cart__content cart__content__open" : "cart__content"}`}>
      <div className="cart__header">
        <div className="cart__header__text">
          <h4>My Cart</h4>
          <span>({cartState.productsAddedToCart}-item)</span>
        </div>
        <div className="cart__header__btn">
          <div className="close" onClick={() => setIsCartOpen(false)}>Close</div>
          <div className="clear" onClick={() => dispatch(clearCart())}>Clear Cart</div>
        </div>
      </div>
      <div className="cart__products">
        {cartState.cartItems.length == 0 ? <div className="cartIsEmpty">Your cart is empty!</div> : (
          cartState.cartItems.map(cartProduct => {
            const { id, url, name, selectSize, selectedColor, price, quantity } = cartProduct;
            return (
              <div key={id} className="productCart">
                <div className="productCart__options">
                  <div className="productCart__options__increase" onClick={() => dispatch(quantityCounter({type:"increase" ,id}))}>
                    <AiOutlinePlus />
                  </div>
                  <div className="productCart__options__decrease" onClick={() => dispatch(quantityCounter({type:"decrease" ,id}))}>
                    <AiOutlineMinus />
                  </div>
                </div>
                <div className="productCart__image">
                  <div className="productCart__name">
                    <span>{name}</span>
                  </div>
                  <img src={url} alt={name} />
                </div>
                <div className="productCart__details">
                  <div className="quantity detail">
                    <h5>Quantity</h5>
                    <span>{quantity}</span>
                  </div>
                  <div className="size detail">
                    <h5>Size</h5>
                    <span>{selectSize}mm</span>
                  </div>
                  <div className="color detail">
                    <h5>Color</h5>
                    <div style={{ backgroundColor: selectedColor }} className="colorDiv"></div>
                  </div>
                </div>
                <div className="productCart__price detail">
                  <h3>${price}</h3>
                </div>
                <div className="removeProduct" onClick={() => dispatch(removeProductCart(id))}>
                  <AiOutlineClose />
                </div>
              </div>
            )
          })
        )}
        <div className="totalAmount">
          <span>Subtotal Amount:</span>
          <h4>${cartState.totalPrice}</h4>
        </div>
      </div>
    </div>
  )
}

export default Cart