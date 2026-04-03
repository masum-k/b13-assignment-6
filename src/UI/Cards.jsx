import React from 'react';
import { toast } from 'react-toastify';
const Cards = ({ card,
    productCount,
    setproductCount,
    cartItem,
    setcartItem,
    totalAmount,
    settotalAmount }) => {
    const updateProductCount = () => {
        setproductCount(productCount + 1)
        setcartItem([...cartItem, card])
        settotalAmount(totalAmount + card.price)
        toast.success("Added To Cart")
    }
    return (
        <div className="card bg-base-100 border-2 mx-2 my-2 border-gray-400">
            <div className="card-body pt-2 ">
                <span className={`text-white font-semibold badge badge-xs place-self-end 
                    ${card.tag === 'Best Seller' ? 'badge-warning'
                        : card.tag === 'Popular' ? 'badge-info'
                            : 'badge-success'}`}>{card.tag}</span>
                <div className='space-y-3'>
                    <div className='border border-gray-400 rounded-full w-10 p-2'>
                        <img src={card.image} alt="" />
                    </div>
                    <h2 className="text-3xl font-bold">{card.name}</h2>
                    <h3 className='w-80'>{card.description}</h3>
                    <span className="text-xl">${card.price}/{card.period}</span>
                </div>
                <ul className="mt-2 flex flex-col gap-2 text-xs">
                    {
                        card.features.map((feature, ind) => <li key={ind}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>

                            <span>{feature}</span>
                        </li>)
                    }
                </ul>
                <div className="mt-6">
                    <button  onClick={updateProductCount}
                        className="btn rounded-full 
                    bg-linear-to-r from-[#652CF7] to-[#9116FA]
                     btn-block text-white">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default Cards;