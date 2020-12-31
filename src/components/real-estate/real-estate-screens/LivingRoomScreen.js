import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './realestate.css';
import LivingRoomForm from '../forms/LivingRoomForm';

const KitchenScreen = () => {
  return (
    <div className='real_estate_screen'>
      <Container fluid>
        <Row>
          <Col className='columns column_header' md={2}>
            <h4>Sofas:</h4>
          </Col>
          <Col className='columns '>
            <h5>Chesterfield (Classic)</h5>
            <div className='image_type_1'></div>
          </Col>
          <Col className='columns'>
            <h5>Mid-Century (Modern)</h5>
            <div className='image_type_2'></div>
          </Col>
          <Col className='columns'>
            <h5>Lawson (Transitional)</h5>
            <div className='image_type_3'></div>
          </Col>
        </Row>
        <Row>
          <Col className='columns column_header' md={2}>
            <h4>Televisions:</h4>
          </Col>
          <Col className='columns'>
            <h5>OLED</h5>
            <div className='image_type_4'></div>
          </Col>
          <Col className='columns'>
            <h5>LED</h5>
            <div className='image_type_5'></div>
          </Col>
          <Col className='columns'>
            <h5>Plasma</h5>
            <div className='image_type_6'></div>
          </Col>
        </Row>
        <Row>
          <Col className='columns column_header' md={2}>
            <h4>Chairs:</h4>
          </Col>
          <Col className='columns'>
            <h5>Egg</h5>
            <div className='image_type_7'></div>
          </Col>
          <Col className='columns'>
            <h5>Wingback</h5>
            <div className='image_type_8'></div>
          </Col>
          <Col className='columns'>
            <h5>Chaise Lounge</h5>
            <div className='image_type_9'></div>
          </Col>
        </Row>
        <Row className='bottom_row'>
          <LivingRoomForm />
          <div className='status_container'>
            <h2>Choose Your Living Room Furniture</h2>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default KitchenScreen;
