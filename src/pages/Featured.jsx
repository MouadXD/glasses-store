import allProducts from "../helpers/productsData"
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import { useSelector } from 'react-redux';

const Featured = () => {

   const cartState = useSelector(state => state.cart)
   const productsState = useSelector(state => state.product)

  return (
    <div className="featured">
      {cartState.showMessgae && <Message type={productsState.messageType} />}
      <div className="featured__banner">
         <div className="featured__banner__content">
            <div className="text">
               <h1>Featured Products</h1>
            </div>
            <div className="banner__image">
               <img src="https://salinaka-ecommerce.web.app/images/banner-guy.fbf4f0f7396fe31ca288dc1dd9822342.png" alt="featured" />
            </div>
         </div>
      </div>
      <div className="content">
         <div className="feautured">
            <div className="feautured__content">
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

export default Featured