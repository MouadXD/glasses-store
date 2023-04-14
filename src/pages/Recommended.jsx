import allProducts from "../helpers/productsData"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Message from '../components/Message';

const Recommended = () => {

   const cartState = useSelector(state => state.cart)
   const productsState = useSelector(state => state.product)

  return (
   <div className="recommended">
   {cartState.showMessgae && <Message type={productsState.messageType} />}
   <div className="recommended__banner">
      <div className="recommended__banner__content">
         <div className="text">
            <h1>Recommended Products</h1>
         </div>
         <div className="banner__image">
            <img src="https://salinaka-ecommerce.web.app/images/banner-girl-1.24e9b8f48d5a0ac32680edd194503695.png" alt="featured" />
         </div>
      </div>
   </div>
   <div className="content">
      <div className="recommended">
         <div className="recommended__content">
            {
            allProducts.slice(0, 8).map(product => {
               const { id, name, brand, imageUrl } = product;
               return (
                  <Link to={`/product/${id}`} key={id}>
                  <div className='product'>
                     <div className="product__image">
                        <img src={imageUrl} alt={name}/>
                     </div>
                     <div className="product__info">
                        <h2>{name}</h2>
                        <h2>{brand}</h2>
                     </div>
                  </div>
                  </Link>
               )
            })
            }
         </div>
      </div>
   </div>
 </div>
  )
}

export default Recommended