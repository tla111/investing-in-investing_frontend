import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createLivingRoom } from '../../../actions/realestateposts';
import './forms.css';

function LivingRoomForm() {
  const dispatch = useDispatch();

  const [livingRoomPostData, setLivingRoomPostData] = useState({
    sofas: '',
    televisions: '',
    chairs: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createLivingRoom(livingRoomPostData));
    alert(
      'Your Living Room Will Look Great. Check Out the Next Room for More Inspiration'
    );
  };

  return (
    <div>
      <div className='form_container'>
        <Form onSubmit={handleSubmit}>
          <label>Sofas</label>
          <select
            onChange={(e) =>
              setLivingRoomPostData({
                ...livingRoomPostData,
                sofas: e.target.value,
              })
            }
          >
            <option value=''>--Please choose an option--</option>
            <option value='Chesterfield (Classic)'>
              Chesterfield (Classic)
            </option>
            <option value='Mid-Century (Modern)'> Mid-Century (Modern)</option>
            <option value='Lawson (Transitional)'>
              {' '}
              Lawson (Transitional)
            </option>
          </select>
          <label>Televisions</label>
          <select
            onChange={(e) =>
              setLivingRoomPostData({
                ...livingRoomPostData,
                televisions: e.target.value,
              })
            }
          >
            <option value=''>--Please choose an option--</option>
            <option value='OLED'> OLED</option>
            <option value='LED'> LED</option>
            <option value='PLASMA'> PLASMA</option>
          </select>
          <label>Chairs</label>
          <select
            onChange={(e) =>
              setLivingRoomPostData({
                ...livingRoomPostData,
                chairs: e.target.value,
              })
            }
          >
            <option value=''>--Please choose an option--</option>
            <option value='Egg'> Egg</option>
            <option value='Wingback'> Wingback</option>
            <option value='Chaise Lounge'> Chaise Lounge</option>
          </select>
          <Button className='form_btn' variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default LivingRoomForm;
