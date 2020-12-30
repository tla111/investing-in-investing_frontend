import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './home.css';

const Home = () => {
  return (
    <Container fluid>
      <Row className='top_row'>
        <div className=''></div>
      </Row>
      <Row className='middle_row'>
        <Col className='center_columns'>
          <div className='center_images image_1'></div>
        </Col>
        <Col className='center_columns'>
          <div className='center_images image_2'></div>
        </Col>
        <Col className='center_columns'>
          <div className='center_images image_3'></div>
        </Col>
      </Row>
      <Row className='bottom_row'>
        <div></div>
      </Row>
    </Container>
  );
};

export default Home;
