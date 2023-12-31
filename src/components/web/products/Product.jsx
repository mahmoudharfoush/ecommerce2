import axios from 'axios';
import React, { useContext } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import ReactImageMagnify from 'react-image-magnify';
import { CartContext } from '../context/Cart.jsx';

function Product() {
const {productId} =useParams();
const {addToCartContext} = useContext(CartContext);

const getProduct = async ()=>{
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`);
    return data.product;
}
const {data,isLoading} = useQuery('product', getProduct);

const addToCart = async (productId)=>{
    const res = await addToCartContext(productId);
    console.log(res);
}

if(isLoading){
    return <p>loading ...</p>
}
  return (
    <div className="contanier">
    <div className="row">
        <div className='col-lg-4'>
         {data.subImages.map( (img,index)=> 
         <React.Fragment key={index}>
         <ReactImageMagnify {...{
            smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: img.secure_url
            },
            largeImage: {
                src: img.secure_url,
                width: 1200,
                height: 1800
            },
            enlargedImagePosition:'over',
             
            
        }} />
         </React.Fragment>
        
         )}
        </div>
         
        <div className='col-lg-8'>
         <h2>{data.name}</h2>
         <p>{data.price}</p>
         <button className='btn btn-outline-info' onClick={()=>addToCart(data._id)}>Add To Cart</button>
        </div>
     
      
      </div>
    
    
    </div>
   
  )
}

export default Product