import { useParams } from "react-router-dom"
import allProducts from '../helpers/productsData'
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai'
import { BiDownArrowAlt } from 'react-icons/bi'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from '../app/features/Cart'
import { useSelector } from "react-redux";
import Message from "../components/Message";
import { productsActions } from '../app/features/Product'

const SingleProduct = () => {

   const { id } = useParams();
   const selectedProduct = allProducts.filter(product => product.id == id)
   const [{ imageCollection, image, brand, name, description, availableColors, price, sizes }] = selectedProduct

   const [ selectedProductColor, setSelectedProductColor ] = useState(imageCollection[0].id)
   const [ isSlectedSizeOpen, setIsSelectedSizeOpen ] = useState(false);
   const [ selectedSize, setSelectedSize ] = useState("--Select Size--");
   const [ selectedColor, setSelectedColor ] = useState(availableColors[0]);
   
   const selectedImage = imageCollection.find(element => element.id == selectedProductColor)
   const { url } = selectedImage;

   const dispatch = useDispatch();
   const { addProductToCart, showMessage, removeProductCart } = cartActions;
   const { changeMessageType } = productsActions;

   const cartState = useSelector(state => state.cart)
   const productsState = useSelector(state => state.product)

  return (
    <div className="singleProduct">
      {cartState.showMessgae && <Message type={productsState.messageType} />}
      <div className="backToShop">
         <AiOutlineArrowLeft />
         <Link to='/shop'>Back to shop</Link>
      </div>
      <div className="singlePage__content">
         <div className="image_collection">
            {
               imageCollection.map(image => {
                  const { id, url } = image;
                  return (
                     <div key={id} className="single_of_coll" onClick={() => setSelectedProductColor(id) }>
                        <img src={url} alt="collection" />
                     </div>
                  )
               })
            }
         </div>
         <div className="main_image">
            <img src={selectedImage.url} alt="main" />
         </div>
         <div className="product_info">
            <span className="product_info__brand">{brand}</span>
            <h1 className="product_info__name">{name}</h1>
            <p className="product_info__description">{description}</p>
            <hr />
            <span className="product_info__lens">Lens Width and Frame Size</span>
            <div className="selectSize">
               <div className="selectSize__header" onClick={() => setIsSelectedSizeOpen(!isSlectedSizeOpen)}>
                  <span>{selectedSize}</span>
                  <BiDownArrowAlt className={`${isSlectedSizeOpen ? "selectSize__header__open" : ""}`} />
               </div>
               <div className={`${isSlectedSizeOpen ? 'selectSize__content selectSize__content__open' : 'selectSize__content'}`}>
                  <ul>
                     {
                        sizes.map((size, index) => {
                           return (
                              <li key={index} onClick={() => {
                                 setSelectedSize(`${size}mm`)
                                 setIsSelectedSizeOpen(false)
                              }}>{size}mm</li>
                           )
                        })
                     }
                  </ul>
               </div>
            </div>
            <div className="colors__chosen">
               {
                  availableColors.length !== 0 ? (
                     <>
                        <span>Chose Color</span>
                        <div className="colors">
                           {
                              availableColors.map((element, index) => {
                                 return (
                                    <div key={index} className="color" style={{backgroundColor: element}} onClick={() => setSelectedColor(element)}>
                                       <span>{selectedColor == element && <AiOutlineCheck /> }</span>
                                    </div>
                                 )
                              })
                           }
                        </div>
                     </>
                  ) : null
               }
            </div>
            <h2 className="price">${price}</h2>
            <button onClick={() => {
               const selectSize = selectedSize == "--Select Size--" ? sizes[0] : selectedSize.substring(0, 2)
               // dispatch(addProductToCart({id, url, name, selectSize, selectedColor, price, quantity: 1}))
               // dispatch(showMessage())
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
            </button>
         </div>
      </div>
    </div>
  )
}

export default SingleProduct