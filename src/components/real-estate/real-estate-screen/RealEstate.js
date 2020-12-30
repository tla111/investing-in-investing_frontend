import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './realestate.css';
import KitchenForm from '../forms/KitchenForm';
// import KitchenData from '../rooms/kitchen/KitchenData';

const RealEstate = () => {
  return (
    <div className='real_estate_screen'>
      <Container fluid>
        <Row className='forms_container'>
          <KitchenForm />
        </Row>
        {/* <Row className='room_data_container'>
        <KitchenData />
      </Row> */}
      </Container>
    </div>
  );
};

export default RealEstate;
