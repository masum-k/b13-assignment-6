import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Card from './components/Cards/CardContainer'
import Navbar from './components/Navbar/Navbar'
import Rating from './UI/Rating'

const cardDataPromise = fetch('cardData.json')
  .then(res => res.json());

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Rating />
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Card cardDataPromise={cardDataPromise} />
      </Suspense>
    </div>
  )
}

export default App
