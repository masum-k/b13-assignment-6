import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import CardContainer from './components/CardContainer/CardContainer'
import Navbar from './components/Navbar/Navbar'
import Rating from './UI/Rating'
import Cards from './UI/Cards'
import Pricing from './components/Pricing/Pricing'
import Steps from './components/Steps/Steps'
import { ToastContainer } from 'react-toastify';

const cardDataPromise = fetch('cardData.json')
  .then(res => res.json());

function App() {
  const [productCount, setproductCount] = useState(0)
  return (
    <div>
      <Navbar productCount={productCount} />
      <Banner />
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <CardContainer
          productCount={productCount}
          setproductCount={setproductCount}
          cardDataPromise={cardDataPromise} />
      </Suspense>
      <Rating />
      <Steps />
      <Pricing />
      <ToastContainer />
    </div>
  )
}

export default App
