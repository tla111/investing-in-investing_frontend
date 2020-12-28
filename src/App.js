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

  const { room_shape, counter_top, refrigerator_style } = kitchenPostData;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        'http://127.0.0.1:8000/api/kitchen/',
        {
          room_shape: room_shape,
          counter_top: counter_top,
          refrigerator_style: refrigerator_style,
        },
        {
          headers: {
            Authorization: `AUTHORIZATION_KEY`,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));

    clear();
  };

  const clear = () => {
    setKitchenPostData({
      room_shape: '',
      counter_top: '',
      refrigerator_style: '',
    });
  };

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/kitchen/')
      .then((res) => setKitchenInfo(res.data))
      .catch((err) => console.log(err));
  }, [kitchenInfo]);

  return (
    <div>
      <div className='form_container'>
        <Form onSubmit={handleSubmit}>
          <label>Room Type</label>
          <select
            onChange={(e) =>
              setKitchenPostData({
                ...kitchenPostData,
                room_shape: e.target.value,
              })
            }
          >
            <option value=''>--Please choose an option--</option>
            <option value='Linear (Two Parallel Lines)'>
              Linear (Two Parallel Lines)
            </option>
            <option value='U-shaped'> U-shaped</option>
            <option value='L-shaped'> L-shaped</option>
          </select>
          <label>Refrigerator Style</label>
          <select
            onChange={(e) =>
              setKitchenPostData({
                ...kitchenPostData,
                refrigerator_style: e.target.value,
              })
            }
          >
            <option value=''>--Please choose an option--</option>
            <option value='Side-By-Side'> Side-By-Side</option>
            <option value='Bottom-Freezer'> Bottom-Freezer</option>
            <option value='Top-Freezer'> Top-Freezer</option>
          </select>
          <label>Counter Top</label>
          <select
            onChange={(e) =>
              setKitchenPostData({
                ...kitchenPostData,
                counter_top: e.target.value,
              })
            }
          >
            <option value=''>--Please choose an option--</option>
            <option value='Granite'> Granite</option>
            <option value='Quartz'> Quartz</option>
            <option value='Wood'> Wood</option>
          </select>
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
