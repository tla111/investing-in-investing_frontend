import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createKitchen } from '../../../actions/kitchenposts';
import './forms.css';

function KitchenForm() {
  const dispatch = useDispatch();

  const [kitchenPostData, setKitchenPostData] = useState({
    room_shape: '',
    counter_top: '',
    refrigerator_style: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createKitchen(kitchenPostData));
  };

  return (
    <div>
      <div className='form_container'>
        <Form onSubmit={handleSubmit}>
          <label>Kitchen Room Type</label>
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
          <Button className='form_btn' variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default KitchenForm;
