import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './realestate.css';
import KitchenForm from '../forms/KitchenForm';
import KitchenInfo from '../room-information/KitchenInfo';
// import KitchenData from '../rooms/kitchen/KitchenData';

const KitchenScreen = () => {
  return (
    <div className='real_estate_screen'>
      <Container fluid>
        <Row>
          <Col className='columns' md={2}>
            <h4>Kitchen Type:</h4>
          </Col>
          <Col className='columns'>
            <h5>Linear (Two Parallel Lines)</h5>
            <div className='kitchen_type_1'></div>
          </Col>
          <Col className='columns'>
            <h5>U-Shaped</h5>
            <div className='kitchen_type_2'></div>
          </Col>
          <Col className='columns'>
            <h5>L-Shaped</h5>
            <div className='kitchen_type_3'></div>
          </Col>
        </Row>
        <Row>
          <Col className='columns' md={2}>
            <h4>Refrigerator Style:</h4>
          </Col>
          <Col className='columns'>
            <h5>Linear (Two Parallel Lines)</h5>
            <div className='kitchen_type_1'></div>
          </Col>
          <Col className='columns'>
            <div className='kitchen_type_1'></div>
          </Col>
          <Col className='columns'>
            <div className='kitchen_type_1'></div>
          </Col>
        </Row>
        <Row>
          <Col className='columns' md={2}>
            <h4>Counter Top:</h4>
          </Col>
          <Col className='columns'>
            <h5>Linear (Two Parallel Lines)</h5>
            <div className='kitchen_type_1'></div>
          </Col>
          <Col className='columns'>
            <div className='kitchen_type_1'></div>
          </Col>
          <Col className='columns'>
            <div className='kitchen_type_1'></div>
          </Col>
        </Row>
        <Row className='bottom_row'>
          <KitchenForm />
          <div className='status_container'>
            <h2>Status: Form Submitted</h2>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default KitchenScreen;
