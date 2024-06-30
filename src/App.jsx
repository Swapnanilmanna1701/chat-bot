import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function generateAnswer (){
    const response = await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCtA0qBONuzYWCCuknfCw-gPKYnr_H1UA8",
      method: "POST",
      data: {
        contents:[{"parts":[{"text":"Explain how AI works"}]}]
        
      }
      
    })

  }

  return (
    <>
      <h1>Chat Bot</h1>
    </>
  )
}

export default App
