import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [question, setQuestion] = useState("");
  async function generateAnswer (){
    console.log("loading...")
    const response = await axios({
      url:`process.env.GEMINI_URL`,
      method: "POST",
      data: {
        contents:[{"parts":[{"text":"Explain how AI works"}]}]
        
      }
      
    });
    console.log(response['data']['candidates'][0]['content']['parts'][0]['text']);

  }

  return (
    <>
      <h1>Chat Bot</h1>
      <button onClick={generateAnswer}>Generate Answer</button>
    </>
  )
}

export default App
