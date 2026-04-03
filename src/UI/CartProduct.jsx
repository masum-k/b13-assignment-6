import React from 'react';
import { toast } from 'react-toastify';

const CartProduct = ({ cartItem, setcartItem, productCount, totalAmount, settotalAmount, setproductCount }) => {

    const removeFromCart = (card) => {
        const filterCartItem = cartItem.filter(item => item.name != card.name)
        toast.warning("Removed from cart")
        setcartItem(filterCartItem)
        setproductCount(productCount - 1)
        settotalAmount(totalAmount - card.price)
    }

    return (
        <>
            {
                cartItem.map((card, ind) =>
                    <div key={ind} className="flex p-5 justify-between rounded-xl bg-[#f9fafc]">
                        <div className='flex items-center justify-center'>
                            <div className='bg-white p-3 rounded-full mr-4'>
                                <img className='w-7' src={card.image} alt="" />
                            </div>
                            <div>
                                <h3 className='font-semibold text-xl'>{card.name}</h3>
                                <p>${card.price}</p>
                            </div>
                        </div>
                        <button onClick={() => removeFromCart(card)} className='cursor-pointer text-red-500'>Remove</button>
                    </div>
                )
            }
        </>
    );
};

export default CartProduct;
