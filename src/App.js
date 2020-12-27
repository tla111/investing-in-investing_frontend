import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [kitchenInfo, setKitchenInfo] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/kitchen/')
      .then((res) => setKitchenInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {kitchenInfo.map((item) => (
          <div key={item.id}>
            <li>id: {item.id}</li>
            <li>Room Shape: {item.room_shape}</li>
            <li>Refrigerator Style: {item.refrigerator_style}</li>
            <li>Counter Top: {item.counter_top}</li>
            <br></br>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
