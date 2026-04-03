import { use, useState } from "react";
import Cards from "../../UI/Cards";
import CartContainer from "../CartContainer/CartContainer";

const Card = ({ cardDataPromise, cartToggle, setcartToggle, productCount, setproductCount }) => {

    const [cartItem, setcartItem] = useState([])
    const [totalAmount, settotalAmount] = useState(0)
    
    const cardData = use(cardDataPromise)

    return (
        <div className='mt-32'>
            <div className='text-center space-y-3'>
                <h1 className='text-5xl font-bold'>Premium Digital Tools</h1>
                <p>Choose from our curated collection of premium digital products designed <br />
                    to boost your productivity and creativity.</p>
                <div className='p-2'>
                    <button onClick={() => setcartToggle(true)}
                        className={`btn ${cartToggle === true
                            ? 'bg-linear-to-r from-[#6A2BF8] to-[#8D18F9] text-white'
                            : ' text-black'} mr-2 rounded-3xl`}>Products</button>
                    <button onClick={() => setcartToggle(false)}
                        className={`btn ${cartToggle === false
                            ? 'bg-linear-to-r from-[#6A2BF8] to-[#8D18F9] text-white'
                            : ' text-black'} mr-2 rounded-3xl`}>Cart ({productCount})</button>
                </div>
            </div>
            {
                cartToggle ?
                    <div className="mt-8 md:grid grid-cols-3 container mx-auto">
                        {cardData.map(card =>
                            <Cards
                                key={card.id}
                                card={card}
                                productCount={productCount}
                                setproductCount={setproductCount}
                                cartItem={cartItem}
                                setcartItem={setcartItem}
                                totalAmount={totalAmount}
                                settotalAmount={settotalAmount}
                            />)}
                    </div>
                    :
                    <div className="mt-8  container mx-auto gap-4">
                        <CartContainer
                            cartItem={cartItem}
                            setcartItem={setcartItem}
                            totalAmount={totalAmount}
                            settotalAmount={settotalAmount}
                            productCount={productCount}
                            setproductCount={setproductCount}
                        />
                    </div>
            }
        </div>
    );
};

export default Card;