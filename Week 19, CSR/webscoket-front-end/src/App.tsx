import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket >(null);
  const [latestMessage, setLatestMessage] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:5000');
    socket.onopen = () => {
      console.log('Socket Connected!!!');
      setSocket(socket)
    }

    socket.onmessage = (message) => {
      console.log('Received message ', message.data)
      setLatestMessage([...latestMessage, message.data])
    }
    setSocket(socket)
    return () => {
      socket.close()
    }
  }, [])

  if(!socket) {
    return <div>Loading...</div>
  }


  const messages = latestMessage.map(message => {
    return <li>{message}</li>
  })
  return (
    <>
    <input onChange={(e) => {
      setMessage(e.target.value)
    }} />
      <button onClick={() => {
        socket.send(message)
      }}>Send</button>
      <ul>
        {messages}
      </ul>
    </>
  )
}

export default App
