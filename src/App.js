import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [kitchenInfo, setKitchenInfo] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/kitchen/')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
