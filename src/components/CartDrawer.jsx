


import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { plusQuantity, minusQuantity ,  deleteFromCart, toggleCart } from '../store/cartSlice'

const CartDrawer = () => {
    const { cart,isOpen } = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
      
        <div className={`fixed top-0 right-0 h-full w-[350px] bg-white shadow-2xl z-50 transition-all duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <button onClick={() => dispatch(toggleCart())} className="p-4 text-red-500 font-bold">Bağla</button>
            
            {cart.map(item => (
                <div key={item.id} className="flex p-4 border-b">
                    <img src={item.image} className="w-12 h-12 object-contain mr-2" />
                    <div className='flex-1'>
                        <p className="text-sm font-bold">{item.name}</p>
                        <div className="flex items-center gap-2 mt-2">
                            <button className="bg-gray-200 px-2 rounded" onClick={() => dispatch(minusQuantity(item.id))}>-</button>
                            <span>{item.quantity}</span>
                            <button className="bg-gray-200 px-2 rounded" onClick={() => dispatch(plusQuantity(item.id))}>+</button>
                            <p className="text-sm font-bold"> {item.price} ₼ x {item.quantity}  = <span className="font-bold text-gray-900 ml-1">
                                    {(item.quantity * item.price).toFixed(2)} ₼
                                </span></p>
                            <button onClick={() => dispatch(deleteFromCart(item.id))} className="ml-auto text-xs text-red-500">Sil</button>
                        </div>
                    </div>
                </div>
            ))}
        
        </div>
    )









    
}

export default CartDrawer


