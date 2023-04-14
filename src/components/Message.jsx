import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { cartActions } from "../app/features/Cart"


const succes = () => {
   return (
      <span className="message success">Item Added to cart!</span>
      )
   }

   
const removeProduct = () => {
   return (
      <span className="message remove">Product Removed!</span>
   )
}


const Message = ({type}) => {
   
   const cartState = useSelector(state => state.cart)
   const dispatch = useDispatch();

   useEffect(() => {
      setTimeout(() => {
         dispatch(cartActions.hideMessage())
      }, 2000)
   }, [cartState.showMessgae])

   switch(type) {
      case "success":
         return succes()
         break;
      case "remove":
         return removeProduct()
         break;
   }
}

export default Message