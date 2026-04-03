import React from 'react';
import CartProduct from '../../UI/CartProduct';
import { FiShoppingCart } from "react-icons/fi";
import { toast } from 'react-toastify';

const CartContainer = ({ cartItem, setcartItem, totalAmount, settotalAmount, productCount, setproductCount }) => {

    const clearItem = () => {
        setcartItem("")
        setproductCount(0)
        toast.success('Checkout Successful')
    }
    return (
        <>
            {
                cartItem.length >= 1
                    ? <div className="card card-border bg-base-100">
                        <div className="card-body">
                            <h2 className="card-title">Your Cart</h2>
                            < CartProduct
                                setcartItem={setcartItem}
                                cartItem={cartItem}
                                productCount={productCount}
                                setproductCount={setproductCount}
                                totalAmount={totalAmount}
                                settotalAmount={settotalAmount}
                            />
                            <div className='flex justify-between my-4'>
                                <p>Total:</p>
                                <h3 className='font-semibold text-2xl'>${totalAmount}</h3>
                            </div>
                            <div onClick={clearItem} className="card-actions justify-end ">
                                <button className="btn btn-block bg-linear-to-r from-[#6A2BF8] to-[#8D18F9] text-white font-medium rounded-full">Proceed To Checkout</button>
                            </div>
                        </div>
                    </div>
                    : <div className="card card-border bg-base-100">
                        <div className="card-body">
                            <h2 className="card-title">Your Cart</h2>
                            <div className='text-gray-400 flex flex-col justify-center items-center'>
                                <FiShoppingCart size={96} />
                                <h3 className='font-semibold text-2xl'>Your Card is Empty</h3>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default CartContainer;