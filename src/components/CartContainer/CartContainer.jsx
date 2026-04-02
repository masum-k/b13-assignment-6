import React from 'react';
import CartProduct from '../../UI/CartProduct';


const CartContainer = ({ cartItem }) => {
    return (
        <div className="card card-border bg-base-100">
            <div className="card-body">
                <h2 className="card-title">Your Cart</h2>
                < CartProduct cartItem={cartItem} />
                <div className='flex justify-between my-4'>
                    <p>Total:</p>
                    <h3 className='font-semibold text-2xl'>$</h3>
                </div>
                <div className="card-actions justify-end ">
                    <button className="btn btn-block bg-linear-to-r from-[#6A2BF8] to-[#8D18F9] text-white font-medium rounded-full">Proceed To Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartContainer;