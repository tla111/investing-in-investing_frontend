import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './App.css';

function App() {
  const [kitchenInfo, setKitchenInfo] = useState([]);
  const [kitchenPostData, setKitchenPostData] = useState({
    room_shape: '',
    counter_top: '',
    refrigerator_style: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(kitchenPostData);
  };

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/kitchen/')
      .then((res) => setKitchenInfo(res.data))
      .catch((err) => console.log(err));
  }, [kitchenInfo]);

  const { room_shape, counter_top, refrigerator_style } = kitchenPostData;
  return (
    <div>
      <div className='form_container'>
        <Form onSubmit={handleSubmit}>
          <input
            className='form-control'
            type='text'
            placeholder='Room Shape'
            value={room_shape}
            onChange={(e) => {
              setKitchenPostData({
                ...kitchenPostData,
                room_shape: e.target.value,
              });
            }}
          />
          <input
            className='form-control'
            type='text'
            placeholder='Refrigerator Style'
            value={refrigerator_style}
            onChange={(e) => {
              setKitchenPostData({
                ...kitchenPostData,
                refrigerator_style: e.target.value,
              });
            }}
          />
          <input
            className='form-control'
            type='text'
            placeholder='Counter Top'
            value={counter_top}
            onChange={(e) => {
              setKitchenPostData({
                ...kitchenPostData,
                counter_top: e.target.value,
              });
            }}
          />
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
      {/* */}
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
