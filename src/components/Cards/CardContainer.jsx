import { use } from "react";
import Cards from "../../UI/Cards";


const Card = ({ cardDataPromise }) => {
    const cardData = use(cardDataPromise)
    return (
        <div className='mt-32'>
            <div className='text-center space-y-3'>
                <h1 className='text-5xl font-bold'>Premium Digital Tools</h1>
                <p>Choose from our curated collection of premium digital products designed <br />
                    to boost your productivity and creativity.</p>
                <div className='border border-gray-300 p-1 mx-auto w-[192px] rounded-3xl'>
                    <button className="btn bg-linear-to-r from-[#6A2BF8] to-[#8D18F9] mr-2 btn-primary rounded-3xl text-white">Products</button>
                    <button className='btn rounded-3xl'>Cart ()</button>
                </div>
            </div>

            <div className="mt-8 grid grid-cols-3 container mx-auto gap-4">
                {
                    cardData.map(card => <Cards key={card.id} card={card} />)
                }
            </div>
        </div>
    );
};

export default Card;