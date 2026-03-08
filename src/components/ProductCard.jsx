import React from 'react'
import { BiAddToQueue } from 'react-icons/bi';
import { FiShoppingCart } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice'

export const ProductCard = ({ product }) => {

  const dispatch = useDispatch();
  return (
    <div className='group relative bg-gray-100 p-10 shadow rounded-2xl w-[300px] h-[400px] mt-12'>
      <div className='absolute -top-7 left-1/2 -translate-x-1/2 w-60 h-55 bg-white rounded-3xl shadow-xl p-4 flex items-center justify-center group-hover:-translate-y-3 transition-transform duration-500 ease-out'>

        <img className='w-full h-full object-contain ' src={product.image} alt={product.name} />
      </div>
      <div className='mt-40 text-left'>
        <h2 className='text-sm font-semibold h-10 line-clamp-2 text-[#333] '>{product.name}</h2>
        <p className='text-xl font-bold mt-2 text-[#333]'>{product.price} ₼</p>
        <div className='flex gap-3 mt-10 pb-2'>
          <button onClick={()=> dispatch(addToCart(product))} className='flex-grow bg-[#e0e0e0] text-[#333] rounded-2xl py-3 flex items-center justify-center gap-2 hover:bg-red-600 hover:text-white transition-all duration-300 group/btn shadow-sm'>
            <FiShoppingCart className="text-xl" />
            <span className="font-bold text-[13px]">Səbətə əlavə et</span>
          </button>
          
          <button className='bg-[#e0e0e0] text-gray-800 rounded-2xl px-4 py-3 flex items-center justify-center hover: hover:bg-red-600 hover:text-white transition-all shadow-sm border border-transparent'>
            <IoHeartOutline className="text-2xl" />
          </button>
        </div>

      </div>



    </div>

  


   
  
  )
}




export default ProductCard;



