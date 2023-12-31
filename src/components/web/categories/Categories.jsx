import axios from 'axios';
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/Cart.jsx';


export default function Categories() {
   
  const getCategories = async ()=>{
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/categories/active?limit=7`);
    return data;
  }

  const x = useContext(CartContext);
 

  const {data,isLoading} = useQuery('web_categories',getCategories);
  if(isLoading){
    return <p>...loading</p>
  }

  return (
    <div className="container">
    <Swiper
     modules={[Navigation, Pagination,Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay:3000
      }} 
      onSlideChange={() => ('slide change')}
      onSwiper={(swiper) => (swiper)}
    >
      {data?.categories.length ? data?.categories.map( (category)=>
      <SwiperSlide key={category._id}>
      <Link to={`/products/category/${category._id}`}>

        <img src={category.image.secure_url} /> 
      </Link>
      </SwiperSlide>
      ):'<h2>no category found</h2>'}
    </Swiper>
      
    
    </div>
  )
}
