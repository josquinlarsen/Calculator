import { useState } from 'react'
import { extractNetworkAddress } from './util/Calculator'
import './App.css'

import CalculatorForm from './components/CalculatorForm';

function App() {

  const [result, setResult] = useState([]);

  return (
    <>
      <h1>Subnet IPv4 Calculator</h1>
      <CalculatorForm
        setResult={setResult} />
      <div>
        {(result.length > 0) && (
          result.map((item) => (
            <p key={Math.random()}>{item}</p>
          )))}
      </div>

    </>
  )
}

export default App
