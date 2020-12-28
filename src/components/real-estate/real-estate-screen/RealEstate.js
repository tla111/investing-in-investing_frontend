import React from 'react';
import { Container, Row } from 'react-bootstrap';
import KitchenForm from '../forms/KitchenForm';
import KitchenData from '../rooms/kitchen/KitchenData';

const RealEstate = () => {
  return (
    <Container fluid>
      <Row className='forms_container'>
        <KitchenForm />
      </Row>
      <Row className='room_data_container'>
        <KitchenData />
      </Row>
    </Container>
  );
};

export default RealEstate;
