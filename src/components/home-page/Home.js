import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import './home.css';

const Home = () => {
  return (
    <Container fluid>
      <Row className='main_container'>
        <Col className='left_column' md={4}>
          <div className='house_images image_1'></div>
          <div className='house_images image_2'></div>
          <div className='house_images image_3'></div>
        </Col>
        <Col className='right_column'>
          <div className='images image_4'></div>
          <div className='section_box'>
            {/* <h1>What are you investing in your investment?</h1> */}
            <h4>WHAT ARE YOU INVESTING IN FOR YOUR INVESTMENT?</h4>
            <button className='section_box_btn'>
              <Link to='/kitchen' className='link_button'>
                LEARN MORE
              </Link>
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
