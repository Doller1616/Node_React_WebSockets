import { useState } from "react";
import { useEffect } from "react";

function App() {
  // const socket = new WebSocket("wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self");
  const socket = new WebSocket("ws://localhost:1616");
   
  const [first, setfirst] = useState("")


  useEffect(() => {
    // Connection opened
    socket.addEventListener("open", (event) => {
      socket.send("Hello Server!");
    });


    socket.addEventListener('message', (event) => {
      console.log('Message from server ', event.data);
      setfirst(event.data)
    });

  }, []);

  return <div className="App">
    
  <h1> {first} </h1>  
    
    </div>;
}

export default App;
