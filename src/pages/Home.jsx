import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import allProducts from "../helpers/productsData"
import Message from '../components/Message'
import { useSelector } from 'react-redux'

const Home = () => {

  const cartState = useSelector(state => state.cart)
  const productsState = useSelector(state => state.product)

  return (
    <div className="home">
      {cartState.showMessgae && <Message type={productsState.messageType} />}
      <div className="home__banner">
        <div className="home__banner__content">
          <div className="text">
            <h1><span>See</span> everything <br /> with <span>Clarity</span></h1>
            <p>Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.</p>
            <div className="shopNowBtn">
              <Link to='/shop'>
                Shop Now 
              </Link>
              <AiOutlineArrowRight />
            </div>
          </div>
          <div className="banner__image">
            <img src="https://salinaka-ecommerce.web.app/images/banner-girl.789f1fa6f451ad26c5039fcbc049ace7.png" alt="banner" />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="feautured">
          <div className="feautured__header">
            <h4>Featured Products</h4>
            <Link to='/shop'>See All</Link>
          </div>
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
        <div className="recommended">
          <div className="recommended__header">
            <h4>Recommended Products</h4>
            <Link to='/shop'>See All</Link>
          </div>
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

export default Home