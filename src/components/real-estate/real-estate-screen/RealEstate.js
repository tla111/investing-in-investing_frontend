import React from 'react';
import { Row, Col } from 'react-bootstrap';
import KitchenForm from '../forms/KitchenForm';
import KitchenData from '../rooms/kitchen/KitchenData';

const RealEstate = () => {
  return (
    <Row>
      <Col className='forms_container'>
        <KitchenForm />
      </Col>
      <Col className='room_data_container'>
        <KitchenData />
      </Col>
    </Row>
  );
};

export default RealEstate;
