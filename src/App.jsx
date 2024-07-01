import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("")
  async function generateAnswer (){
    setAnswer("loading...")
    const response = await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCtA0qBONuzYWCCuknfCw-gPKYnr_H1UA8",
      method: "POST",
      data: {
        contents:[{"parts":[{"text":question}]}]
        
      }
      
    });
    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);

  }

  return (
    <>
      <h1>Chat Bot</h1>
      <textarea value={question} onChange={(e)=> setQuestion(e.target.value)} cols="30" rows='15'></textarea><br></br><br></br>
      <button onClick={generateAnswer}>Generating...</button>
      
      <p>{answer}</p>
    </>
  )
}

export default App
