import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createBedRoom } from '../../../actions/realestateposts';
import './forms.css';

function BedRoomForm() {
  const dispatch = useDispatch();

  const [bedRoomPostData, setBedRoomPostData] = useState({
    beds: '',
    dressers: '',
    desks: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBedRoom(bedRoomPostData));
    alert(
      'Your Bedroom Will Look Great. Check Out the Next Room for More Inspiration'
    );
  };

  return (
    <div>
      <div className='form_container'>
        <Form onSubmit={handleSubmit}>
          <label>Beds</label>
          <select
            onChange={(e) =>
              setBedRoomPostData({
                ...bedRoomPostData,
                beds: e.target.value,
              })
            }
          >
            <option value=''>--Please choose an option--</option>
            <option value='Twin'>Twin</option>
            <option value='Full'> Full</option>
            <option value='Queen'> Queen</option>
          </select>
          <label>Dressers</label>
          <select
            onChange={(e) =>
              setBedRoomPostData({
                ...bedRoomPostData,
                dressers: e.target.value,
              })
            }
          >
            <option value=''>--Please choose an option--</option>
            <option value='Horizontal'> Horizontal</option>
            <option value='Vertical'> Vertical</option>
            <option value='Gentlemen Chest'> Gentlemen Chest</option>
          </select>
          <label>Desks</label>
          <select
            onChange={(e) =>
              setBedRoomPostData({
                ...bedRoomPostData,
                desks: e.target.value,
              })
            }
          >
            <option value=''>--Please choose an option--</option>
            <option value='Modern'> Modern</option>
            <option value='Small'> Small</option>
            <option value='Corner'> Corner</option>
          </select>
          <Button className='form_btn' variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default BedRoomForm;
