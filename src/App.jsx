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
import Footer from './components/Footer/Footer'

const cardDataPromise = fetch('cardData.json')
  .then(res => res.json());

function App() {
  const [productCount, setproductCount] = useState(0)
  const [cartToggle, setcartToggle] = useState(true)
  return (
    <div>
      <Navbar productCount={productCount} />
      <Banner />
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <CardContainer
          productCount={productCount}
          setproductCount={setproductCount}
          cartToggle={cartToggle}
          setcartToggle={setcartToggle}
          cardDataPromise={cardDataPromise} />
      </Suspense>
      {
        cartToggle
          ?
          <>
            <Rating />
            <Steps />
            <Pricing />
          </>
          : ""
      }
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
