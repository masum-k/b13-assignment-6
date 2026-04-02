import React from 'react';

const CartProduct = ({ cartItem }) => {
    return (
        <>
            {
                cartItem.map(card =>
                    <div className="flex p-5 justify-between rounded-xl bg-[#f9fafc]">
                        <div className='flex items-center justify-center'>
                            <div className='bg-white p-3 rounded-full mr-4'>
                                <img className='w-7' src={card.image} alt="" />
                            </div>
                            <div>
                                <h3 className='font-semibold text-xl'>{card.name}</h3>
                                <p>${card.price}</p>
                            </div>
                        </div>
                        <button className='text-red-500'>Remove</button>
                    </div>
                )
            }
        </>
    );
};

export default CartProduct;
