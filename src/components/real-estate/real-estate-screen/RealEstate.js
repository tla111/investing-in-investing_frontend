import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './realestate.css';
// import KitchenForm from '../forms/KitchenForm';
import KitchenInfo from '../room-information/KitchenInfo';
// import KitchenData from '../rooms/kitchen/KitchenData';

const RealEstate = () => {
  return (
    <div className='real_estate_screen'>
      <Container fluid>
        <Row>
          <Col className='columns'>
            <KitchenInfo />
          </Col>
          <Col className='columns'>
            <KitchenInfo />
          </Col>
          <Col className='columns'>
            <KitchenInfo />
          </Col>
          <Col className='columns'>
            <KitchenInfo />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RealEstate;
