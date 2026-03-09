


import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { plusQuantity, minusQuantity, deleteFromCart, toggleCart } from '../store/cartSlice'

const CartDrawer = () => {
    const { cart, isOpen } = useSelector((state) => state.cart)
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

            {cart.length > 0 ? (
                <div className="p-4 mt-auto border-t space-y-4">
                    <div className="flex justify-between items-center font-bold text-lg">
                        <span>Ümumi Məbləğ:</span>
                        <span className="text-blue-600">{totalPrice.toFixed(2)} ₼</span>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                        Sifarişi Tamamla
                    </button>
                </div>
            ) : (
                <div className="p-8 text-center text-gray-500">
                    Səbətiniz boşdur.
                </div>
            )}

        </div>
    








        
        
    )









    
}

export default CartDrawer


