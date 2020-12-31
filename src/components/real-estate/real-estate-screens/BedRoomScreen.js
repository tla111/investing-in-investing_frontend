import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './realestate.css';
import BedRoomForm from '../forms/BedroomForm';

const BedRoomScreen = () => {
  return (
    <div className='real_estate_screen'>
      <Container fluid>
        <Row>
          <Col className='columns column_header' md={2}>
            <h4>Bed Size:</h4>
          </Col>
          <Col className='columns '>
            <h5>Twin</h5>
            <div className='living_room_type_1'></div>
          </Col>
          <Col className='columns'>
            <h5>Full</h5>
            <div className='living_room_type_2'></div>
          </Col>
          <Col className='columns'>
            <h5>Queen</h5>
            <div className='living_room_type_3'></div>
          </Col>
        </Row>
        <Row>
          <Col className='columns column_header' md={2}>
            <h4>Dressers:</h4>
          </Col>
          <Col className='columns'>
            <h5>Horizontal</h5>
            <div className='living_room_type_4'></div>
          </Col>
          <Col className='columns'>
            <h5>Vertical</h5>
            <div className='living_room_type_5'></div>
          </Col>
          <Col className='columns'>
            <h5>Gentlemen Chest</h5>
            <div className='living_room_type_6'></div>
          </Col>
        </Row>
        <Row>
          <Col className='columns column_header' md={2}>
            <h4>Desks:</h4>
          </Col>
          <Col className='columns'>
            <h5>Modern</h5>
            <div className='living_room_type_7'></div>
          </Col>
          <Col className='columns'>
            <h5>Small</h5>
            <div className='living_room_type_8'></div>
          </Col>
          <Col className='columns'>
            <h5>Corner</h5>
            <div className='living_room_type_9'></div>
          </Col>
        </Row>
        <Row className='bottom_row'>
          <BedRoomForm />
          <div className='status_container'>
            <h2>Choose Your Bedroom Furniture</h2>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default BedRoomScreen;
