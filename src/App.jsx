import "./index.css"
import "./App.css"
import { useState } from 'react'
import MainSection from './components/MainSection'
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"

function App() {
  const [cardsData,setcardsData] = useState([]);

  return (
    <>
    <div className='app'>
      <MainSection />
      <Section2  setcardsData={setcardsData}/>
      {(cardsData.length>0)&&
        <Section3 cardsData={cardsData} />
      }
    </div>
    </>
  )
}

export default App
