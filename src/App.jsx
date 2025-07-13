import { useState } from 'react'
import { extractNetworkAddress } from './util/Calculator'
import './App.css'

import CalculatorForm from './components/CalculatorForm';

function App() {

  const [result, setResult] = useState([]);

  const displayResult = (
    <>
    <div className='resultsDisplay'>
      {result.map((item, idx)=> (
        <p key={idx}>{(idx < 3) ? item + '.' : item}</p>
      ))}
    </div>
    </>
  )

  return (
    <>
      <h1>Subnet IPv4 Calculator</h1>
      <CalculatorForm
        setResult={setResult} />
      <div>
        {(result.length > 0) && 
        (displayResult)}
      </div>

    </>
  )
}

export default App
